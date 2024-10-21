export const YScrollVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const modalVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

export const bounceVariants = {
  initial: {
    y: 500,
  },
  animate: {
    y: [500, -200, 0],
    transition: {
      duration: 1.2,
      times: [0, 0.3, 1],
      ease: "easeOut",
    },
  },
};

export const shadowVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
