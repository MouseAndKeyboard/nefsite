import React, {useMemo} from 'react'
import {getMDXComponent} from 'mdx-bundler/client'


const Post = ({ code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className={styles.container}>
      <Component />
    </div>
  );
};

const getCompiledMDX = async (content: string) => {
  // Add your remark and rehype plugins here
  const remarkPlugins = [];
  const rehypePlugins = [];

  try {
    return await bundleMDX(content, {
      xdmOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          ...remarkPlugins,
        ];
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          ...rehypePlugins,
        ];

        return options;
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
