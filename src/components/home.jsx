import { FaAngleDown, FaGithub, FaLinkedin } from "react-icons/fa6";
import Footer from "./footer";
import Header from "./header";
import About from "./about";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const handleScroll = (targetDiv) => {
    const element = document.getElementById(targetDiv);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundHi = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const backgroundIm = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const backgroundButtons = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "150%"]
  );
  const opacity = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <>
      <Header />
      <motion.div
        ref={ref}
        className="w-full pt-40 px-10 bg-bottom h-[120vh]"
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundSize: "cover",
        }}
      >
        <motion.div
          className="text-5xl md:text-7xl font-bold "
          style={{
            opacity: opacity,
          }}
        >
          <motion.p
            className="text-dark"
            style={{
              y: backgroundHi,
            }}
          >
            Hi,
          </motion.p>

          <motion.div
            className="flex gap-10 items-end text-7xl md:text-9xl"
            style={{
              y: backgroundIm,
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              className="bg-gradient-to-r from-pink to-blue bg-clip-text inline-block text-transparent drop-shadow-lg"
            >
              i'm Jackie
            </motion.p>
            <button onClick={() => handleScroll("about")}>
              <FaAngleDown className="text-5xl text-blue" />
            </button>
          </motion.div>

          <motion.div
            className="text-3xl flex gap-5 pt-10 text-dark"
            style={{
              y: backgroundButtons,
            }}
          >
            <a
              className="text-dark"
              href="https://www.linkedin.com/in/jackie-guo-7ba87a249/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="text-dark"
              href="https://github.com/jack1e0"
              target="_blank"
            >
              <FaGithub />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}
