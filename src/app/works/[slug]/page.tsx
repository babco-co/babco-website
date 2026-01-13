"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/header/header";
import { Spacer } from "@/components/spacer";
import { containerVariants, YScrollVariants } from "@/lib/utils/animations";

export default function ProjectPage() {
  const params = useParams();
  const { slug } = params;

  return (
    <div className="w-full min-h-screen font-helvetica">
      <Spacer className="w-full mt-5 px-5">
        <Header />
      </Spacer>

      <Spacer horizontal vertical className="mt-16 lg:mt-[192px]">
        <motion.div
          className="w-full flex flex-row items-start justify-center gap-16 lg:gap-[240px]"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl lg:text-6xl font-extralight"
            variants={YScrollVariants}
            transition={{ duration: 0.4 }}
          >
            {slug}
          </motion.h1>

          <motion.div
            className=""
            variants={YScrollVariants}
            transition={{ duration: 0.4 }}
          >
            <p className="text-base font-normal leading-[142%]">
              This is where you can add detailed information about your project.
            </p>
          </motion.div>
        </motion.div>
      </Spacer>
    </div>
  );
}
