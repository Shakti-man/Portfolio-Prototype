import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Fashion Website",
    description: "This was a project which I did when I was new to web development.",
    link: "https://shakti-man.github.io/Fashion-website/",
  },
  {
    title: "Shop Seva",
    description: "An online platform which bring small vendors and customers together.It was a side project so its not published yet but i will provide github link to it.",
    link: "https://github.com/itzayush69/Shop-Seva",
  },
  {
    title: "Example Project",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "https://example.com/blog",
  },
];

const ProjectCard = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = container.offsetWidth / 2; // 2 cards visible
        const nextIndex = (currentIndex + 1) % projects.length;
        container.scrollTo({
          left: nextIndex * cardWidth,
          behavior: "smooth",
        });
        setCurrentIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="project" className="px-4 py-12">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ scrollSnapAlign: "start", flex: "0 0 50%" }}
          >
            <Card {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

const Card = ({ title, description, link }) => {
  const [line1, line2] = title.split(" ");

  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 1, ease: "backInOut" }}
      variants={{ hover: { scale: 1.05 } }}
      className="relative h-96 w-full overflow-hidden rounded-xl bg-indigo-500 p-8"
    >
      <div className="relative z-10 text-white">
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{ hover: { scale: 1 } }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          {line1}
          <br />
          {line2}
        </motion.span>
        <p>{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white"
      >
        Go to Website
      </a>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{ hover: { scale: 1.5 } }}
      transition={{ duration: 1, ease: "backInOut" }}
    >
      <motion.circle
        variants={{ hover: { scaleY: 0.5, y: -25 } }}
        transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{ hover: { scaleY: 2.25, y: -25 } }}
        transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default ProjectCard;