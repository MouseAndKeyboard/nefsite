import React from "react";
import Head from 'next/head'
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../utils/mdx";
import styles from "../../styles/Home.module.css";

const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <Head>
        <link rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css"
              integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn"
              crossorigin="anonymous" />
      </Head>
      <div className={styles.container}>
        <Component />
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
