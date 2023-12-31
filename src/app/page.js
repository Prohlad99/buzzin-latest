import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import HappyClient from "./components/happy_client/HappyClient";
import Hero from "./components/home/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Team from "./components/team/Team";
import Testimonial from "./components/testimonial/Testimonial";

export const metadata={
  title: "BUZZIN | HOME",
  description: ""
}

export default function Home() {
  return (
    <main >
      <div>
        <Hero />
      </div>
      <div className="my-10">
        <About />
      </div>
      <div className="my-10">
        <Services />
      </div>
      <div className="my-10">
        <Team />
      </div>
      <div className="my-10 sm:mt-10 md:my-16">
        <HappyClient />
      </div>
      <div className="my-10 sm:mt-10 md:mb-[180px] md:mt-[100px]">
        <Blog />
      </div>
      <div className="my-10">
        <Portfolio />
      </div>
      <div className="my-10">
        <Testimonial />
      </div>
    </main>
  );
}
