import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Logo from "./logo";
import { motion } from "framer-motion";

const workList = [
  {
    title: "Software Engineer Intern",
    company: { title: "Geomotion", url: "geomotion.png" },
    date: "Jun 2024 - Present",
    desc: [<li>Responsible for end-to-end development of company website</li>],
    skills: [
      { title: "React", url: "react.png" },
      { title: "Express", url: "express.png" },
      { title: "MongoDB", url: "mongodb.png" },
      { title: "Node.js", url: "node.png" },
      { title: "Redux", url: "redux.png" },
      { title: "Tailwind CSS", url: "tailwind.png" },
    ],
  },
  {
    title: "Computer Science Intern",
    company: { title: "MeetArts", url: "meetarts.png" },
    date: "Dec 2023 - May 2024",
    desc: [
      <li>Sole developer of the MeetArts Virtual Gallery, integrating it into the web platform</li>,
      <li>Engaged in cybersecurity initiatives and SEO improvement</li>,
      <li>View more at <a href="https://github.com/jack1e0/MeetArts-Virtual-Gallery" target="_blank">my repository</a></li>
    ],
    skills: [
      { title: "Magento", url: "magento.png" },
      { title: "Unity", url: "unity.png" },
      { title: "Three.js", url: "three.png" },
      { title: "Blender", url: "blender.png" },
      { title: "AWS", url: "aws.png" },
      ,
    ],
  },
  {
    title: "Software Engineer Intern",
    company: { title: "Floramis", url: "floramis.jpg" },
    date: "May 2023 - Aug 2023",
    desc: [
      <li>Designed and implemented new features of mobile app</li>,
      <li>Improved on existing functionalities</li>,
      <li>Assisted in designing aspects of game logic</li>,
    ],
    skills: [
      { title: "Unity", url: "unity.png" },
      { title: "Blender", url: "blender.png" },
      { title: "AWS", url: "aws.png" },
      { title: "DynamoDB", url: "ddb.png" },
    ],
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
      duration:0.5,
      delay: 0.05 * i,
    },
  }),
};

const Card = ({ title, company, date, desc, skills }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="cursor-pointer w-full bg-beige  shadow-md rounded-lg overflow-hidden p-3 md:px-5 md:pr-10 mb-2  md:py-6 min-h-28 "
      onClick={() => setOpen(!open)}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-5">
          <img src={company.url} alt="logo" className="h-10 md:h-20" />
          <div className="flex flex-col md:pt-3">
            <p className="text-lg md:text-xl font-semibold">{title}</p>
            <div className="md:text-lg text-dark block md:flex flex-row gap-5">
              <p className="font-semibold">{company.title}</p>
              <p className=" italic">{date}</p>
            </div>
          </div>
        </div>

        <FaAngleDown
          className={`${
            open ? "" : "-rotate-90"
          } mt-8 transition-all duration-300 ease-in-out`}
        />
      </div>
      {!open ? null : (
        <div className="ml-3 sm:ml-12 md:ml-24">
          <ul>
            {desc.map((d) => d)}
          </ul>
          <div className="flex flex-row gap-2 mt-5">
            {skills.map((skil, i) => (
              <Logo title={skil.title} url={skil.url} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function WorkTimeline() {
  return (
    <div className="w-full">
      {workList.map((work, i) => (
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={i}
        >
          <Card
            title={work.title}
            company={work.company}
            date={work.date}
            desc={work.desc}
            skills={work.skills}
          />
        </motion.div>
      ))}
    </div>
  );
}
