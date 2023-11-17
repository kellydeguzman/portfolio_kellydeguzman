import Navbar from "./components/navbar";

function App() {
  return (
    <div>
    <Navbar />
    <section id="home" className="flex items-center h-screen">
      <div className="section-container_about flex justify-between w-full p-32">
        <div className="w-1/2">
          <div className="text-3xl font-semibold">Hello, It's Me</div>
          <div className="text-5xl font-semibold pt-4">Kelly Penelope <span className="text-blue-300">De Guzman</span></div>
            <div className="text-2xl pt-4 text-neutral-600">UI/UX Designer</div>
          <p className="text-2xl  text-neutral-600">
            "Welcome to my UI/UX design portfolio, where each pixel and interaction
             tells a unique story of user-centric innovation. Join me on a visual journey
              through projects that strive to redefine digital experiences and create
             lasting impressions."
          </p>                                                                                                              
          <div className="pt-3">
          <button className="font-semibold py-2 px-8 rounded-lg bg-black text-white hover:bg-blue-400">Download CV</button>
 
          </div>
        </div>
        <div className="w-1/2 pl-24 flex items-center justify-center">
        <div className="w-96 h-96 overflow-hidden rounded-full hover:transform hover:scale-110 transition-transform duration-300">
        <img src="./images/profilepicside.jpg" className="w-full h-full object-cover rounded-full" />
</div>
        </div>
      </div>
    </section>
    
    <section id="about" className="flex flex-col h-screen mt-28 pt-32">
    <div className="flex items-center justify-center place-self-center overflow-hidden w-128 h-96  object-cover rounded-3xl"><img src="./images/first.jpg" className="rounded-lg" /></div>
    <div className="text-3xl font-semibold flex items-center justify-center pt-8">More About me</div>
    <div className="mx-80">
            <div className="text-3xl font-semibold flex pt-8"> Hi!&nbsp;<span className="text-blue-300"> I'm Kelly,</span> &nbsp;Nice to meet you</div>
            <div className="text-2xl flex items-center text-justify text-neutral-600">
          I am a Computer Engineering student with a passion for technology and innovation. Throughout my academic journey, 
          I have been introduced to various aspects of computer science, hardware design, and software development. 
          My curiosity and enthusiasm for cutting-edge technologies drive me to explore new horizons in the ever-evolving field of computer engineering.
              </div>
    </div>
    </section>
    
   </div>
   
  
  
  );
}

export default App;
