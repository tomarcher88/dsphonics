import { useRef } from "react";
import Header from "../components/Header";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import FullWidthCard from "../components/FullWidthCard";
import TransparentFullWidthCard from "../components/TransparentFullWidthCard";
import LogoGallery from "../components/LogoGallery";
import AnimatedHeroText from "../components/AnimatedHeroText";
import ExplodingGallery from "../components/ExplodingGallery";

const Home = () => {
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
        speed={0.1}
        factor={1.2}
        style={{
          // backgroundImage: `url(./images/large-white-space.webp)`, // Still need inline style for dynamic values
          backgroundImage: `url(./images/sunny-office.webp)`, // Still need inline style for dynamic values
          backgroundSize: "cover",
          // filter: 'grayscale(100%)',
        }}
      />

      {/* HERO OVERLAY for layer one */}
      <ParallaxLayer
        offset={0}
        speed={1.5}
        className="flex items-center justify-center"
      >
        <AnimatedHeroText />
        {/* <h1 className="text-4xl font-normal text-white tracking-tight">
          Simplicity | Lucidity |{" "}
          <span className="font-semibold">Performance</span>
        </h1> */}
      </ParallaxLayer>

      {/* GAP CONTENT - Gap in between BGs with this content */}
      <ParallaxLayer
        // offset={1.2}
        // factor={0.6}
        sticky={{ start: 1, end: 1 }}
        speed={1}
        className="flex items-center justify-center"
      >
        <FullWidthCard
          header={"Who are we?"}
          bodyArr={[
            "DSPhonics are a technical AV services provider, specialising in audio systems of all scopes and applications. We have assisted in delivering innumerable projects that range from simple meeting rooms, complex multipurpose audio and video conference spaces, paging systems, BGM systems, sound masking systems, lecture theatres, atriums and stadiums.",
            "We are committed to ensuring we uphold, maintain and apply the highest practices and standards. This also means maintaining appropriate certification on the latest products, technologies and protocols to ensure our skill-set and knowledgebase stay relevant within a perpetually evolving industry.",
          ]}
        />
      </ParallaxLayer>

      {/* Static background layer Two */}

      <ParallaxLayer
        offset={1.9}
        speed={0.2}
        factor={1.5}
        className="bg-cover bg-center"
        style={{
          // backgroundImage: `url(https://images.unsplash.com/photo-1544572571-ab94fd872ce4?w=1920&q=80&auto=format&fit=crop)`, // Still need inline style for dynamic values
          backgroundImage: `url(./images/live-crowd.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // minHeight: "100vh",
        }}
      />
      {/* SECOND BG IMG OVERLAY */}
      <ParallaxLayer
        // offset={2}
        sticky={{ start: 2, end: 2 }}
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
        offset={3.3}
        factor={1.5}
        speed={0.8}
        className="flex items-center justify-center"
      >
        <LogoGallery />
        {/* <ExplodingGallery /> */}
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;
