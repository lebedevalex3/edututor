import React from 'react';
import Layout from '@theme/Layout';
import TeX from '@matejmazur/react-katex';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
      ReactDOM.render(
      <TeX>\int_0^\infty x^2 dx</TeX>, document.getElementById('math') );
    </Layout>
  );
}
