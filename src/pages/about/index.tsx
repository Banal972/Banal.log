import { IoLogoGithub, IoMail } from "react-icons/io5"

import Container from "@/components/page/about/Container"
import LinkIcon from "@/components/page/about/LinkIcon"
import ProjectModal from "@/components/page/about/ProjectModal"
import Skill from "@/components/page/about/Skill"
import { Comming } from "@/components/page/about/project/Comming"
import { useProjectModal } from "@/provider/ProjectModalProvider"

const AboutPage = () => {
  const { openModal } = useProjectModal()

  return (
    <>
      <main>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">김지유</h2>
            <p className="mt-1">웹 프론트엔드 개발자</p>
            <div className="mt-1 flex gap-2">
              <LinkIcon href={"https://github.com/Banal972"} target="_blank">
                <IoLogoGithub />
              </LinkIcon>
              <LinkIcon href={"mailto:spbabo97@naver.com"} target="_blank">
                <IoMail />
              </LinkIcon>
            </div>
          </div>
          <div className="size-24 rounded-lg bg-black" />
        </div>

        <div className="mt-10 border-t pt-5">
          <p>
            여러 프로젝트를 통해 성능 최적화의 경험을 쌓은 것을 바탕으로, 좋은 제품을 개발하여
            누구에게나 자신 있게 추천할 수 있는 제품을 개발 하는 것을 목표로 하고 있습니다. 다양한
            직군과 소통, 피드백을 받는 것을 좋아하고, 받은 피드백 적극 수용하면서 끊임없이 개선해
            나가고 있습니다.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="mb-3 border-b pb-3 text-xl font-bold">Work Experience</h3>
          <Container>
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold">잇다소프트</h4>
              <p className="text-sm text-gray-500">2020.12 ~ 2023.07 (정규직)</p>
            </div>
            <p className="text-sm">인터랙티브 웹 사이트 제작 에이전시</p>

            <div className="mt-10">
              <h4 className="text-base font-bold">웹 퍼블리셔</h4>
              <ul className="mt-2 text-sm text-gray-700">
                <li className="flex items-center gap-2 before:block before:size-1 before:rounded-full before:bg-gray-700">
                  기존 CSS → SCSS 컴파일러 도입
                </li>
                <li className="flex items-center gap-2 before:block before:size-1 before:rounded-full before:bg-gray-700">
                  눈에 띄는 화려한 인터랙티브 사이트를 구축해 고객층 확대
                </li>
                <li className="flex items-center gap-2 before:block before:size-1 before:rounded-full before:bg-gray-700">
                  회사 내부 유지보수에서 쉽게 할 수 있게 내부 시스템 구축
                </li>
              </ul>
            </div>
          </Container>
        </div>

        <div className="mt-20">
          <h3 className="mb-3 border-b pb-3 text-xl font-bold">Project</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Container
              onClick={() =>
                openModal({
                  data: { title: "같이 달램", date: "2024.07 ~ 2024.08" },
                  modalContent: <Comming />,
                })
              }
              className="cursor-pointer"
            >
              <h4 className="flex items-center justify-between gap-2 font-semibold">
                같이달램 <span className="text-xs font-normal">(2024.07 ~ 2024.08)</span>
              </h4>
              <p className="mt-5">내용을 입력하는곳 입니다.</p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <Skill>Next.js(App)</Skill>
                <Skill>TypeScript</Skill>
                <Skill>React</Skill>
                <Skill>React-query</Skill>
              </div>
            </Container>
            <Container
              onClick={() =>
                openModal({
                  data: { title: "슬라이드 투 두", date: "null" },
                  modalContent: <Comming />,
                })
              }
              className="cursor-pointer"
            >
              <h4 className="flex items-center justify-between gap-2 font-semibold">
                슬라이드 투 두 <span className="text-xs font-normal">(2024.07 ~ 2024.08)</span>
              </h4>
              <p className="mt-5">내용을 입력하는곳 입니다.</p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <Skill>TypeScript</Skill>
                <Skill>React-Native</Skill>
                <Skill>Zustand</Skill>
              </div>
            </Container>
            <Container
              onClick={() =>
                openModal({
                  data: { title: "구구모", date: "null" },
                  modalContent: <Comming />,
                })
              }
              className="cursor-pointer"
            >
              <h4 className="flex items-center justify-between gap-2 font-semibold">
                구구모 <span className="text-xs font-normal">(2024.04 ~ 2024.06)</span>
              </h4>
              <p className="mt-5">내용을 입력하는곳 입니다.</p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <Skill>Next.js(App)</Skill>
                <Skill>TypeScript</Skill>
                <Skill>React</Skill>
                <Skill>React-query</Skill>
              </div>
            </Container>
            <Container
              onClick={() =>
                openModal({
                  data: { title: "Banal.log", date: "null" },
                  modalContent: <Comming />,
                })
              }
              className="cursor-pointer"
            >
              <h4 className="flex items-center justify-between gap-2 font-semibold">
                Banal.log <span className="text-xs font-normal">(2024.08 ~ 진행중)</span>
              </h4>
              <p className="mt-5">내용을 입력하는곳 입니다.</p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <Skill>Next.js(Pages)</Skill>
                <Skill>TypeScript</Skill>
                <Skill>React</Skill>
              </div>
            </Container>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="mb-3 border-b pb-3 text-xl font-bold">SKILL</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Skill>JavaScript</Skill>
            <Skill>TypeScript</Skill>
            <Skill>React-Native</Skill>
            <Skill>React</Skill>
            <Skill>Next.js</Skill>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="mb-3 border-b pb-3 text-xl font-bold">History</h3>
          {[
            {
              key: "403",
              name: "포텐데이 403",
              organization: "기관 : 비사이드",
            },
            {
              key: "codeit",
              name: "코드잇 스프린트 심화 프론트엔드 챌린지 2기",
              organization: "기관 : 코드잇",
            },
            {
              key: "wonted",
              name: "프리온보딩 프론트엔드 챌린지",
              organization: "기관 : 원티드",
            },
          ].map((history) => (
            <Container key={history.key} className="mt-3 first:mt-0">
              <h4 className="flex items-center gap-2 font-semibold">{history.name}</h4>
              <p className="text-sm">기관 : {history.organization}</p>
            </Container>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="mb-3 border-b pb-3 text-xl font-bold">Education</h3>
          <Container>
            <h4 className="flex items-center gap-2 font-semibold">
              한양 사이버대학교 <span className="text-xs font-normal">(2023.03 ~ )</span>
            </h4>
            <p className="text-sm">컴퓨터 공학과</p>
          </Container>
        </div>
      </main>
      <ProjectModal />
    </>
  )
}

export default AboutPage
