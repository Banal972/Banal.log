import type { Metadata } from "next";
import "@/font/pretendard/pretendard-subset.css";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Banal.log",
  description: "개발하고 저장하는 공간입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <header className="flex h-14 items-center justify-between border-b px-8">
          <Link href={"/"} className="text-xl font-bold">
            🚀 BANAL.LOG
          </Link>
          <div className="flex items-center gap-10">
            <nav className="flex gap-5 font-medium">
              {[
                {
                  title: "HOME",
                  link: "/",
                },
                {
                  title: "BLOG",
                  link: "/blog",
                },
              ].map((nav) => (
                <Link key={nav.title} href={nav.link}>
                  {nav.title}
                </Link>
              ))}
            </nav>
            <button className="size-10 rounded-full border border-gray-300">
              🌕
            </button>
          </div>
        </header>
        <div className="mx-auto max-w-[1500px] px-5">{children}</div>
      </body>
    </html>
  );
}
