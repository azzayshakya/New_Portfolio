import { useState, useEffect, useRef } from "react";

// documentaion has been added to understand the logic behind this information:

export default function Footer() {
  const [visible, setVisible] = useState(false); // controls whether animation should be applied
  const footerRef = useRef(null); // points to the footer DOM element
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        // When the footer enters the viewport
        if (entries[0].isIntersecting) {
          setVisible(true);
          // Once triggered, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        // Trigger when at least 10% of the element is visible
        threshold: 0.1,
        // You can adjust rootMargin to trigger the animation earlier
        // e.g., "-100px" will trigger the animation when the footer is 100px away from viewport
        rootMargin: "-100px 0px",
      },
    );

    // Start observing the footer element
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Clean up the observer when component unmounts
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="container relative w-full overflow-hidden py-16 md:py-20"
    >
      {/* Grid background pattern */}
      {/* <div className="bg-grid-pattern absolute inset-0 opacity-10"></div> */}

      <div className="mx-auto px-4 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center">
          <h2
            className={`text-center text-3xl font-bold transition-all duration-700 ease-out md:text-4xl lg:text-5xl ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Ready to take{" "}
            <span className="text-secondary">your digital presence</span> to the
            next level?
          </h2>

          <p
            className={`mt-6 max-w-2xl text-center text-muted-foreground transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{ transitionDelay: "100ms" }}
          >
            Reach out to me today and Let&apos;s discuss how I can help you
            achieve your goals.
          </p>

          <div
            className={`mt-10 transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <a
              href="#contact"
              className="hover:bg-secondary/10 group inline-flex items-center rounded-lg border border-muted-foreground px-6 py-3 font-medium text-secondary transition-all duration-300 ease-in-out"
            >
              Let&apos;s get in touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <div
          className={`mt-20 flex flex-col items-center justify-between transition-all duration-700 ease-out md:flex-row ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400">
              Copyright © {currentYear} Ajay Kr. Shakya
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/azzayshakya"
              aria-label="Github"
              className="hover:bg-card/80 flex h-10 w-10 items-center justify-center rounded-lg bg-card text-gray-400 transition-colors duration-300 hover:text-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/azzayshakya"
              aria-label="Instagram"
              className="hover:bg-card/80 flex h-10 w-10 items-center justify-center rounded-lg bg-card text-gray-400 transition-colors duration-300 hover:text-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5a4.25 4.25 0 0 1-4.25-4.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.75 2.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-4.5 1.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Zm0 1.5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/azzayshakya"
              aria-label="LinkedIn"
              className="hover:bg-card/80 flex h-10 w-10 items-center justify-center rounded-lg bg-card text-gray-400 transition-colors duration-300 hover:text-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
