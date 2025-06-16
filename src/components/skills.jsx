import { skills } from "./data";
import Logo from "./logo";

export default function Skills() {
  return (
    <main
      id="skills"
      className="lg:min-h-screen flex flex-col items-center text-center pb-32 bg-cover lg:bg-contain"
      style={{
        backgroundImage: 'url("bg4.png")',
      }}
    >
      <h1 className=" bg-gradient-to-r from-blue to-pink bg-clip-text inline-block text-transparent">
        Skills
      </h1>
      <div className="text-dark md:w-[550px]">
        <h2>Languages</h2>
        <div className="flex gap-5 md:gap-8 flex-wrap justify-center mb-10">
          {skills.languages.map((item, i) => (
            <Logo i={i} title={item.title} url={item.url} small={false} />
          ))}
        </div>
        <h2>Frameworks and Libraries</h2>
        <div className="flex gap-5 md:gap-8 flex-wrap justify-center mb-10">
          {skills.frameworks.map((item, i) => (
            <Logo i={i} title={item.title} url={item.url} small={false} />
          ))}
        </div>
        <h2>Platforms</h2>
        <div className="flex gap-5 md:gap-8 flex-wrap justify-center mb-10">
          {skills.platforms.map((item, i) => (
            <Logo i={i} title={item.title} url={item.url} small={false} />
          ))}
        </div>
      </div>
    </main>
  );
}
