import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  const AboutSectionRef = useRef(null);

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

    if (AboutSectionRef.current) {
      observer.observe(AboutSectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ajayshakya7376@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      <section 
        id="about"
        ref={AboutSectionRef}
        className="container w-full px-4 py-16 text-white md:px-16"
      >
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div
            className={`relative col-span-2 flex min-h-[500px] items-end overflow-hidden rounded-2xl p-6 transition-all duration-700 ease-out hover:scale-[1.02] ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <img
              src="/b1.svg"
              alt="Laptop"
              className="absolute inset-0 z-0 h-full w-full object-cover"
            />
            <div className="relative z-10">
              <p className="text-2xl font-semibold text-white lg:text-4xl">
                I prioritize client <br />
                collaboration, fostering <br />
                open communication
              </p>
            </div>
          </div>

          <div className="col-span-2 flex flex-col gap-6">
            <div
              className={`bg-primary-light relative flex min-h-[240px] flex-col justify-between rounded-2xl p-6 transition-all duration-700 ease-out hover:scale-[1.02] ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="mb-4 text-2xl font-bold leading-snug">
                I&apos;m very flexible with time <br />
                zone communications
              </h3>
              <img
                src="https://media.istockphoto.com/id/2030192156/photo/global-data-flow-and-connectivity-east-asia.jpg?s=612x612&w=0&k=20&c=gO-qUI7JRW9z4lG3jhNbmDMrLhOPRmuH7R5eG-Acq8A="
                alt="Globe"
                className="absolute right-0 top-0 h-full w-full rounded-2xl opacity-40"
              />
            </div>

            <div
              className={`bg-primary-light flex min-h-[240px] flex-col justify-between rounded-2xl p-6 transition-all duration-700 ease-out hover:scale-[1.02] ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="mb-1 text-sm text-gray-400">
                I constantly try to improve
              </p>
              <h3 className="mb-4 text-2xl font-bold">My tech stack</h3>
              <div className="grid grid-cols-3 gap-2 text-sm sm:grid-cols-4">
                {[
                  "ReactJS",
                  "TanStack",
                  "Express",
                  "MongoDB",
                  "JavaScript",
                  "Multer",
                  "Zod",
                  "Tailwind",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-secondary px-3 py-2 text-center text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          <div className="col-span-full flex flex-col gap-6 lg:col-span-2">
            <div
              className={`bg-primary-light relative overflow-hidden rounded-2xl border border-[#1c1f3f] p-6 transition-all duration-700 ease-out hover:scale-[1.02] ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h2 className="relative z-10 text-2xl font-bold leading-snug md:text-3xl">
                Tech enthusiast with a <br /> passion for development.
              </h2>
              <div className="absolute bottom-0 right-4 z-0 h-full">
                <img src="gsap.svg" alt="" className="h-full w-full" />
              </div>
            </div>

            <div
              className={`flex flex-col justify-between gap-6 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-800 p-6 transition-all duration-700 ease-out hover:scale-[1.02] ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <h2 className="text-2xl font-bold leading-snug text-white md:text-3xl">
                Do you want to start a <br /> project together?
              </h2>
              <button
                onClick={handleCopy}
                className="flex w-fit items-center gap-2 rounded-lg border border-white bg-muted px-9 py-2 text-white transition hover:bg-white hover:text-black"
              >
                📋{" "}
                <span>
                  {copied ? "Email copied to dashboard!" : "Get my email"}
                </span>
              </button>
            </div>
          </div>

          <div
            className={`bg-primary-light relative col-span-2 w-full overflow-hidden rounded-2xl border border-[#1c1f3f] p-6 transition-all duration-700 ease-out hover:scale-[1.02] ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <p className="mb-1 w-full text-sm text-gray-400">
              The Inside Scoop
            </p>
            <h2 className="relative z-10 mb-4 w-full text-3xl font-bold">
              Currently On a Mission to <br />
              Build Something That <br />
              Matters
            </h2>

            <div className="absolute bottom-0 right-0">
              <img
                src="/b5.svg"
              alt="Illustration of code flow in background"
                className="w-48 object-contain md:w-64 lg:w-72"
              />
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default AboutSection;
