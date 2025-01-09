export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

export const bounceVariants = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: [0, -200, 0],
    opacity: 1,
    transition: {
      y: {
        duration: 1,
        times: [0, 0.4, 1],
        ease: [0.33, 1, 0.68, 1],
      },
      opacity: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const pageVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 1, // Delay entrance until after transition
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
    },
  },
};

export const opacityVariants = {
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

export const pageContentVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
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
