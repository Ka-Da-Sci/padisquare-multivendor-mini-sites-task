"use client";

import { useEffect, useRef } from "react";
import photo from "../../../public/images/hero-bg.png";
import ImageWrapper from "../image-wrapper";
import SectionAnimatedWrapper from "../section-animated-wrapper";
import { motion, useAnimation, useInView } from "motion/react";
import BackBtn from "../page-back-btn";

// Utility function to split text into individual characters for animation
const splitChars = (text: string) =>
  text.split("").map((char, i) => (
    <motion.span key={i} variants={charMotion}>
      {char}
    </motion.span>
  ));

// Animation variants for the container to control staggered character animations
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.025, // typing speed
    },
  },
};

// Animation variants for individual characters
const charMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Hero component for the homepage banner section
const Hero = () => {
  const h1Ref = useRef(null);
  const isH1InView = useInView(h1Ref, { amount: 0 });
  const bottomRef = useRef(null);
  const isBottomInView = useInView(bottomRef, { amount: 0 });
  const controls = useAnimation();

  // Effect to replay animations periodically
  useEffect(() => {
    if (!isBottomInView) return;

    // controls.set("hidden");
    // controls.start("visible");

    const interval = setInterval(() => {
      controls.set("hidden");
      controls.start("visible");
    }, 30000);

    return () => clearInterval(interval);
  }, [controls, isBottomInView]);

  return (
    <SectionAnimatedWrapper
      sectionId="hero"
      sectionClassName={
        "w-full  pt-6 md:pt-10"
      }
      classNamePlus="relative overflow-clip max-md:flex-col-reverse max-md:mt-8 pb-4"
    >
      {/* Left column for text content */}
      <div className="relative pt-30 sm:pt-36 flex max-md:items-center flex-col justify-between gap-4 max-w-175 flex-1/2 overflow-x-clip">
        <div className="absolute top-2 sm:top-6 left-0 border border-[#408bfc] rounded-md pointer-events-auto cursor-pointer p-1">
          <BackBtn pageMenuTitle="Back Home" />
        </div>
        <div ref={h1Ref}>
          {isH1InView && (
            <motion.h1
              className="max-lg:text-4xl max-md:text-3xl font-space_grotesk font-bold text-left max-md:text-center text-5xl text-foreground"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {splitChars("Your Electronics And Gadgets Accessories Hub")}
            </motion.h1>
          )}
        </div>
        <div ref={bottomRef}>
          {isBottomInView && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 300 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.5 },
                },
              }}
              initial="hidden"
              animate={isBottomInView ? "visible" : "hidden"}
              className="flex flex-col max-md:items-center gap-4"
            >
              {/* Animated description with typing effect */}
              <motion.p
                variants={container}
                initial={false}
                animate={controls}
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="max-lg:text-base font-bai_jamjuree font-xl font-semibold text-left max-md:text-center text-foreground-secondary"
              >
                {splitChars(
                  "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
                )}
              </motion.p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Right column for hero image */}
      <div className="transition-all duration-500 -z-10 max-lg:opacity-40 opacity-100 absolute right-0 top-0 max-[375px]:hidden flex self-start justify-center max-w-875 sm:max-w-125 p-0">
        <ImageWrapper
          className="relative -z-10"
          sourceUrl={photo.src}
          alternativeText={"electrocis gadget"}
        />
      </div>
    </SectionAnimatedWrapper>
  );
};

export default Hero;
