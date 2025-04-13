import { useState, useEffect, useRef } from "react";

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

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const handleChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
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
            Have a project in mind? Let&apos;s discuss how I can help you
            achieve your goals.
          </p>

          {/* Form Card */}
          <div
            className={`relative transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative rounded-xl border border-[#3f3f46]/30 bg-card p-6 backdrop-blur-sm md:p-8">
              {/* bg light effect */}
              <div
                className="pointer-events-none absolute inset-0 before:absolute before:h-40 before:w-40 before:animate-pulse-soft before:rounded-full before:bg-gradient-to-br before:from-purple-500/20 before:via-pink-500/10 before:to-transparent before:opacity-30 before:blur-xl before:content-['']"
                style={{
                  background:
                    "radial-gradient(circle at 70% 30%, rgba(192, 132, 252, 0.1) 0%, transparent 60%), radial-gradient(circle at 30% 70%, rgba(244, 114, 182, 0.05) 0%, transparent 60%)",
                }}
              ></div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-1 block text-sm font-medium text-gray-300"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={handleChange}
                      className={`gcl-form-control w-full rounded-lg border border-border bg-input p-3 text-foreground transition-all duration-200`}
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-1 block text-sm font-medium text-gray-300"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={handleChange}
                      className={`gcl-form-control w-full rounded-lg border border-border bg-input p-3 text-foreground transition-all duration-200`}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      className={`gcl-form-control w-full rounded-lg border border-border bg-input p-3 text-foreground transition-all`}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1 block text-sm font-medium text-gray-300"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      onChange={handleChange}
                      className={`gcl-form-control w-full rounded-lg border border-border bg-input p-3 text-foreground transition-all duration-200`}
                      placeholder="+1 (555) 123-4567"
                    />
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
                    name="message"
                    rows="4"
                    onChange={handleChange}
                    className="gcl-form-control w-full rounded-lg border border-border bg-input p-3 text-foreground transition-all duration-200"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="hover:bg-secondary/90 group flex w-full items-center justify-center rounded-lg bg-secondary px-4 py-3 font-medium text-white transition-all duration-300"
                  >
                    Send Message
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
