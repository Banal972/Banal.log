import { ReactNode, createContext, useContext, useState } from "react"

const ProjectModalProvider = ({ children }: DeafultType) => {
  const [modalState, setModalState] = useState<ProjectModalState>({
    isOpen: false,
  })

  const openModal = ({
    data,
    modalContent,
  }: {
    data: ProjectModalContextData
    modalContent?: ReactNode
  }) => {
    setModalState({ isOpen: true, data, modalContent })
  }
  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <ProjectModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ProjectModalContext.Provider>
  )
}

export const useProjectModal = () => useContext(ProjectModalContext)
export default ProjectModalProvider

const ProjectModalContext = createContext<ProjectContextType>({
  modalState: {
    isOpen: false,
  },
  openModal: () => {},
  closeModal: () => {},
})

type DeafultType = {
  children: ReactNode
}

type ProjectModalContextData = {
  title: string
  date: string
}

type ProjectModalState = {
  isOpen: boolean
  data?: ProjectModalContextData
  modalContent?: ReactNode
}

type ProjectModalProvider = {
  openModal: ({
    data,
    modalContent,
  }: {
    data: ProjectModalContextData
    modalContent?: ReactNode
  }) => void
  closeModal: () => void
}

interface ProjectContextType extends ProjectModalProvider {
  modalState: ProjectModalState
}
