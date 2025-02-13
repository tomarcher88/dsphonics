import Header from "../components/Header";
import imgPaths from "../assets/imgPaths.json";
import { useTrail, animated } from "@react-spring/web";
import TransparentFullWidthCard from "../components/TransparentFullWidthCard";
import Footer from "../components/Footer";

const Accreditation = () => {
  const trail = useTrail(imgPaths.length, {
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { mass: 1, tension: 200, friction: 20 },
  });

  return (
    <main>
      <Header />
      <article
        className="w-full bg-white py-16 flex items-center justify-center h-dvh"
        style={{
          backgroundImage: `url(./images/brown-seating.webp)`,
          backgroundSize: "cover",
        }}
      >
        <TransparentFullWidthCard
          header={"Our Accreditations"}
          bodyArr={[
            "In an industry driven by precision, innovation, and ever-evolving technology, maintaining the highest standards of expertise is not just a commitment—it’s a necessity. At DSPhonics, we take pride in holding a comprehensive range of industry certifications that validate our technical proficiency, product knowledge, and adherence to best practices. These accreditations ensure that we remain at the forefront of AV solutions, equipped with the latest tools and expertise to deliver seamless, high-quality results.",
            "By continuously investing in professional development and staying certified on the latest technologies and protocols, we provide our partners and clients with the confidence that their projects are in expert hands. Whether it’s system design, integration, or commissioning, our certified expertise guarantees a level of service that meets and exceeds industry benchmarks.",
          ]}
        />
      </article>
      <div className="flex flex-wrap sm:gap-4 gap-2 justify-center py-5">
        {trail.map((animationStyle, index) => (
          <animated.div key={index} style={animationStyle}>
            <img
              className="border-slate-400 border shadow-md h-auto sm:max-w-xs max-w-28 rounded-lg"
              src={imgPaths[index]}
              alt=""
            />
          </animated.div>
        ))}
      </div>

      <div className="h-dvh">
        <Footer />
      </div>
    </main>
  );
};

export default Accreditation;
