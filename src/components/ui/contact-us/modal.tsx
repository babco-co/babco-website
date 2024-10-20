"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "./modal-context";
import { modalVariants, overlayVariants } from "@/lib/utils/animations";
import ContactForm from "./form";
import lineMobile from "../../../../public/line-mobile.svg";

const Modal = () => {
  const { isModalOpen, closeModal } = useModal();

  const handleCloseModal = () => {
    closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="flex items-center justify-center fixed inset-0 backdrop-blur-[22px] z-50 bg-white/20 overflow-y-auto"
        onClick={handleCloseModal}
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          className="w-full max-w-[691px] flex flex-col items-center justify-center 
          gap-10 p-10 rounded-md relative bg-primary-black overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="w-full flex items-center justify-between">
            <div className="flex gap-4 items-center justify-start">
              <p className="text-lg lg:text-[56px] font-extralight leading-[200%] text-primary-white">
                Contact Us
              </p>

              <Image className="" src={lineMobile} alt="line" />
            </div>

            <button onClick={handleCloseModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <line
                  y1="-0.5"
                  x2="24.0403"
                  y2="-0.5"
                  transform="matrix(0.707146 -0.707068 0.707146 0.707068 1 18)"
                  stroke="white"
                />
                <line
                  y1="-0.5"
                  x2="24.0403"
                  y2="-0.5"
                  transform="matrix(0.707146 0.707068 -0.707146 0.707068 1 1)"
                  stroke="white"
                />
              </svg>
            </button>
          </div>

          <ContactForm closeModal={handleCloseModal} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
