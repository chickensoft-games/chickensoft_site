// This file was swizzled via
// npm run swizzle @docusaurus/theme-classic BlogPostItem -- --eject
//
// Reason for swizzle:
// Customize blog preview padding on home page for recent blogs preview.
//
// See https://docusaurus.io/docs/swizzling

import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import clsx from 'clsx';
import React from 'react';
// apply a bottom margin in list view
function useContainerClassName() {
  // Fix padding on home page by commenting this out.
  // const {isBlogPostPage} = useBlogPost();
  // return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}
export default function BlogPostItem({ children, className }) {
  const containerClassName = useContainerClassName();
  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
