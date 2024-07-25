import { motion } from "framer-motion";

const fadeInVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
};

export default function About() {
  return (
    <motion.main
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="about"
      className="flex md:flex-row flex-col md:gap-6 items-center md:items-start"
    >
      <h1 className="w-72 bg-gradient-to-r from-pink to-yellow bg-clip-text inline-block text-transparent">
        About Me
      </h1>
      <p className="text-justify flex-1">
        I am a Computer Science undergraduate at the National University of
        Singapore (NUS), with a minor in Mathematics. I have a passion for
        design and technology, and enjoy creating software with special and
        immersive user experience.
        <br />
        <br />
        My background includes full-stack software and game development, and I am
        excited to delve deeper into these fields, and also to explore new ones
        like AI and cybersecurity.
        <br />
        <br />
        In my free time, I enjoy backpacking and hiking, to explore the world
        and other perspectives.
      </p>
    </motion.main>
  );
}
