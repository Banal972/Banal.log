import Image from "next/image"
import Link from "next/link"

import { IoHome, IoLogoGithub, IoMail } from "react-icons/io5"

import Container from "@/components/page/about/Container"
import LinkIcon from "@/components/page/about/LinkIcon"
import ProjectModal from "@/components/page/about/ProjectModal"
import Skill from "@/components/page/about/Skill"
import BanalLog from "@/components/page/about/project/BanalLog"
import { Dallem } from "@/components/page/about/project/Dallem"
import DallemR from "@/components/page/about/project/DallemR"
import Gugumo from "@/components/page/about/project/Gugumo"
import SlideTodo from "@/components/page/about/project/SlideTodo"
import { HISTORYS } from "@/constant/history"
import { useProjectModal } from "@/provider/ProjectModalProvider"
import Footer from "@/ui/Footer"
import MainLayout from "@/ui/MainLayout"

const AboutPage = () => {
  const { openModal } = useProjectModal()

  return (
    <MainLayout>
      <main>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">김지유</h2>
            <p className="mt-1">웹 프론트엔드 개발자</p>
            <div className="mt-1 flex gap-2">
              <LinkIcon href={"/"}>
                <IoHome />
              </LinkIcon>
              <LinkIcon href={"https://github.com/Banal972"} target="_blank">
                <IoLogoGithub />
              </LinkIcon>
              <LinkIcon href={"mailto:spbabo97@naver.com"} target="_blank">
                <IoMail />
              </LinkIcon>
            </div>
          </div>
          <div className="relative size-32 overflow-hidden rounded-lg border">
            <Image
              src="/asset/profile.jpg"
              fill
              className="rounded-lg object-cover object-top"
              alt="프로필 사진"
            />
          </div>
        </div>

        <ul className="mt-10 border-t pt-5 text-sm">
          <li className="flex items-center gap-2 before:block before:size-1 before:rounded-full before:bg-gray-700">
            자연스러운 인터랙티브 애니메이션 구현에 자신이 있으며 사용자 경험 향상에 관심이
            있습니다.
          </li>
          <li className="mt-1 flex items-center gap-2 before:block before:size-1 before:rounded-full before:bg-gray-700">
            지속적으로 성장하며 최신 트렌드를 주시하고 있습니다.
          </li>
          <li className="mt-1 flex items-center gap-2 before:block before:size-1 before:rounded-full before:bg-gray-700">
            함수형 프로그래밍과 싱글턴 패턴등 효율적인 프로그래밍 패턴에 관심이 많습니다.
          </li>
          <li className="mt-1 flex items-center gap-2 before:block before:size-1 before:rounded-full before:bg-gray-700">
            이를 바탕으로 사용자 경험, 프로젝트의 완성도, 시스템 효율성을 개선하기 위해 노력하고
            있습니다.
          </li>
        </ul>

        <div className="mt-20">
          <h4 className="mb-3 border-b pb-3 text-xl font-bold">Work Experience</h4>
          <Container>
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold">
                <Link href="https://www.itddaa.com" target="_blank">
                  잇다소프트
                </Link>
              </h4>
              <p className="text-sm text-gray-500">2020.12 ~ 2023.07 (정규직)</p>
            </div>
            <p className="text-sm">인터랙티브 웹 사이트 제작 에이전시</p>

            <div className="mt-10">
              <h4 className="text-sm font-bold">웹 퍼블리셔</h4>
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

            <div className="mt-10">
              <h4 className="text-sm font-bold">대표 프로젝트</h4>
              <ul className="ml-3 mt-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="size-4 rounded-sm bg-blue-500"></div>
                  <Link href="https://www.itddaa.com/" target="_blank">
                    잇다소프트 <span className="text-xs">(Jquery, GSAP, PHP)</span>
                  </Link>
                </li>
                <li className="mt-2 flex items-center gap-2">
                  <div className="size-4 rounded-sm bg-orange-500"></div>
                  <Link href="https://www.awesomemedia.co.kr/" target="_blank">
                    어썸 미디어 <span className="text-xs">(Jquery, GSAP, PHP)</span>
                  </Link>
                </li>
                <li className="mt-2 flex items-center gap-2">
                  <div className="size-4 rounded-sm bg-green-500"></div>
                  <Link href="https://purerang.co.kr/" target="_blank">
                    퓨어랑 <span className="text-xs">(Jquery, GSAP, PHP)</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Container>
        </div>

        <div className="mt-20">
          <h4 className="mb-3 border-b pb-3 text-xl font-bold">Project</h4>
          <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
            <Container
              onClick={() =>
                openModal({
                  data: { title: "같이 달램 - 리펙토링", date: "2024.09 ~ 진행중" },
                  modalContent: <DallemR />,
                })
              }
              className="cursor-pointer transition-shadow duration-300 hover:shadow-lg"
            >
              <h4 className="flex items-center justify-between gap-2 font-semibold">
                같이달램 - 리펙토링 <span className="text-xs font-normal">(2024.09 ~ 진행중)</span>
              </h4>
              <p className="mt-3 text-sm">
                기존 같이달램의 마이크로상태 관리 와 hooks 디자인 패턴으로 UI에서 기능을 명확하게
                분리 및 로그인 UI 개선
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                {["Next.js(App)", "TypeScript", "React", "TanStack-Query", "Tailwind CSS"].map(
                  (skill) => (
                    <Skill key={skill}>{skill}</Skill>
                  ),
                )}
              </div>
            </Container>

            <Container
              onClick={() =>
                openModal({
                  data: { title: "같이 달램", date: "2024.07 ~ 2024.08" },
                  modalContent: <Dallem />,
                })
              }
              className="cursor-pointer transition-shadow duration-300 hover:shadow-lg"
            >
              <h4 className="flex items-center justify-between gap-2 font-semibold">
                같이달램 <span className="text-xs font-normal">(2024.07 ~ 2024.08)</span>
              </h4>
              <p className="mt-3 text-sm">
                유저가 바쁜 일상 속 휴식을 위한 다양한 모임을 탐색하고 참여하며, 직접 모임을
                개설하고 리뷰를 생성할 수 있는 서비스입니다.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                {["Next.js(App)", "TypeScript", "React", "TanStack-Query"].map((skill) => (
                  <Skill key={skill}>{skill}</Skill>
                ))}
              </div>
            </Container>

            <Container
              onClick={() =>
                openModal({
                  data: { title: "슬라이드 투 두", date: "2024.07 ~ 2024.09" },
                  modalContent: <SlideTodo />,
                })
              }
              className="cursor-pointer transition-shadow duration-300 hover:shadow-lg"
            >
              <h4 className="flex items-center justify-between gap-2 font-semibold">
                슬라이드 투 두 <span className="text-xs font-normal">(2024.07 ~ 2024.09)</span>
              </h4>
              <p className="mt-3 text-sm">
                사용자가 스마트 기기로 목표, 할일과, 노트를 작성하고 할일에 대한 %를 알려주는
                어플리케이션 입니다.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                {[
                  "TypeScript",
                  "Expo",
                  "React-Native",
                  "TanStack-Query",
                  "Zustand",
                  "NativeWind",
                ].map((skill) => (
                  <Skill key={skill}>{skill}</Skill>
                ))}
              </div>
            </Container>

            <Container
              onClick={() =>
                openModal({
                  data: { title: "Banal.log", date: "2024.08 ~ 진행중" },
                  modalContent: <BanalLog />,
                })
              }
              className="cursor-pointer transition-shadow duration-300 hover:shadow-lg"
            >
              <h4 className="flex items-center justify-between gap-2 font-semibold">
                Banal.log <span className="text-xs font-normal">(2024.08 ~ 진행중)</span>
              </h4>
              <p className="mt-3 text-sm">
                심플하게 만들어 노트처럼 작성한 프론트엔드 개발자의 회고록 Banal.log
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                {["TypeScript", "Next.js(Pages)", "React"].map((skill) => (
                  <Skill key={skill}>{skill}</Skill>
                ))}
              </div>
            </Container>

            <Container
              onClick={() =>
                openModal({
                  data: { title: "구구모", date: "2024.04 ~ 2024.06" },
                  modalContent: <Gugumo />,
                })
              }
              className="cursor-pointer transition-shadow duration-300 hover:shadow-lg"
            >
              <h4 className="flex items-center justify-between gap-2 font-semibold">
                구구모 <span className="text-xs font-normal">(2024.04 ~ 2024.06)</span>
              </h4>
              <p className="mt-3 text-sm">동네 구기종목 매칭 서비스 구구모 입니다.</p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                {["TypeScript", "Next.js(App)", "React", "TanStack-Query"].map((skill) => (
                  <Skill key={skill}>{skill}</Skill>
                ))}
              </div>
            </Container>
          </div>
        </div>

        <div className="mt-20">
          <h4 className="mb-3 border-b pb-3 text-xl font-bold">SKILL</h4>
          <div className="flex flex-wrap gap-3 text-sm">
            {["TypeScript", "JavaScript", "Next.js", "React", "React-Native"].map((skill) => (
              <Skill key={skill}>{skill}</Skill>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h4 className="mb-3 border-b pb-3 text-xl font-bold">History</h4>
          {HISTORYS.map((history) => (
            <Link
              href={history.link}
              target="_blank"
              key={history.key}
              className="mt-3 block first:mt-0"
            >
              <Container className="transition-shadow duration-300 hover:shadow-lg">
                <h4 className="flex items-center gap-2 font-semibold">{history.name}</h4>
                <p className="text-sm">기관 : {history.organization}</p>
                {history.date && <p className="text-xs text-slate-500">기간 : {history.date}</p>}
              </Container>
            </Link>
          ))}
        </div>

        <div className="mt-20">
          <h4 className="mb-3 border-b pb-3 text-xl font-bold">Education</h4>
          <Container>
            <h4 className="flex items-center gap-2 font-semibold">
              한양 사이버대학교 <span className="text-xs font-normal">(2023.03 ~ )</span>
            </h4>
            <p className="text-sm">컴퓨터 공학과</p>
          </Container>
        </div>
      </main>
      <Footer />
      <ProjectModal />
    </MainLayout>
  )
}

export default AboutPage
