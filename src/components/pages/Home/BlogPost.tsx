import Link from "next/link";

const BlogPost = async () => {
  return (
    <ul className="mt-5">
      {/* <li key={post.url + post.date} className="mt-20 first:mt-0">
        <Link href={`/blog/post/1`}>
          <div className="h-80 rounded-2xl border"></div>
          <p className="mt-4 text-sm text-gray-500">{post.date}</p>
          <h4 className="mt-2 text-2xl font-bold">{post.title}</h4>
        </Link>
      </li> */}
    </ul>
  );
};

export default BlogPost;
