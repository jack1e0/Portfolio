import WorkTimeline from "./worktimeline";

export default function Experience() {
  return (
    <main id='experience' className="lg:min-h-screen md:pb-32 flex flex-col items-center"
      style={{
        backgroundImage: 'url("bg2.png")',
        backgroundSize:'cover',
        backgroundPosition:'bottom'
      }}
    >
      <h1 className="bg-gradient-to-r from-orange to-yellow bg-clip-text inline-block text-transparent">Work Experience</h1>
      <WorkTimeline/>

    </main>
  );
}
