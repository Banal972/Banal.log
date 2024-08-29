import { useSpring, useSpringRef } from "@react-spring/web"

const useFadeIn = (offset?: "left") => {
  const ref = useSpringRef()

  const props = useSpring({
    ref: ref,
    from: {
      opacity: 0,
      y: offset === "left" ? 0 : 30,
      x: offset === "left" ? -30 : 0,
    },
    to: {
      opacity: 1,
      y: offset === "left" ? 0 : 0,
      x: offset === "left" ? 0 : 0,
    },
    config: {
      duration: 300,
    },
  })

  return { ref, props }
}

export default useFadeIn
