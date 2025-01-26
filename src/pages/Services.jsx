import { useRef } from "react";
import Header from "../components/Header";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import FullWidthCard from "../components/FullWidthCard";
import TransparentFullWidthCard from "../components/TransparentFullWidthCard";
// import LogoGallery from "../components/LogoGallery";

const Services = () => {
  const parallaxRef = useRef(null);
  return (
    <Parallax ref={parallaxRef} pages={5} className="bg-white">
      {/* HEADER */}
      <ParallaxLayer
        sticky={{ start: 0, end: 0 }} // Only shows on first page
        className="z-50" // Ensure it's above other layers
      >
        <Header />
      </ParallaxLayer>
      {/* Static background layer One */}
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={1.2}
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1544511916-0148ccdeb877?w=1920&q=80&auto=format&fit=crop)`, // Still need inline style for dynamic values
        }}
      />
      {/* GAP CONTENT HERE - This is from the offset and factor props of both BG layers */}
      {/* Static background layer Two */}

      <ParallaxLayer
        offset={1.8}
        speed={0}
        factor={1.2}
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1544572571-ab94fd872ce4?w=1920&q=80&auto=format&fit=crop)`, // Still need inline style for dynamic values
        }}
      />
      <ParallaxLayer
        offset={3}
        speed={0}
        factor={1}
        className="bg-cover bg-center"
      >
        <div className="flex">
          {/* <img
            src="https://images.unsplash.com/photo-1544572571-ab94fd872ce4?w=1920&q=80&auto=format&fit=crop"
            alt=""
            className="w-1/2 h-auto"
          />
          <img
            src="https://images.unsplash.com/photo-1544511916-0148ccdeb877?w=1920&q=80&auto=format&fit=crop"
            alt=""
            className="w-1/2 h-auto"
          /> */}
          <div
            className="bg-cover bg-center bg-no-repeat w-1/2 h-screen"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1544511916-0148ccdeb877?w=1920&q=80&auto=format&fit=crop)",
            }}
          ></div>
          <div
            className="bg-cover bg-center bg-no-repeat w-1/2 h-screen"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1533396371595-d46b0aa39bd2?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          ></div>
        </div>
      </ParallaxLayer>

      {/* HERO OVERLAY */}
      <ParallaxLayer
        offset={0}
        speed={1.4}
        className="flex items-center justify-center"
      >
        <TransparentFullWidthCard
          header={"Our services"}
          bodyArr={[
            "We provide a range of supplementary technical services within the professional audio and AV sector. We supply these across various market verticals to both integrators and end-users direct, please take a look at some examples of the services we offer below.",
          ]}
        />
      </ParallaxLayer>

      {/* GAP CONTENT */}
      <ParallaxLayer
        offset={1.2}
        factor={0.6}
        speed={0.5}
        className="flex items-center justify-center"
      >
        <FullWidthCard
          header={"Event Spaces & Townhalls"}
          bodyArr={[
            "Townhall & event spaces in corporate environments act as a key location for company wide communication and external events; which usually involves addressing large groups of listeners in potentially challenging acoustic environments. Optiminal audio system design and implementation is critical to the user experience.",
          ]}
        />
      </ParallaxLayer>

      {/* SECOND BG IMG OVERLAY */}
      <ParallaxLayer
        offset={2}
        speed={1.2}
        className="flex items-center justify-center"
      >
        <TransparentFullWidthCard
          header={"What do we do?"}
          bodyArr={[
            "We work closely alongside our AV & IT integration partners to to survey, design, program & commission AV systems by supplementing our partners skillbase to deliver innumerable projects of varying scopes globally.",
            "Whether you are in the pre-sales, design or delivery phase of a project. We're certain that we will be able to provide you a service that you can rely on.",
          ]}
        />
      </ParallaxLayer>
      {/* ACCREDITATION */}
      <ParallaxLayer
        offset={3}
        factor={1}
        speed={0.8}
        className="flex items-center justify-center"
      >
        <TransparentFullWidthCard
          header={"What do we do?"}
          bodyArr={[
            "We work closely alongside our AV & IT integration partners to to survey, design, program & commission AV systems by supplementing our partners skillbase to deliver innumerable projects of varying scopes globally.",
            "Whether you are in the pre-sales, design or delivery phase of a project. We're certain that we will be able to provide you a service that you can rely on.",
          ]}
        />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Services;
