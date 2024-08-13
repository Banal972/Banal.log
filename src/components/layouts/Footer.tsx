import { IoLogoGithub } from "react-icons/io5"

const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden border-t py-5 text-center">
      <div className="text-center">
        <a className="inline-block align-middle" href="naver.com" target="_blank">
          <IoLogoGithub className="text-2xl" />
        </a>
      </div>
      <p className="relative mt-2 text-sm">Copyright © Banal 2024</p>
    </footer>
  )
}

export default Footer
