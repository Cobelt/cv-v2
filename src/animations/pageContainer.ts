export function animate({ transition, ...variants }: any = {}) {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
    transition,
  }
}

export const appearFromTop = {
  initial: { y: "-100%", x: "0%" },
  animate: {
    y: "0%",
    x: "0%",
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { y: "0%", x: "0%", transition: { delay: 0.5, duration: 0 } },
}

export const appearFromBottom = {
  initial: { y: "100%", x: "0%" },
  animate: {
    y: "0%",
    x: "0%",
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { y: "0%", x: "0%", transition: { delay: 0.5, duration: 0 } },
}

export const appearFromLeft = {
  initial: { x: "-100%", y: "0%" },
  animate: {
    x: "0%",
    y: "0%",
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { x: "0%", y: "0%", transition: { delay: 0.5, duration: 0 } },
}

export const appearFromRight = {
  initial: { x: "100%", y: "0%" },
  animate: {
    x: "0%",
    y: "0%",
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { x: "0%", y: "0%", transition: { delay: 0.5, duration: 0 } },
}

export const fadeInItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
}

export const fadeInItemRapid = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
}

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
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
