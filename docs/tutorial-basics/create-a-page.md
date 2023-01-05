---
sidebar_position: 1
---

import {MDXProvider} from '@mdx-js/react'
import TeX from '@matejmazur/react-katex';
import { InlineMath, BlockMath } from 'react-katex';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a Page

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

ds $x^2$
Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a<TeX math="(\dfrac{x^2}{x^2+y^2})'=\cos(\square)" /> banana 🍌
  </TabItem>
</Tabs>

---

TestCode: $\dfrac{x^2}{x^2+y^3}$

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is  <TeX math="(\sin(\square))'=\cos(\square)" />   the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>

  </div>
</details>

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
