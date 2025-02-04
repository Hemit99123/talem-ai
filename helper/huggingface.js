import axios from "axios";


// Call Hugging Face Inference API for text generation.
export const generateText = async (prompt) => {
    const url = "https://api-inference.huggingface.co/models/google/flan-t5-base";
    try {
      const response = await axios.post(
        url,
        { inputs: prompt, parameters: { max_new_tokens: 300, temperature: 0.8 } },
        {
          headers: { Authorization: `Bearer ${process.env.HF_API_KEY}` },
        }
      );
      // The API returns an array of generations.
      const generation = response.data[0];
      return generation.generated_text || generation.text;
    } catch (error) {
      console.error("Error generating text:", error.response?.data || error.message);
      throw error;
    }
  };