import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import TeX from '@matejmazur/react-katex';
import { MDXProvider } from '@mdx-js/react';

const components = {
  TeX: TeX,
};

export default function MDXContentWrapper(props) {
  return <MDXContent components={components}>{props.children}</MDXContent>;
}
