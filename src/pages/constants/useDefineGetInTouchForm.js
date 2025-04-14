import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getInTouchFormSchema } from "./useGetInTouchFormValidation";

export const useDefineGetInTouchForm = () => {
  const form = useForm({
    resolver: zodResolver(getInTouchFormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      location: "",
      message: "",
    },
  });

  const {
    formState: { isSubmitting, isDirty },
  } = form;

  return {
    form,
    isSubmitting,
    isDirty,
  };
};
