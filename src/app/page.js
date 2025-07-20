import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Works from "@/sections/Works";


export default function Home() {
  return (
    <div className="">
        <Hero/>
        <About/>
        <Skills/>
        <Works/>
        <Contact/>
    </div>
  );
}
