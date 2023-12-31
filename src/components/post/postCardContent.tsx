import getReadingTime from "@/lib/getReadingTime";
import getRelativeDate from "@/lib/getRelativeDate";
// import { Post, PostWithAuthorAndCategory } from "@/types/database";

interface PostCardContentProps {
  post: any;
  isPostHero?: boolean;
}
const PostCardContent = ({ post, isPostHero }: PostCardContentProps) => {
  const { slug, content, data } = post;

  return (
    <div className="space-y-2">
      {/* Tags */}
      <div className="flex flex-wrap @md:flex-nowrap items-center gap-1 @md:gap-2  text-xs @md:text-sm text-neutral-500">
        <div
          className={`font-medium ${
            post.data.title === "Cities"
              ? "text-emerald-600"
              : "text-indigo-600"
          }`}
        >
          {post.title}
        </div>
        <div className="w-1 h-1 rounded-full bg-neutral-300 " />
        <div>{post.data.author}</div>
        <div className="w-1 h-1 rounded-full bg-neutral-300" />
        <div>{getReadingTime(post.content!!)}</div>
        <div className="w-1 h-1 rounded-full bg-neutral-300" />
        <div>{getRelativeDate(post.data.date!!)}</div>
      </div>
      {/* Title */}
      <h1
        className={`font-semibold ${
          isPostHero ? "text-4xl" : "text-xl @md:text-2xl @lg:text-3xl"
        }`}
      >
        {post.data.title}
      </h1>
      {/* Description */}
      <p className="text-neutral-500 leading-normal">{post.data.description}</p>
    </div>
  );
};

export default PostCardContent;
