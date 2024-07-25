import Logo from "./logo";

const languages = [
    {title:'JavaScript', url:'js.png'},
    {title:'Python', url:'python.png'},
    {title:'Java', url:'java.png'},
    {title:'C#', url:'csharp.png'},
    {title:'Python', url:'python.png'},
]

const frameworks = [
    {title:'React', url:'react.png'},
    {title:'Express', url:'express.png'},
    {title:'Three.js', url:'three.png'},
    {title:'Node.js', url:'node.png'},
    {title:'HTML', url:'html.png'},
    {title:'CSS', url:'css.png'},
    {title:'Tailwind CSS', url:'tailwind.png'},
    {title:'Redux', url:'redux.png'},
]

const softwares = [
    {title:'Unity', url:'unity.png'},
    {title:'AWS', url:'aws.png'},
    {title:'MongoDB', url:'mongodb.png'},
    {title:'DynamoDB', url:'ddb.png'},
    {title:'Firebase', url:'firebase.png'},
    {title:'WordPress', url:'wp.png'},
    {title:'Magento', url:'magento.png'},
    {title:'Blender', url:'blender.png'},
    {title:'DaVinci Resolve', url:'davinci.png'},
]





export default function Skills() {
  return (
    <main id="skills" className="lg:min-h-screen flex flex-col items-center text-center pb-32 bg-cover lg:bg-contain" style={{
        backgroundImage:'url("bg4.png")',
    }}>
        <h1 className=" bg-gradient-to-r from-blue to-pink bg-clip-text inline-block text-transparent">
          Skills
        </h1>
        <div className="text-dark ">
          <h2>Languages</h2>
          <div className="flex gap-5 flex-wrap justify-center mb-10">
            {languages.map((item, i)=>(
                <Logo i ={i} title={item.title} url={item.url} small={false}/>
            ))}
          </div>
          <h2>Frameworks and Libraries</h2>
          <div className="flex gap-5 flex-wrap justify-center mb-10">
            {frameworks.map((item, i)=>(
                <Logo i={i} title={item.title} url={item.url} small={false}/>
            ))}
          </div>
          <h2>Software</h2>
          <div className="flex gap-5 flex-wrap justify-center mb-10">
            {softwares.map((item, i)=>(
                <Logo i={i} title={item.title} url={item.url} small={false}/>
            ))}
          </div>
        </div>
    </main>
  );
}
