import { useProjectModal } from "@/provider/ProjectModalProvider"
import { animated, useTransition } from "@react-spring/web"

const ProjectModal = () => {
  const { modalState, closeModal } = useProjectModal()

  const { isOpen, data, modalContent } = modalState

  const transitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return transitions((style, item) => (
    <>
      {item ? (
        <animated.div style={style} className="fixed left-0 top-0 h-full w-full">
          <div
            onClick={closeModal}
            className="absolute bottom-0 left-0 right-0 top-0 bg-black/20"
          />
          <div className="absolute left-1/2 top-1/2 w-[90%] max-w-[768px] -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-white px-5 py-10">
            <h4 className="text-xl font-bold">{data?.title}</h4>
            <p className="mt-3">{data?.date}</p>
            {modalContent}
          </div>
        </animated.div>
      ) : null}
    </>
  ))
}

export default ProjectModal
