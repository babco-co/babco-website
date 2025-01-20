// app/works/components/gallery.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { YScrollVariants } from "@/lib/utils/animations";
import arrowBlackIcon from "../../../../public/icons/arrow-black-icon.svg";

interface BaseContent {
  type: "image" | "video";
  title: string;
  subtitle: string;
  backgroundColor: string;
  slug: string; // Add slug for routing
}

interface ImageContent extends BaseContent {
  type: "image";
  alt: string;
}

interface VideoContent extends BaseContent {
  type: "video";
}

type GalleryContent = ImageContent | VideoContent;

const content: GalleryContent[] = [
  {
    type: "image",
    title: "Project 1",
    subtitle: "Branding & Digital Design",
    backgroundColor: "bg-[#005C44]",
    alt: "photo",
    slug: "project-1",
  },
  {
    type: "image",
    title: "Project 2",
    subtitle: "Branding & Digital Design",
    backgroundColor: "bg-red-500",
    alt: "photo",
    slug: "project-2",
  },
  {
    type: "image",
    title: "Project 3",
    subtitle: "Branding & Digital Design",
    backgroundColor: "bg-[#CCEBF9]",
    alt: "photo",
    slug: "project-3",
  },
  {
    type: "image",
    title: "Project 4",
    subtitle: "Branding & Digital Design",
    backgroundColor: "bg-[#B7B0A4]",
    alt: "photo",
    slug: "project-4",
  },
  {
    type: "image",
    title: "Project 5",
    subtitle: "Branding & Digital Design",
    backgroundColor: "bg-purple-500",
    alt: "photo",
    slug: "project-5",
  },
  {
    type: "image",
    title: "Project 6",
    subtitle: "Branding & Digital Design",
    backgroundColor: "bg-pink-500",
    alt: "photo",
    slug: "project-6",
  },
  {
    type: "image",
    title: "Project 7",
    subtitle: "Branding & Digital Design",
    backgroundColor: "bg-indigo-500",
    alt: "photo",
    slug: "project-7",
  },
  {
    type: "image",
    title: "Project 8",
    subtitle: "Branding & Digital Design",
    backgroundColor: "bg-orange-500",
    alt: "photo",
    slug: "project-8",
  },
  {
    type: "image",
    title: "Project 9",
    subtitle: "Branding & Digital Design",
    backgroundColor: "bg-teal-500",
    alt: "photo",
    slug: "project-9",
  },
  {
    type: "image",
    title: "Project 10",
    subtitle: "Branding & Digital Design",
    backgroundColor: "bg-cyan-500",
    alt: "photo",
    slug: "project-10",
  },
  {
    type: "image",
    title: "Project 11",
    subtitle: "Branding & Digital Design",
    backgroundColor: "bg-emerald-500",
    alt: "photo",
    slug: "project-11",
  },
];

const Gallery = () => {
  const router = useRouter();

  const handleProjectClick = (slug: string) => {
    router.push(`/works/${slug}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-[115px]">
      {content.map((item, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
          onClick={() => handleProjectClick(item.slug)}
        >
          <div className="relative w-full aspect-[0.84] rounded-lg overflow-hidden group cursor-pointer">
            {MediaComponent(item)}
          </div>

          <div className="flex flex-col items-start justify-center gap-2.5">
            <motion.div
              className="cursor-scale w-full flex flex-row items-center justify-start gap-2"
              variants={YScrollVariants}
              transition={{ duration: 0.4 }}
            >
              <motion.p
                className="text-[32px] lg:text-[40px] font-extralight leading-[120%] text-text-primary-light dark:text-text-primary-dark"
                variants={YScrollVariants}
                transition={{ duration: 0.4 }}
              >
                {item.title}
              </motion.p>

              <Image
                className="invert-0 dark:invert"
                src={arrowBlackIcon}
                alt="arrow"
                width={24}
                height={24}
              />
            </motion.div>

            <motion.p
              className="text-xl font-extralight leading-[120%] text-dark-gray"
              variants={YScrollVariants}
              transition={{ duration: 0.4 }}
            >
              {item.subtitle}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;

const MediaComponent = (item: GalleryContent) => {
  if (item.type === "image") {
    return (
      <div
        className={`w-full h-full ${item.backgroundColor} relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
      >
        <h3 className="text-white text-2xl font-medium z-10">{item.title}</h3>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    );
  } else if (item.type === "video") {
    return (
      <div
        className={`w-full h-full ${item.backgroundColor} relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
      >
        <h3 className="text-white text-2xl font-medium z-10">{item.title}</h3>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    );
  }
};
