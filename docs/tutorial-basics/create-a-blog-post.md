---
sidebar_position: 3
---

import { InlineMath, BlockMath } from 'react-katex';
import TeX from "@matejmazur/react-katex";

# Create a Blog Post

Docusaurus <InlineMath math="\\int_0^\\infty x^2 dx"/> creates a **page for each blog post**, but also a **blog index page**, a **tag system**, an **RSS** feed...

## Create your first Post

Create a file at `blog/2021-02-28-greetings.md`:

fdfdfdfd
<TeX math="(\sin(\square))'=\cos(\square)" />

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much you like.
```

:::note Замечание

Some $x^2$ with _Markdown_ `syntax`. Check [this `api`](#).

:::

A new blog post is now available at [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings).
