import Background from "./Components/Background";
import AnimatedText from "./Components/AnimatedText";

export default function Home() {
  return (
    <>
      <div className="flex p-6 flex-col items-center justify-center gap-8 h-screen overflow-hidden font-[family-name:var(--font-sans)]">
        <AnimatedText className="text-center" delay={0.3}>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
            <span className="text-gray-200">Welcome to </span>
            <span className="text-gray-200">TheOm</span>
            <span className="text-red-500">.</span>
            <span className="text-gray-200">app</span>
          </h1>
        </AnimatedText>

        <AnimatedText className="text-center max-w-xl" delay={0.7}>
          <p className="text-gray-200 text-lg mb-4">Nothing to show for now</p>
          <p className="text-gray-400 text-sm">
            This space is currently under development. We're crafting an
            experience that aims to be both useful and elegant. Check back soon
            to see what emerges.
          </p>
          <p className="text-gray-400 text-sm mt-3 italic">
            "Rome wasn't built in a day, but our website definitely could have
            been..." - Ancient Developer Proverb
          </p>
        </AnimatedText>

        <AnimatedText delay={1.1}>
          <a
            href="https://omshejul.com"
            className="relative flex items-center px-6 py-3 font-medium text-gray-200 backdrop-blur-md bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/15 hover:shadow-lg group"
          >
            <span className="relative z-10">Visit OmShejul.com</span>
            <span className="absolute inset-0 bg-white/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 11l5-5m0 0l5 5m-5-5v12"
                transform="rotate(45 12 12)"
              />
            </svg>
          </a>
        </AnimatedText>
      </div>
      <Background />
    </>
  );
}
