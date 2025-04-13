import { useEffect, useRef, useState } from "react";

const TestimonialsSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      position: "Director of AlphaStream Technologies",
      image: "/api/placeholder/60/60",
    },
    {
      id: 2,
      text: "Working with Adrian transformed our digital presence completely. His technical expertise combined with an eye for design resulted in a website that exceeded all our expectations. The attention to detail and willingness to go the extra mile made the entire process seamless and enjoyable.",
      name: "Sarah Williams",
      position: "CEO of Innovate Solutions",
      image: "/api/placeholder/60/60",
    },
    {
      id: 3,
      text: "I can't recommend Adrian highly enough. From concept to execution, his work was flawless. He understood our vision immediately and brought it to life with impressive skill. The result was not just a website, but a powerful tool that has significantly improved our business outcomes.",
      name: "David Chen",
      position: "Marketing Director at TechForward",
      image: "/api/placeholder/60/60",
    },
  ];

  // const partners = [
  //   { name: "Cloudinary", logo: "☁️" },
  //   { name: "Appwrite", logo: "🅰️" },
  //   { name: "Hostinger", logo: "🏠" },
  //   { name: "Stream", logo: "🌊" },
  //   { name: "Docker", logo: "🐳" },
  // ];

  // Handle scrolling animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAnimation;

    const startScrolling = () => {
      if (isHovering) return;

      scrollAnimation = setInterval(() => {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }, 20);
    };

    startScrolling();

    return () => {
      if (scrollAnimation) {
        clearInterval(scrollAnimation);
      }
    };
  }, [isHovering]);

  return (
    <div className=" px-4 py-16 text-white">
      <div className="mx-auto mb-16 max-w-6xl text-center">
        <h2 className="text-4xl font-bold md:text-5xl">
          Kind words from{" "}
          <span className="text-purple-400">satisfied clients</span>
        </h2>
      </div>

      {/* Testimonials Carousel */}
      <div className="max-w relative mx-auto mb-24">
        {/* Left blur effect */}
        <div className="absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-gray-900 to-transparent"></div>

        {/* Scrolling container */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex overflow-x-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            scrollBehavior: "smooth",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {/* Add spacer at start */}
          <div className="w-32 shrink-0"></div>

          {/* Testimonial cards */}
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="mx-4 w-full min-w-[800px] shrink-0 rounded-3xl bg-gray-800 bg-opacity-30 p-8"
            >
              <p className="mb-8 text-lg">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mr-4 h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate the first testimonial to create a loop effect */}
          <div className="mx-4 w-full min-w-[800px] shrink-0 rounded-3xl bg-gray-800 bg-opacity-30 p-8">
            <p className="mb-8 text-lg">{testimonials[0].text}</p>
            <div className="flex items-center">
              <img
                src={testimonials[0].image}
                alt={testimonials[0].name}
                className="mr-4 h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-bold">{testimonials[0].name}</h4>
                <p className="text-sm text-gray-400">
                  {testimonials[0].position}
                </p>
              </div>
            </div>
          </div>

          {/* Add spacer at end */}
          <div className="w-32 shrink-0"></div>
        </div>

        {/* Right blur effect */}
        <div className="absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-gray-900 to-transparent"></div>

       
      </div>

      {/* Partners/Technology Logos */}
      {/* <div className="mx-auto mb-32 max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-gray-400 transition-colors hover:text-white"
            >
              <div className="flex items-center space-x-2">
                <span className="text-3xl">{partner.logo}</span>
                <span className="text-lg font-bold">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div> */}

     

      {/* Custom CSS for hiding scrollbars */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
