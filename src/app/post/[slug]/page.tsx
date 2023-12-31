import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import React from "react";
import Markdown from "markdown-to-jsx";
// import Markdown from "react-markdown";

import CodeBlock from "@/components/code/code-block";
import CodeLine from "@/components/code/code-line";
import { getPostBySlug } from "@/lib/blog-api";
// import { NextSeo } from "next-seo";

// export const getStaticPaths = (): GetStaticPathsResult => {
//   const posts = getPostSlugs();
//   const paths = posts.map((postSlug: string) => {
//     return {
//       params: {
//         slug: postSlug.replace(".md", ""),
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = ({
//   params,
// }: GetStaticPropsContext): GetStaticPropsResult<BlogDetailsProps> => {
//   const slug = params?.slug ?? "";
//   const postDetails = getPostBySlug(slug.toString());

//   return {
//     props: {
//       title: postDetails.data.title,
//       date: postDetails.data.date,
//       description: postDetails.data.description,
//       slug: postDetails.slug,
//       content: postDetails.content,
//       tags: postDetails.data.tags,
//       banner: postDetails.data.banner,
//     },
//   };
// };

interface BlogDetailsProps {
  title: string;
  content: string;
  date: string;
  author: string;
  description: string;
  slug: string;
  tags: string[];
  banner: string;
}

interface BlogPostPageProps {
  params: { slug: string };
}

const BlogDetails = async ({ params: { slug } }: BlogPostPageProps) => {
  // const slugs = params?.slug ?? "";

  const postDetails = await getPostBySlug(slug?.toString());

  const res = {
    title: postDetails.data.title,
    date: postDetails.data.date,
    author: postDetails.data.author,
    description: postDetails.data.description,
    slug: postDetails.slug,
    content: postDetails.content,
    tags: postDetails.data.tags,
    banner: postDetails.data.banner,
  };
  return (
    <>
      {/* <NextSeo
        title={`${title} | ${process.env.NEXT_PUBLIC_OWNER_NAME}`}
        canonical={`${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}/${slug}`}
        description={description}
        openGraph={{
          title: `${title} | ${process.env.NEXT_PUBLIC_OWNER_NAME}`,
          url: `${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}/${slug}`,
          description: description,
          type: "article",
          article: {
            publishedTime: date,
            modifiedTime: date,
            expirationTime: date,
            section: "Technology",
            authors: [`${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}`],
            tags: tags,
          },
          images: [
            {
              url: banner,
              width: 800,
              height: 600,
              alt: title,
              type: "image/jpeg",
            },
            {
              url: banner,
              width: 900,
              height: 800,
              alt: title,
              type: "image/jpeg",
            },
          ],
          site_name: `${process.env.NEXT_PUBLIC_OWNER_NAME}'s Portfolio`,
        }}
      /> */}
      <div className="flex justify-center">
        <article className="break-normal px-6 md:px-0 my-10 prose md:prose-xl dark:prose-dark dark:md:prose-xl-dark">
          <Markdown
            options={{
              wrapper: "article",
              forceBlock: false,
              overrides: {
                pre: {
                  component: CodeBlock,
                },
                code: {
                  component: CodeLine,
                },
              },
            }}
          >
            {postDetails.content}
          </Markdown>
        </article>
      </div>
    </>
  );
};

export default BlogDetails;
