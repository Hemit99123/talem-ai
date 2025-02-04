import axios from "axios";

const averageEmbedding = (embeddings) => {
  // embeddings is an array of arrays (each inner array is the embedding for a token)
  const numTokens = embeddings.length;
  if (numTokens === 0) return [];
  
  const embeddingDim = embeddings[0].length;
  const avg = new Array(embeddingDim).fill(0);

  embeddings.forEach((tokenEmbedding) => {
    tokenEmbedding.forEach((value, idx) => {
      avg[idx] += value;
    });
  });

  return avg.map((sum) => sum / numTokens);
};

// Call Hugging Face Inference API for embeddings.
export const getEmbedding = async (text) => {
    const url = "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2";
    try {
      const response = await axios.post(
        url,
        { inputs: text },
        {
          headers: { Authorization: `Bearer ${process.env.HF_API_KEY}` },
        }
      );
      // Response is an array (per-token embeddings), so average them.
      const tokenEmbeddings = response.data;
      return averageEmbedding(tokenEmbeddings);
    } catch (error) {
      console.error("Error fetching embedding:", error.response?.data || error.message);
      throw error;
    }
  };
  