const RecentProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Foodii - The Future of Online Food Delivery",
      description:
        "A next-gen cloud kitchen platform that connects food lovers with top-quality, authentic cuisines from around the world.",
      image: "/path-to-your-image.jpg",
      technologies: ["react", "node", "typescript", "firebase", "material-ui"],
      liveLink: "https://foodii-example.com",
    },
    {
      id: 2,
      title: "Zobs - Your Gateway to Career Success",
      description:
        "A smart job portal designed to bridge the gap between job seekers and employers with AI matching technology.",
      image: "/path-to-your-image.jpg",
      technologies: ["next", "node", "typescript", "tailwind", "graphql"],
      liveLink: "https://zobs-example.com",
    },
    {
      id: 3,
      title: "Project Three - Coming Soon",
      description:
        "Your third project description will go here. This is a placeholder for your future amazing project.",
      image: "/path-to-your-image.jpg",
      technologies: ["react", "node", "mongodb", "express", "bootstrap"],
      liveLink: "https://example.com",
    },
    {
      id: 4,
      title: "Project Three - Coming Soon",
      description:
        "Your third project description will go here. This is a placeholder for your future amazing project.",
      image: "/path-to-your-image.jpg",
      technologies: ["react", "node", "mongodb", "express", "bootstrap"],
      liveLink: "https://example.com",
    },
  ];

  const techIcons = {
    react: (
      <div className="text-xs flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500">
        <span>⚛️</span>
      </div>
    ),
    next: (
      <div className="text-xs flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
        <span>N</span>
      </div>
    ),
    node: (
      <div className="text-xs flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
        <span>N</span>
      </div>
    ),
    typescript: (
      <div className="text-xs flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
        <span>TS</span>
      </div>
    ),
    firebase: (
      <div className="text-xs flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500">
        <span>🔥</span>
      </div>
    ),
    mongodb: (
      <div className="text-xs flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
        <span>M</span>
      </div>
    ),
    "material-ui": (
      <div className="text-xs flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
        <span>M</span>
      </div>
    ),
    tailwind: (
      <div className="text-xs flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400">
        <span>TW</span>
      </div>
    ),
    graphql: (
      <div className="text-xs flex h-8 w-8 items-center justify-center rounded-full bg-pink-600">
        <span>G</span>
      </div>
    ),
    express: (
      <div className="text-xs flex h-8 w-8 items-center justify-center rounded-full bg-gray-700">
        <span>Ex</span>
      </div>
    ),
    bootstrap: (
      <div className="text-xs flex h-8 w-8 items-center justify-center rounded-full bg-purple-600">
        <span>B</span>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-16 text-white">
      <div className="mx-auto mb-16 max-w-6xl text-center">
        <h2 className="text-4xl font-bold md:text-5xl">
          A small selection of{" "}
          <span className="text-purple-400">recent projects</span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col overflow-hidden rounded-3xl bg-gray-800 bg-opacity-30 transition-all duration-300 hover:scale-[1.02] hover:transform hover:shadow-lg"
          >
            <div className="relative h-56 overflow-hidden bg-gray-700">
              {/*  replace it with actual images  */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Project Image Placeholder
              </div>
            </div>

            <div className="flex-grow p-6">
              <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
              <p className="mb-6 line-clamp-3 text-gray-300">
                {project.description}
              </p>
            </div>

            <div className="p-6 pt-0">
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {project.technologies.slice(0, 5).map((tech, index) => (
                    <div
                      key={index}
                      className="transition-transform hover:z-10 hover:scale-110 hover:transform"
                    >
                      {techIcons[tech]}
                    </div>
                  ))}
                </div>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-1 text-purple-400"
                >
                  <span>Check Live Site</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjectsSection;
