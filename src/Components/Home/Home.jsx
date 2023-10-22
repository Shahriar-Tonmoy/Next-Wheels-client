import { useEffect } from "react";
import Banner from "/Banner.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div
        className="hero h-[400px] md:h-[600px]"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-white ">
            Your Tech and Gaming Event Nexus
            </h1>
            <p className="hidden md:block">Welcome to Your Tech and Gaming Event Nexus, where the worlds of technology and gaming converge in an electrifying fusion of innovation and entertainment. Here, we serve as your portal to a realm where pixels transform into possibilities and gameplay becomes a journey of discovery. Dive into a multitude of events that celebrate the cutting-edge advancements in technology while indulging your passion for gaming. Whether you're a tech enthusiast seeking the latest breakthroughs or a gamer in search of epic challenges and camaraderie, our Nexus is your ultimate destination. Embark on a thrilling adventure where imagination meets reality, and where connections are forged, innovations are unveiled, and experiences are elevated. Join us in celebrating the boundless potential of the digital universe and the exciting future it promises.</p>
          </div>
        </div>
      </div>
      <div>
        {/* <Services></Services> */}
      </div>
      
    </div>
  );
};

export default Home;
