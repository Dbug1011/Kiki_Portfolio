"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={800}
                  height={800}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-dark text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="relative px-4 h-40 overflow-y-scroll pb-10 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] ">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base  flex flex-col items-start gap-4 dark:text-neutral-400 [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={800}
                  height={800}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Videography | Video Editing",
    title: "She records",
    src: "/photos/VideographyCover.png",
    ctaText: "Visit",
    ctaLink: "/video/Kiki_Videography.mp4",
    content: () => {
      return (
        <p>
          I always love the life through lens and making my life like a movie. I
          have a passion in making videos since I was young, and I&apos;m still
          been doing what I love now.
        </p>
      );
    },
  },
  {
    description: "Photography",
    title: "She captures",
    src: "/photos/PhotographyCover.png",
    ctaText: "Visit",
    ctaLink: "/pdf/Jumawan-Photography-Portfolio.pdf",
    content: () => {
      return (
        <p>
          I&apos;m an enthusiastic photographer who loves to express my world
          through lens. I always believe that every moment is worth capturing.
        </p>
      );
    },
  },
  {
    description: "Compilation of Certificates",
    title: "She excels",
    src: "/photos/CertificatesCover.png",
    ctaText: "Visit",
    ctaLink: "/pdf/Jumawan_Certificates.docx",
    content: () => {
      return (
        <p>
          Throughout my journey, I have earned several certificates that
          highlight my dedication to continuous learning and professional
          development. These certificates reflect my hard work, commitment, and
          expertise in various fields. Each one represents a milestone in my
          career, showcasing my proficiency and the knowledge I have gained
          along the way. By continually seeking out new challenges and
          educational opportunities, I strive to excel and grow in all my
          endeavors.
        </p>
      );
    },
  },
  {
    description: "Atteventify",
    title: "She develops",
    src: "/photos/AtteventifyCover.png",
    ctaText: "Visit",
    ctaLink: "/pdf/Atteventify (1).pptx",
    content: () => {
      return (
        <p>
          I present a QR Code Attendance System, a mobile application built
          using Flutter. This app is designed to streamline the attendance
          process, making it more efficient and user-friendly. This is my first
          personal project, and I&apos;m just starting out on my journey to
          becoming a better developer.
        </p>
      );
    },
  },
  {
    description: "Volunteerism",
    title: "She volunteers",
    src: "/photos/VolunteerismCover.png",
    ctaText: "Visit",
    ctaLink: "/pdf/Kiki's Volunteerism.pptx",
    content: () => {
      return (
        <p>
          A student who volunteers at church, school, and in the community is a
          valuable asset, combining academic dedication with selfless service. I
          contribute to the spiritual community, enhance the school experience
          through mentorship and activities, and extend altruistic efforts
          locally, embodying leadership and empathy. Inspiring positive change,
          making them exceptional in various communities.
        </p>
      );
    },
  },
];
