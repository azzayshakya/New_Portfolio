import { useState, useEffect, useRef } from "react";
import { useDefineGetInTouchForm } from "../constants/useDefineGetInTouchForm";
import useSubmitGetInTouchForm from "../constants/useSubmitGetInTouchForm";

export default function ContactForm() {
  const [visible, setVisible] = useState(false);
  const ContactFormRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-100px 0px",
      },
    );

    if (ContactFormRef.current) {
      observer.observe(ContactFormRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const { form, isSubmitting } = useDefineGetInTouchForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const { SubmitGetInTouchFormMutation, isSubmissionPending } =
    useSubmitGetInTouchForm();
   

  const onSubmit = (data) => {
   
    SubmitGetInTouchFormMutation(data);
  };

  return (
    <div
      id="contact"
      className="container relative w-full overflow-hidden py-16 md:py-24"
      ref={ContactFormRef}
    >
      <div className="mx-auto px-4 sm:px-6">
        <div
          className={`mx-auto max-w-3xl transition-all duration-700 ease-out`}
        >
          <h2
            className={`mb-4 text-center text-3xl font-bold transition-all duration-700 ease-out md:text-4xl ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Get in <span className="text-secondary">touch</span>
          </h2>

          <p
            className={`mb-10 text-center text-gray-300/90 transition-all duration-700 ease-out ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Have a project in mind? Let&apos;s discuss how I can help you achieve
            your goals.
          </p>

          <div
            className={`relative transition-all duration-700 ease-out ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative rounded-xl border border-[#3f3f46]/30 bg-card p-6 backdrop-blur-sm md:p-8">
              <div
                className="pointer-events-none absolute inset-0 before:absolute before:h-40 before:w-40 before:animate-pulse-soft before:rounded-full before:bg-gradient-to-br before:from-purple-500/20 before:via-pink-500/10 before:to-transparent before:opacity-30 before:blur-xl before:content-['']"
                style={{
                  background:
                    "radial-gradient(circle at 70% 30%, rgba(192, 132, 252, 0.1) 0%, transparent 60%), radial-gradient(circle at 30% 70%, rgba(244, 114, 182, 0.05) 0%, transparent 60%)",
                }}
              ></div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative z-10 space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-sm font-medium text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      {...register("name")}
                      type="text"
                      className="gcl-form-control w-full rounded-lg border border-border bg-input p-3 text-foreground"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      {...register("email")}
                      type="email"
                      className="gcl-form-control w-full rounded-lg border border-border bg-input p-3 text-foreground"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="mobile"
                      className="mb-1 block text-sm font-medium text-gray-300"
                    >
                      Mobile
                    </label>
                    <input
                      id="mobile"
                      {...register("mobile")}
                      type="tel"
                      className="gcl-form-control w-full rounded-lg border border-border bg-input p-3 text-foreground"
                      placeholder="9876543210"
                    />
                    {errors.mobile && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.mobile.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="mb-1 block text-sm font-medium text-gray-300"
                    >
                      Location
                    </label>
                    <input
                      id="location"
                      {...register("location")}
                      type="text"
                      className="gcl-form-control w-full rounded-lg border border-border bg-input p-3 text-foreground"
                      placeholder="City, Country"
                    />
                    {errors.location && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.location.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows="4"
                    className="gcl-form-control w-full rounded-lg border border-border bg-input p-3 text-foreground"
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmissionPending}
                    className="hover:bg-secondary/90 group flex w-full items-center justify-center rounded-lg bg-secondary px-4 py-3 font-medium text-white transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting || isSubmissionPending
                      ? "Sending..."
                      : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
