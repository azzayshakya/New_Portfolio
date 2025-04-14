import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const HeroSectionRef = useRef(null);

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

    if (HeroSectionRef.current) {
      observer.observe(HeroSectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
  return (
    <section
      id="home"
      ref={HeroSectionRef}
      className="container relative w-full overflow-hidden pb-20 pt-40"
    >
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <p
          className={`text-xs max-w-90 mb-3 uppercase tracking-widest text-blue-100 transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Creating Modern & Efficient Applications
        </p>

        <h1
          className={`text-4xl font-bold tracking-[1.5px] transition-all duration-700 ease-out md:text-5xl lg:text-hero ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Turning caffeine &<br />
          code into seamless{" "}
          <span className="text-secondary">User Experiences</span>
        </h1>

        <p
          className={`mt-4 text-sm text-gray-300 transition-all duration-700 ease-out md:text-lg lg:text-2xl ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          I&apos;m Ajay — a passionate Full Stack Developer from India
        </p>

        <button
          className={`mt-8 rounded-lg border border-purple-400 px-6 py-3 text-white transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <a href="#projects">
            Explore My Work <span className="ml-2">🚀</span>
          </a>
        </button>
      </div>
    </section>
  );
}
