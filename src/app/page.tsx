import { TypeBlogDetails } from "../types/TypeBlogDetails";
import { getAllPosts } from "../lib/blog-api";

import BlogPreview from "../components/blog-preview/BlogPreview";
// import PaddingContainer from "@/components/layout/paddingContainer";

import CtaCard from "@/components/elements/ctaCard";
import PaddingContainer from "@/components/layout/paddingContainer";
import PostCard from "@/components/post/postCard";
import PostCardList from "@/components/post/postCardList";
// import getAllPosts from "@/lib/getAllPosts";
import { notFound } from "next/navigation";

interface Props {
  children?: React.ReactNode;
}
{
  /* {postList.map((blogItem: TypeBlogDetails) => (
  <BlogPreview
    key={blogItem.slug}
    slug={blogItem.slug}
    title={blogItem.data.title}
    description={blogItem.data.description}
    imageUrl={blogItem.data.banner}
    tags={blogItem.data.tags}
    date={blogItem.data.date}
  />
))} */
}

export default async function Home(props: Props) {
  const posts: TypeBlogDetails[] = await getAllPosts();

  return (
    // <div className="flex flex-wrap p-5 gap-5 justify-evenly">
    <PaddingContainer>
      <main className="space-y-10">
        <PostCard direction="horizontal" post={posts[0]} />
        <PostCardList posts={[posts[1], posts[2]]} />
        {/* CTA */}
        <CtaCard />
        <PostCard reverse direction="horizontal" post={posts[3]} />
        <PostCardList posts={[posts[4], posts[5]]} />
        {/* {posts.map((blogItem: TypeBlogDetails) => (
          <BlogPreview
            key={blogItem.slug}
            slug={blogItem.slug}
            title={blogItem.data.title}
            description={blogItem.data.description}
            imageUrl={blogItem.data.banner}
            tags={blogItem.data.tags}
            date={blogItem.data.date}
          />
        ))} */}
      </main>
    </PaddingContainer>
  );
}

// </div>
