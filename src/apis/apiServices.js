import axios from "axios";

export const submitGetInTouch = async (formData) => {
  try {
    const response = await axios.post(
      "https://we-chat-backend-kappa.vercel.app/portfolio/GetInTouch", 
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Submission failed");
  }
};