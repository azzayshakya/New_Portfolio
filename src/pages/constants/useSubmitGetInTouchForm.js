import { submitGetInTouch } from "@/apis/apiServices";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useSubmitGetInTouchForm() {
  const navigate = useNavigate();
  const {
    mutate: SubmitGetInTouchFormMutation,
    isPending: isSubmissionPending,
    isSuccess,
    isError,
    error,
    reset, 
  } = useMutation({
    mutationFn: submitGetInTouch,
    onSuccess: () => {
      toast.success(
        "Thank you for contacting us! We've received your message and will get back to you shortly. 😊",
        
      );
      reset();
      navigate("/");
    },
    onError: (error) => {
        // console.log(error.message)
      toast.error("Oops! Something went wrong. Please try again later.");
      navigate("/");

    },
  });

  return {
    SubmitGetInTouchFormMutation,
    isSubmissionPending,
    isSuccess,
    isError,
    error,
    reset
  };
}
