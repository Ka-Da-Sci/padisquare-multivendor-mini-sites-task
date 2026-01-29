import Link from "next/link";

const NotFound = () => {
  return (
    <main className="w-full h-svh container mx-auto px-4 sm:px-8 text-foreground bg-background flex flex-col items-center justify-center text-center">
      <h1 className="mb-8 max-w-lg text-5xl font-roboto font-medium tracking-tight">
        The page you’re looking for can’t be found.
      </h1>{" "}
      <Link
        href="/"
        className="bg-action text-white group flex items-center justify-center gap-2 rounded-full px-5 py-2 font-medium transition-transform duration-100 ease-out hover:scale-[1.02] active:scale-100"
      >
        Return to home
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide-icon lucide lucide-arrow-up-right h-5 w-5  group-hover:scale-105"
        >
          <path d="M7 7h10v10"></path>
          <path d="M7 17 17 7"></path>
        </svg>
      </Link>
    </main>
  );
};

export default NotFound;
