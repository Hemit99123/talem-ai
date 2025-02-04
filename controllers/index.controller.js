import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { generateText } from "../helper/huggingface";
import { getEmbedding } from "../helper/embedding";
import { supabase } from "../lib/supabase";

export const indexController = {
  generateAndStoreEmbeddings: async () => {
    const loader = new CheerioWebBaseLoader("https://www.inboxpurge.com/faq");
    const docs = await loader.load();

    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const chunks = await textSplitter.splitDocuments(docs);

    const promises = chunks.map(async (chunk) => {
      const cleanChunk = chunk.pageContent.replace(/\n/g, " ");
      const embedding = await getEmbedding(cleanChunk);

      const { error } = await supabase.from("documents").insert({
        content: cleanChunk,
        embedding, // Store the averaged embedding
      });

      if (error) {
        throw error;
      }
    });

    await Promise.all(promises);
  },

  handleQuery: async (query) => {
    const input = query.replace(/\n/g, " ");
    const embedding = await getEmbedding(input);

    const { data: documents, error } = await supabase.rpc("match_documents", {
      query_embedding: embedding,
      match_threshold: 0.5,
      match_count: 10,
    });

    if (error) throw error;

    let contextText = documents
      .map((document) => `${document.content.trim()}---\n`)
      .join("");

    const prompt = `You are a representative that is very helpful when it comes to talking about InboxPurge. Only answer truthfully and be as helpful as you can!
Context: "${contextText}"
Question: "${query}"
Answer:`;

    const answer = await generateText(prompt);
    return answer;
  },
};
