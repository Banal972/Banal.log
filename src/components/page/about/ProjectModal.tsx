import { IoClose } from "react-icons/io5"

import { useProjectModal } from "@/provider/ProjectModalProvider"
import { animated, useChain, useSpring, useSpringRef, useTransition } from "@react-spring/web"

const ProjectModal = () => {
  const {
    modalState: { isOpen, data, modalContent },
    closeModal,
  } = useProjectModal()
  const { transitions, springs } = useModalChain(isOpen)

  return transitions((style, item) => (
    <>
      {item ? (
        <animated.div style={style} className="fixed left-0 top-0 h-full w-full">
          <div
            onClick={closeModal}
            className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer bg-black/40"
          />
          <animated.div
            style={springs}
            className="absolute left-1/2 top-1/2 flex max-h-[70vh] w-[85%] max-w-[768px] flex-col rounded-lg border bg-white px-5 py-10"
          >
            <div className="flex-none pb-3">
              <div className="flex justify-between">
                <h4 className="text-xl font-bold">{data?.title}</h4>
                <IoClose onClick={closeModal} className="cursor-pointer text-2xl" />
              </div>
              <p className="mt-3">{data?.date}</p>
            </div>
            <div className="scroll flex-1 overflow-y-auto py-5">{modalContent}</div>
          </animated.div>
        </animated.div>
      ) : null}
    </>
  ))
}

export default ProjectModal

const useModalChain = (isOpen: boolean) => {
  const transRef = useSpringRef()
  const transitions = useTransition(isOpen, {
    ref: transRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const springRef = useSpringRef()
  const springs = useSpring({
    ref: springRef,
    from: { scale: 0, x: "-50%", y: "-50%", opacity: 0 },
    to: { scale: isOpen ? 1 : 0.2, x: "-50%", y: "-50%", opacity: isOpen ? 1 : 0 },
  })

  useChain(isOpen ? [transRef, springRef] : [springRef, transRef], [0, 0.1])

  return { transitions, springs }
}
