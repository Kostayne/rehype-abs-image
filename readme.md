# Rehype absolute image src
Rehype plugin to convert relative image src in absolute. It may be useful for web scrappers, as an example: readme files from npmjs and github.

## Install
```
npm i rehype-abs-image
```

## Usage
Let's create a simple script, that will take test.md and transform it into out.html.

``` ts
import fs from 'fs/promises';
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypeAbsImage from "../src/index.js";
import path from 'path';

// your unified plugins
const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)

    // it's necessary to set prefix here
    .use(rehypeAbsImage, { prefix: 'https://github.com' })
    .use(rehypeStringify);

const asyncWrapper = async () => {
    // read input file
    const mdPath = path.resolve('./example/test.md');
    const origFile = await fs.readFile(mdPath);

    // transform
    const output = await processor.process(origFile);

    // write output
    const outPath = path.resolve('./test_dist/out.html');
    await fs.writeFile(outPath, output.value);
};

asyncWrapper();
```

## Result
Input (test.md)
``` md
# Headline One

## Headline two

Some text here

<img src="https://domain.com/img.png">
<img src="relative.png" />
<img src="/relative2.png" />
```

Output (out.html)
``` html
<h1>Headline One</h1>
<h2>Headline two</h2>
<p>Some text here</p>
<img src="https://domain.com/img.png">
<img src="https://github.com/relative.png">
<img src="https://github.com/relative2.png">
```