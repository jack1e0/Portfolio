import { FaLinkedin, FaGithub, FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="h-20 px-10 md:px-20 flex justify-between items-center bg-beige">
      <div className="flex text-xl text-dark gap-5">
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
      </div>
      <div className="flex justify-center items-center text-sm text-gray">
        <FaRegCopyright />
        &nbsp;2024
      </div>
    </footer>
  );
}
