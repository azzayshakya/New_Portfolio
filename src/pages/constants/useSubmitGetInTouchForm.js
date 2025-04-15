import { submitGetInTouch } from "@/apis/apiServices";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useSubmitGetInTouchForm() {
  const {
    mutate: SubmitGetInTouchFormMutation,
    isPending: isSubmissionPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: submitGetInTouch,
    onSuccess: () => {
      toast.success(
        "Thank you for contacting us! We've received your message and will get back to you shortly. 😊",
        
      );
    },
    onError: (error) => {
      toast.error("Oops! Something went wrong. Please try again later.");
    },
  });

  return {
    SubmitGetInTouchFormMutation,
    isSubmissionPending,
    isSuccess,
    isError,
    error,
  };
}
