import { useEffect, useRef, useState } from 'react';

export default function WorkExperience() {
  const [visible, setVisible] = useState(false);
  const experienceRef = useRef(null);

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
        rootMargin: '-100px 0px',
      }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const experiences = [
    {
      title: "Frontend Engineer Intern",
      description: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      icon: "/frontend-engineer-icon.png",
      iconFallback: (
        <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-3 rounded-full w-16 h-16 flex items-center justify-center">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white"/>
            <path d="M20 6H4C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )
    },
    {
      title: "Mobile App Dev - JSM Tech",
      description: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      icon: "/mobile-app-icon.png",
      iconFallback: (
        <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-3 rounded-full w-16 h-16 flex items-center justify-center">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
            <path d="M12 8L18 12L12 16L6 12L12 8Z" fill="white"/>
            <path d="M12 2L18 6V14L12 18L6 14V6L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )
    },
    {
      title: "Freelance App Dev Project",
      description: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      icon: "/freelance-app-icon.png", 
      iconFallback: (
        <div className="bg-gradient-to-r from-pink-300 to-orange-200 p-3 rounded-full w-16 h-16 flex items-center justify-center">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="white"/>
            <path d="M3 12H5M19 12H21M12 3V5M12 19V21M5.636 5.636L7.05 7.05M16.95 16.95L18.364 18.364M5.636 18.364L7.05 16.95M16.95 7.05L18.364 5.636" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      )
    },
    {
      title: "Lead Frontend Developer",
      description: "Developed and maintained user-facing features using modern frontend technologies.",
      icon: "/lead-frontend-icon.png",
      iconFallback: (
        <div className="bg-gradient-to-r from-purple-400 to-orange-400 p-3 rounded-full w-16 h-16 flex items-center justify-center">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
            <path d="M12 12H19M19 12L16 9M19 12L16 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 6V5C19 3.895 18.105 3 17 3H7C5.895 3 5 3.895 5 5V19C5 20.105 5.895 21 7 21H17C18.105 21 19 20.105 19 19V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <div
      ref={experienceRef}
      className="w-full bg-[#0f0f1a] py-16 md:py-24 relative overflow-hidden"
    >
      <div className="container px-4 sm:px-6 relative">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          My <span className="text-secondary">work experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all duration-700 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-orange-500/30 rounded-xl blur-xl"></div>

              {/* Card container */}
              <div className="relative bg-[#1a1a2e] rounded-xl p-6 md:p-8 flex items-start gap-4 border border-[#3f3f46]/30 backdrop-blur-sm">
                {/* Light overlay */}
                <div
                  className="absolute inset-0 pointer-events-none before:absolute before:w-40 before:h-40 before:content-[''] before:bg-gradient-to-br before:from-purple-500/20 before:via-pink-500/10 before:to-transparent before:rounded-full before:blur-xl before:opacity-30 before:animate-pulse-soft"
                  style={{
                    background:
                      'radial-gradient(circle at 40% 50%, rgba(192, 132, 252, 0.1) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(244, 114, 182, 0.05) 0%, transparent 60%)',
                  }}
                ></div>

                <div className="flex-shrink-0 mt-1">{experience.iconFallback}</div>

                <div className="z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{experience.title}</h3>
                  <p className="text-base text-gray-300/90">{experience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
