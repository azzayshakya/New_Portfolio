export default function Home() {
  return (
    <section
      id="home"
      className="container relative min-h-screen w-full overflow-hidden pb-20 pt-36"
    >
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-xs max-w-90 mb-3 uppercase tracking-widest text-blue-100">
          Creating Modern & Efficient Applications
        </p>

        <h1 className="lg:text-hero text-4xl font-bold tracking-[1.5px] md:text-5xl">
          Transforming Concepts <br />
          into Seamless{" "}
          <span className="text-secondary">User Experiences</span>
        </h1>

        <p className="mt-4 text-sm text-gray-300 md:text-lg lg:text-2xl">
          Hi! I am Ajay, a Full Stack Developer from India.
        </p>

        <button className="mt-8 rounded-lg border border-purple-400 px-6 py-3 text-white transition duration-300 hover:bg-purple-500">
          Show my work <span className="ml-2">🚀</span>
        </button>
      </div>
    </section>
  );
}
