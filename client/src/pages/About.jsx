import { JobImg } from "../assets";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-6">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        <div className="w-full md:w-2/3 2xl:w-2/4">
          <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
          <p className="text-justify leading-7">
            We are a purpose-driven team passionate about building tools that
            simplify digital workflows. Our platform is designed with a focus on
            user experience, modular architecture, and rapid scalability to meet
            the ever-evolving demands of modern digital ecosystems. From concept
            to execution, we bring together innovation, technology, and design
            to help individuals and teams achieve more.
            <br />
            <br />
            Over the years, we've refined our approach, embracing flexibility,
            responsiveness, and data-driven decisions. Our mission is not just
            to build software—but to empower users with meaningful solutions
            that make their lives easier and more efficient.
          </p>
        </div>
        <img
          src={JobImg}
          alt="About"
          className="w-auto h-[300px] object-contain"
        />
      </div>

      <div className="leading-8 px-5 text-justify">
        <p>
          Our journey started with a simple idea: to streamline digital
          operations with intuitive interfaces and reliable performance. Today,
          we continue to push boundaries in areas like task automation,
          real-time collaboration, and analytics—all backed by a commitment to
          security, privacy, and user trust.
          <br />
          <br />
          Whether you're a solo creator or part of a large organization, we're
          here to support your growth with tools that adapt to your needs. Let's
          build the future—together.
        </p>
      </div>
    </div>
  );
};

export default About;
