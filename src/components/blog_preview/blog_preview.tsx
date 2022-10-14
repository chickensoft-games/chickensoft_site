import { PropBlogPostContent } from '@docusaurus/plugin-content-blog';
import { BlogPostProvider } from '@docusaurus/theme-common/internal';
import BlogPostItem from '@theme/BlogPostItem';
import React from 'react';

import css from './blog_preview.module.css';

type BlogPreviewProps = {
  BlogPostContent: PropBlogPostContent;
};

export default function BlogPreview(props: BlogPreviewProps): JSX.Element {
  return (
    <section className={css.blogPreview}>
      <BlogPostProvider
        key={props.BlogPostContent.metadata.permalink}
        content={props.BlogPostContent}
      >
        <BlogPostItem>
          <props.BlogPostContent />
        </BlogPostItem>
      </BlogPostProvider>
    </section>
  );
}
