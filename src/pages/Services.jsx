import { useRef } from "react";
import Header from "../components/Header";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import FullWidthCard from "../components/FullWidthCard";
import TransparentFullWidthCard from "../components/TransparentFullWidthCard";
import StaggeredCards from "../components/StaggeredCards";
// import LogoGallery from "../components/LogoGallery";

const Services = () => {
  const parallaxRef = useRef(null);
  return (
    <Parallax ref={parallaxRef} pages={4} className="bg-white">
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
        factor={1.1}
        // className="bg-cover bg-center"
        style={{
          backgroundImage: `url(./images/large-white-space.webp)`, // Still need inline style for dynamic values
          backgroundSize: "cover",
          filter: "grayscale(80%)",
        }}
      />
      {/* GAP CONTENT HERE - This is from the offset and factor props of both BG layers */}
      {/* Static background layer Two */}

      <ParallaxLayer
        offset={1.8}
        speed={0}
        factor={1.2}
        // className="bg-cover bg-center"
        style={{
          backgroundImage: `url(./images/dark-office.webp)`, // Still need inline style for dynamic values
          backgroundSize: "cover",
          filter: "grayscale(80%)",
        }}
      />
      <ParallaxLayer
        offset={3}
        speed={0}
        factor={1.2}
        className="bg-cover bg-center"
      >
        <div className="flex">
          <div
            className="bg-cover bg-center bg-no-repeat w-1/2 h-screen"
            style={{
              backgroundImage: `url(./images/mixing-desk-portrait.webp)`,
            }}
          ></div>
          <div
            className="bg-cover bg-center bg-no-repeat w-1/2 h-screen"
            style={{
              backgroundImage: `url(./images/grey-seating-portrait.webp)`,
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
          header={"Videoconference, BYOD & Presentation Spaces"}
          bodyArr={[
            "Conferencing spaces are another example of when acoustically challenging, aesthetically driven spaces can collide with the paramount requirement for high levels of speech intelligibility to allow for effective, productive communication.",
            "Whether you need help with a full system design, an acoustic survey for an existing space, or even supplementary modelling documentation for your space or design, we can help you.",
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
        <StaggeredCards
          cardOne={{
            header: "Background Music",
            content: [
              "Creating systems that are both aesthetically subtle whilst also being capable of high performance when needed in dynamic, multi-use environments with dynamic occupancy levels can be a challenge. Thankfully we have the tools and experience to help.",
            ],
          }}
          cardTwo={{
            header: "Lecture Theatres & Auditoriums",
            content: [
              "Another key area where acoustics, speech inteilligibility and the lucidicty of audio program material is critical to the effective communication of ideas.",
              "We can assist you with the design, modelling, programming and/or commissioning of auditoriums and lecture theatres of any size and have done so for a number of universities around the UK.",
            ],
          }}
        />
      </ParallaxLayer>

      {/* <ParallaxLayer
        speed={1.2}
        offset={3.2}
        className="flex justify-start items-center h-screen"
      >
        <div className="w-1/2 flex items-center justify-center bg-slate-400">
          <h2>Test first one</h2>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        speed={1.5}
        offset={3.6}
        className="flex justify-end items-center h-screen"
      >
        <div className="w-1/2 flex items-center justify-center bg-slate-400">
          <h2>Test second one</h2>
        </div>
      </ParallaxLayer> */}
    </Parallax>
  );
};

export default Services;
