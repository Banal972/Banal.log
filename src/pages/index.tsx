import Link from "next/link";

import { Post, getAllPosts } from "@/lib/post";

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <main className="py-14">
      <div className="pb-14">
        <h4 className="text-2xl font-bold">BANAL</h4>
        <div className="mt-3 text-sm leading-6">
          <p>
            안녕하세요 반가습니다. <br />
            여기는 제 블로그 입니다.
          </p>
          <a href="">어떤 사람인가요?</a>
        </div>
      </div>

      <div className="relative flex items-start gap-[50px]">
        <div className="flex-1">
          <h4 className="text-sm tracking-tight text-gray-500">방금 올라온 시리즈</h4>

          <ul className="mt-5">
            {posts.map((post, index) => (
              <li key={index} className="mt-20 first:mt-0">
                <Link href={`/blog/post/1`}>
                  <div className="h-80 rounded-2xl border"></div>
                  <p className="mt-4 text-sm text-gray-500">{post.date}</p>
                  <h4 className="mt-2 text-2xl font-bold">{post.title}</h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sticky top-5 w-1/5 max-w-[290px]">
          <h4 className="text-sm tracking-tight text-gray-500">방금 올라온 시리즈</h4>
          <div className="mt-5">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div className="mt-10 w-full first:mt-0" key={index}>
                  <Link href={"/"}>
                    <div className="flex h-96 flex-col overflow-hidden rounded-2xl border">
                      <div className="flex-1"></div>
                      <div className="bg-black px-4 py-6 text-white">
                        <p>날짜</p>
                        <h4>제목</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
