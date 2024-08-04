export function animate({ transition, ...variants }: any = {}) {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
    transition,
  }
}

export const appearFromBottom = {
  initial: { y: "100%" },
  animate: { y: "0%" },
  exit: { opacity: 1 },
  // transition: {
  //   duration: 0.75,
  //   ease: "easeOut",
  // },
}

export const appearFromLeft = {
  initial: { x: "-100%" },
  animate: { x: "0%" },
  exit: { opacity: 1 },
  transition: {
    duration: 0.75,
    ease: "easeOut",
  },
}

export const appearFromRight = {
  initial: { x: "100%" },
  animate: { x: "0%" },
  exit: { opacity: 1 },
  transition: {
    duration: 0.75,
    ease: "easeOut",
  },
}

export const fadeInItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
}

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.15,
    },
  },
}

export const delayedContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 0.15,
    },
  },
}

export const item = {
  hidden: { y: "-100%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.15 } },
}
