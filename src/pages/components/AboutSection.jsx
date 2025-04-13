
const techStack = [
  "ReactJS", "VueJS", "Express", "NuxtJS", "Typescript", "GraphQL"
];

const AboutSection = () => {
  return (<>
  
    <section className="bg-[#060B27] text-white px-4 py-16 md:px-20 flex flex-col gap-12">
      {/* ====== TOP SECTION ====== */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Image Card */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-tr from-[#1e1e2e] to-[#4c2fd7] p-1 shadow-lg">
          <div className="bg-[#060B27] rounded-2xl">
            <img
              src="./b1.svg" 
              alt="Laptop"
              className="w-full h-60 object-cover  "
            />
            <div className="p-6">
              <h2 className="text-xl font-bold">
                I prioritize client collaboration, fostering open communication
              </h2>
            </div>
          </div>
        </div>

        {/* Right Two Boxes */}
        <div className="flex flex-col gap-8">
          {/* Timezone Card */}
          <div className="bg-[#101434] rounded-2xl p-6 flex flex-col items-center shadow-lg">
            <img
              src="/globe-image.png" // Replace with actual path
              alt="Globe"
              className="w-28 h-28 object-contain mb-4"
            />
            <h2 className="text-center text-lg font-bold">
              I'm very flexible with time zone communications
            </h2>
          </div>

          {/* Tech Stack Card */}
          <div className="bg-[#101434] rounded-2xl p-6 shadow-lg">
            <p className="text-sm text-gray-400">I constantly try to improve</p>
            <h2 className="text-xl font-bold mb-4">My tech stack</h2>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#1d1f3a] px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ====== BOTTOM SECTION ====== */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Tech Enthusiast Quote */}
        <div className="bg-[#101434] rounded-2xl p-6 shadow-md flex items-center justify-center">
          <h2 className="text-xl font-bold text-center">
            Tech enthusiast with a passion for development.
          </h2>
        </div>

        {/* Mission Statement with Code BG */}
        <div className="relative bg-[#101434] rounded-2xl p-6 shadow-md overflow-hidden">
          <img
            src="/newsection.png" // Replace with actual path
            alt="Code Background"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
          />
          <div className="relative z-10">
            <p className="text-sm text-gray-400">The Inside Scoop</p>
            <h2 className="text-2xl font-bold mt-2">
              Currently On a Mission to Build Something That Matters
            </h2>
          </div>
        </div>
      </div>

      {/* ====== CONTACT CTA ====== */}
      <div className="rounded-2xl bg-gradient-to-br from-[#6a11cb] to-[#2575fc] p-6 flex flex-col items-center justify-center text-center shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Do you want to start a project together?
        </h2>
        <button className="mt-2 bg-white text-black px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-200 transition">
          <span>📧</span> Copy my email address
        </button>
      </div>
    </section>




 </> );
};

export default AboutSection;
