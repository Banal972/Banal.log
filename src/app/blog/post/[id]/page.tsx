import { allPosts } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ id: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { id: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.id);
  if (!post) throw new Error(`Post not found for slug: ${params.id}`);
  return { title: post.title };
};

const PostPage = ({ params }: { params: { id: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.id);
  if (!post) throw new Error(`Post not found for slug: ${params.id}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {/* {format(parseISO(post.date), "LLLL d, yyyy")} */}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div
        className="[&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: post.description }}
      />
    </article>
  );
};

export default PostPage;
