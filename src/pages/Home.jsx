export default function Home() {
  return (
    <section
    id="home"
    className="w-full min-h-screen flex flex-col justify-center items-center  text-white px-6 text-center bg-hero-pattern"
  >
     <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    <p className="uppercase text-sm tracking-widest text-gray-400 mb-4">
      Creating Modern & Efficient Applications
    </p>

    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Transforming Concepts <br />
      into Seamless{" "}
      <span className="text-purple-400">User Experiences</span>
    </h1>

    <p className="mt-6 text-lg text-gray-300">
      Hi! I'm Ajay, a Full Stack Developer from India.
    </p>

    <button className="mt-8 px-6 py-3 border border-purple-400 text-white rounded-lg hover:bg-purple-500 transition duration-300">
      Show my work <span className="ml-2">🚀</span>
    </button>
  </section>
  );
}
