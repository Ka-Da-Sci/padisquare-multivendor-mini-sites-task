import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically gets the current year

  return (
    <footer className="w-full container mx-auto mt-auto pt-16 sm:pt-32 px-4 sm:px-8 transition-all duration-300 flex flex-col gap-24 items-center">
      <div className="w-full mx-auto space-y-12">
        {/* Bottom Section */}
        <div className="mt-6 pt-4 border-t border-gray-700 flex justify-between items-center text-xs">
          <p className="font-normal font-roboto text-sm capitalize antialiased text-foreground/70 hover:text-foreground/90 transition-colors">
            {currentYear} PadiSquare
          </p>
          <div className="flex space-x-4 mt-0 sm:mt-0">
            <Link
              href="#"
              className="font-normal font-roboto text-sm capitalize antialiased text-foreground/70 hover:underline hover:text-foreground/90 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="h-4 w-4 iconify iconify--prime text-foreground/70"
                width="1em"
                height="1em"
                viewBox="0 0 14 14"
              >
                <g fill="none">
                  <g clipPath="url(#iconifySvelte0)">
                    <path
                      fill="currentColor"
                      d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="iconifySvelte0">
                      <path fill="#fff" d="M0 0h14v14H0z"></path>
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </Link>
            <Link
              href="#"
              className="font-normal font-roboto text-sm capitalize antialiased text-foreground/70 hover:underline hover:text-foreground/90 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="w-5 h-5 text-foreground/70"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.27h-3v-5.5c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.6h-3v-11h2.88v1.53h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.58v6.45z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="font-normal font-roboto text-sm capitalize antialiased text-foreground/70 hover:underline hover:text-foreground/90 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="w-5 h-5 text-foreground/70"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.322 3.608 1.297.975.975 1.235 2.242 1.297 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.322 2.633-1.297 3.608-.975.975-2.242 1.235-3.608 1.297-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.322-3.608-1.297-.975-.975-1.235-2.242-1.297-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.322-2.633 1.297-3.608.975-.975 2.242-1.235 3.608-1.297 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.314.059-2.593.32-3.528.853-.935.533-1.717 1.315-2.25 2.25-.533.935-.794 2.214-.853 3.528-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.059 1.314.32 2.593.853 3.528.533.935 1.315 1.717 2.25 2.25.935.533 2.214.794 3.528.853 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.314-.059 2.593-.32 3.528-.853.935-.533 1.717-1.315 2.25-2.25.533-.935.794-2.214.853-3.528.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.314-.32-2.593-.853-3.528-.533-.935-1.315-1.717-2.25-2.25-.935-.533-2.214-.794-3.528-.853-1.28-.058-1.688-.072-4.947-.072z" />
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
                <path d="M17.985 7.062c-.7 0-1.27.57-1.27 1.27 0 .698.57 1.268 1.27 1.268s1.27-.57 1.27-1.268c0-.7-.57-1.27-1.27-1.27z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
