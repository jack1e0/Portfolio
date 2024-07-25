import Logo from "./logo";
import { motion } from "framer-motion";

const projectsList = [
  {
    title: "Tiny Painting",
    imgurl: "/tinypainting.png",
    date: "2022-2023",
    desc: "Started a digital shop to sell my paintings, amassing over 20k followers on Instagram. Also created a WordPress site for it.",

    skills: [{ title: "WordPress", url: "/wp.png" }],
    linkUrl: "https://tiny--painting.com/",
  },
  {
    title: "cATWORKs",
    imgurl: "/catworks.png",
    date: "May-Aug 2023",
    desc: "Developed an educational study application in a team of two (as part of the NUS Orbital Programme), featuring an immersive virtual pet experience. Designed and created game sprites in-house.",

    skills: [
      { title: "Unity", url: "/unity.png" },
      { title: "Blender", url: "/blender.png" },
      { title: "Firebase", url: "/firebase.png" },
    ],
    codeUrl: "https://github.com/jack1e0/cATWORKs",
    linkUrl:
      "https://drive.google.com/file/d/1lFuHdp5QMNtJJeiRcESRymXnFSMymS7h/view",
  },
  {
    title: "Game #1 - One Night",
    imgurl: "/game1.png",
    date: "2022",
    desc: "Created a short story using Unity 2D, and also designed game sprites in GIMP. Experimented with parallax camera movement, and dialogue system.",
    skills: [{ title: "Unity", url: "/unity.png" }],
    codeUrl: "https://github.com/jack1e0/2D-Game",
    linkUrl: "https://jack1e0.itch.io/",
  },

  {
    title: "Game #2 - City",
    imgurl: "/game2.png",
    date: "2022",
    desc: "Experimented with Unity 3D, and modelled environment in Blender.",
    skills: [
      { title: "Unity", url: "/unity.png" },
      { title: "Blender", url: "/blender.png" },
      ,
    ],
    codeUrl: "https://github.com/jack1e0/3D-Game",
    linkUrl: "https://jack1e0.itch.io/",
  },
];

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.1 * i,
    },
  }),
};

const Card = ({ i, title, imgUrl, date, desc, skills, codeUrl, linkUrl }) => {
  return (
    <motion.div
      className="w-full bg-white shadow-md rounded-xl overflow-hidden min-h-52 flex flex-col justify-between gap-2 pb-4"
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={i}
    >
      <div>
        <div className="h-44 md:h-64">
          <img
            src={imgUrl}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="py-3 px-4">
          <div className="flex justify-between gap-2">
            <p className="font-semibold text-lg">{title}</p>
            <div className="flex gap-2 md:gap-5">
              {!codeUrl ? null : (
                <a
                  className="bg-orange rounded-full text-white hover:bg-lightOrange px-3 py-1 h-max"
                  href={codeUrl}
                  target="_blank"
                >
                  Code
                </a>
              )}
              {!linkUrl ? null : (
                <a
                  className="bg-beige rounded-full text-black hover:bg-lightOrange px-3 py-1 h-max"
                  href={linkUrl}
                  target="_blank"
                >
                  View
                </a>
              )}
            </div>
          </div>

          <p className="italic text-gray text-sm mb-2">{date}</p>
          <p className="text-justify">{desc}</p>
        </div>
      </div>

      <div className="flex px-8 gap-2">
        {skills.map((skill, i) => (
          <Logo title={skill.title} url={skill.url} />
        ))}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <main
      id="projects"
      style={{
        backgroundImage: 'url("bg3.png")',
        backgroundPosition: "start",
        backgroundSize: "cover",
      }}
      className="md:pb-32 flex flex-col items-center"
    >
      <h1 className="bg-gradient-to-r from-yellow to-pink bg-clip-text inline-block text-transparent">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
        {projectsList.map((proj, i) => (
          <Card
            i={i}
            title={proj.title}
            imgUrl={proj.imgurl}
            date={proj.date}
            desc={proj.desc}
            skills={proj.skills}
            codeUrl={proj.codeUrl}
            linkUrl={proj.linkUrl}
          />
        ))}
      </div>
    </main>
  );
}
