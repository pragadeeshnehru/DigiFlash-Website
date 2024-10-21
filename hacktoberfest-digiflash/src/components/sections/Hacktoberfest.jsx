import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import Countdown from "../ui/countdown";
import Button from "../ui/glow-button";
import { TypewriterEffect } from "../ui/typewriter-effect";
import Footer from "./Footer";
import Header from "./Header";
import { BackgroundBeams } from "../ui/background-beams";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export default function Hacktoberfest() {
  const targetDate = "2024-10-24T09:00:00";
  const technicalEvents = [
    {
      title: "WebZilla 2.0",
      description: `
          Showcase your skills in coding, creativity, and problem-solving! Build a functional web application using the provided images and tackle real-time spot questions. Collaborate with your teammate to deliver an innovative solution in this dynamic event.<br/><br/>
          <strong>Guidelines:</strong><br/>
          1. <strong>Team Size:</strong> Induvidual participation.<br/>
          2. <strong>Coding Format:</strong> Develop a web page using the provided images and any web technology (HTML, CSS, JavaScript).<br/>
          3. <strong>Time:</strong> 2 hours for coding, followed by presentation and Q&A session.<br/>
          4. <strong>Judging Criteria:</strong> Creativity, functionality, collaboration, and presentation.
        `,
      image: "/events/webdesign.avif",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScEAu5bdXithiBXJrHMwVIKAoqASd5vsPZ6zgKo5HnD6CFGIA/viewform",
      poster: "/events/posters/webzilla.jpeg",
    },
    {
      title: "Return of the Coder",
      description: `
        <p>Return of the Coder is an exciting coding event designed to celebrate programming skills
        and foster collaboration among students. Participants will engage in a series of challenges,
        including problem solving, debugging, and description writing. Whether you're a seasoned
        coder or just starting out, this event offers a platform for skill development, networking, and
        fun. Join us for a day of creativity, problem-solving, and camaraderie in the world of coding!</p>
    
        <strong>Guidelines:</strong>
        <ul>
          <li>Registration is mandatory before the event.</li>
          <li>Participants must be individual.</li>
        </ul>
      `,
      image: "/events/coder.jpg",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdFeclCipPox6cLmWwRBEK3Qt0mWMUP1dsuqA74sfhHmqOf5Q/viewform",
      poster: "/events/posters/return of coder.jpeg",
    },
    {
      title: "Paper Pulse",
      description: `
        Unleash the power of ideas and innovation at our Paper Presentation session! Participants are invited to present on any topic of their choice, showcasing creativity, innovation, and in-depth research. This platform encourages diverse ideas from all fields, fostering interdisciplinary knowledge exchange and inspiring groundbreaking discussions.<br/><br/>
        <strong>Guidelines:</strong><br/>
        1. <strong>Team Size:</strong> Maximum of 2 participants per team.<br/>
        2. <strong>Presentation Time:</strong> 8-10 minutes, followed by a 2-minute Q&A session.<br/>
        3. <strong>Format:</strong> Presentations must be in PPT format. 10-15 slides<br/>
        4. <strong>Originality:</strong> Content must be original, plagiarism will lead to disqualification.<br/>
        5. <strong>Technical Setup:</strong> Participants must bring their presentation on a USB drive or email it in advance.<br/>
        6. <strong>Judging Criteria:</strong> Evaluation will be based on content, clarity, innovation, and presentation skills.
      `,
      image: "/events/paper.jpg",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeXpl7oSW6EVUcE7hZruEvMPgM5GfNukJZTdcBs89wJ0X6Wqw/viewform",
      poster: "/events/posters/paper pulse.jpeg",
    },
    {
      title: "Trace the Bug",
      description: `
        Trace the Bug is a team-based coding competition where teams of two will tackle a variety of programming challenges. The event spans three distinct rounds, each testing different aspects of coding skills. Whether you're a beginner or have some experience, this competition is a great way to improve, collaborate, and showcase your coding abilities.<br/><br/>
        <strong>Rules:</strong><br/>
        1. <strong>Eligibility:</strong> Open to teams of two participants with basic programming knowledge. Limited to first 30 teams<br/>
        2. <strong>Languages:</strong> Participants are free to use any programming language they are comfortable with.<br/>
        3. <strong>Submission:</strong> All solutions must be submitted within the allocated time for each round.<br/>
        4. <strong>Judging Criteria:</strong> Correctness, efficiency of code, and submission time.<br/>
        5. <strong>Conduct:</strong> Dishonest behavior or rule violations will result in disqualification.<br/>
        6. <strong>Awards:</strong> Teams with the highest overall performance will receive prizes and recognition.
      `,
      image: "/events/bug.png",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScb99Q7QX5ZhUS_Pia7jelp-owzqoYqSLf-ANGBcpJRG533hQ/viewform",
      poster: "/events/posters/Trace the bug.jpeg",
    },
    {
      title: "Code Link",
      description: `
        Collaborate, innovate, and showcase your technical expertise in our thrilling  Challenge! Team up with a partner and tackle three exciting rounds to prove your skills in this dynamic event.<br/><br/>
        <strong>Guidelines:</strong><br/>
        1. <strong>Team Size:</strong> Maximum of 2 participants.<br/>
        2. <strong>Registration:</strong> Pre-registration is required for participation.
      `,
      image: "/events/connect.jpg",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdQp5VMp2zgg4pxioz2BLCoVmrzRxWyQC02S8RZCLxdq2F0qw/viewform",
      poster: "/events/posters/code link.jpeg",
    },
  ];

  const nonTechnical = [
    {
      title: "Screen Sparks",
      description: `
        Screen Sparks is an exciting cinema-based competition uniting movie enthusiasts from diverse backgrounds. The event aims to test participants' knowledge, creativity, and passion for films. Teams of 2 members will navigate through three challenging rounds, showcasing their expertise in Tamil and international cinema.<br/><br/>
        <strong>Rules:</strong><br/>
        1. Registration is mandatory before the event.<br/>
        2. Teams must consist of exactly 2 members.<br/>
        3. The first 30 registered teams will be accepted on a first-come, first-served basis.<br/><br/>
        4. Winners will be determined by jury scores.<br/>
      `,
      image: "/events/cinema.png",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeaXOGRIQeQojCEdZqJASbIJRyYGQpUpE8ZECQTtZ8FJn1iQg/viewform",
      poster: "/events/posters/screen sparks.jpeg",
    },
    {
      title: "Frozen Pixels",
      description: `
        Participants will be selected in a single photography round. The photo should be taken within in the college based on the theme mentioned above. The photo can be uploaded to the form which will be sent before the event. The registration is based on the First come , First serve basis. First 40 participants are allowed to participate.Showcase your photographic prowess and immortalize the beauty of our college through your lens.<br/><br/>
        <strong>Rules:</strong><br/>
        1) <strong>Submission:</strong> Participants should submit only one photo within the given deadline (23/10/2024 10:00 pm).<br/>
        2) <strong>Originality:</strong> All photographs must be your original work. Plagiarism will lead to disqualification.<br/>
        3) <strong>Judging Criteria:</strong> Photographs will be judged based on composition, creativity, technical skill, and overall impact.<br/><br/>
        <strong>Themes:</strong><br/>
        - <strong>IT Stream:</strong> Tech and Nature<br/>
        - <strong>Core Stream:</strong> Vintage<br/>
        - <strong>Circuit Stream:</strong> DIY Electronics or Own Gadgets
      `,
      image: "/events/camera.jpg",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScly7T4pCTywX13Uf439qMS5YaR6MwP18VylwH80BbBg7oUMw/viewform",
      poster: "/events/posters/frozen pixels.jpeg",
    },
  ];

  const words = [
    {
      text: "HACKTOBER",
    },
    {
      text: "FEST",
    },
    {
      text: "2K24",
      className: "text-[#2fceee] glow",
    },
  ];

  return (
    <div className="font-display text-white bg-gradient-to-br from-[#01012b]  to-[#ed1e79]">
      <Header />
      <div className="p-8 pt-27 flex flex-col justify-center text-center ">
        <TypewriterEffect
          words={words}
          className={"dark py-4 font-extrabold"}
        />
        <p className="py-8">
          Join us for Hacktober Fest-2K24, an exciting intra-college symposium
          organized by Digiflash the Computer Science Association! This event is
          a perfect blend of technical and non-technical activities, designed to
          showcase innovation, creativity, and collaboration among students.{" "}
        </p>

        <p className="py-4 ">24th October 2024</p>

        <Countdown targetDate={targetDate} />
      </div>

      <p className="text-[#1ce4ff] text-2xl text-center p-4 glow">
        Technical Events
      </p>
      <div className="grid grid-cols-1 gap-4 p-8">
        {technicalEvents.map((contest, index) => (
          <div key={index} className="flex justify-center">
            <ContestCards
              title={contest.title}
              description={contest.description}
              image={contest.image}
              link={contest.link}
              poster={contest.poster}
            />
          </div>
        ))}
      </div>
      <p className="text-[#1ce4ff] text-2xl text-center p-4 glow">
        Non Technical Events
      </p>

      <div className="grid grid-cols-1 gap-4 p-8">
        {nonTechnical.map((contest, index) => (
          <div key={index} className="flex justify-center">
            <ContestCards
              title={contest.title}
              description={contest.description}
              image={contest.image}
              link={contest.link}
              poster={contest.poster}
            />
          </div>
        ))}
      </div>
      <BackgroundBeams />
      <Footer />
    </div>
  );
}

function ContestCards({ title, description, image, link, poster }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <RevealOnScroll>
      <div className="w-full flex flex-col sm:flex-row max-w-full text-white border rounded-lg shadow bg-[#0f0f0f] border-gray-700">
        <div className="w-full">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src={image}
            alt=""
          />
        </div>
        <div className="p-5 w-full">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {title}
            </h5>
          </a>
          <div
            className="mb-3 font-normal text-gray-400"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <div className="flex space-x-4">
            <a href={link}>
              <Button>Register</Button>
            </a>
            <Button onClick={openModal}>View Brochure</Button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="bg-black p-4 w-[90%] h-[90%] md:w-[60%] md:h-[70%] rounded-lg shadow-xl flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
      >
        <div className="relative w-full h-full flex justify-center items-center">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white text-2xl"
          >
            &times;
          </button>
          <img
            className="rounded-lg max-w-full max-h-full object-contain"
            src={poster}
            alt="Brochure"
          />
        </div>
      </Modal>
    </RevealOnScroll>
  );
}
