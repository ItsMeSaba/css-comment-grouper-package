css-comment-grouper will group css properties by categories using comments.

Installation
---

NPM:

    npm install css-comment-grouper


Import
---

```js
import { groupCSS } from 'css-comment-grouper';
```


Usage
---

```js
import { groupCSS } from 'css-comment-grouper';

groupCSS(`.box {
    display: flex;
    font-size: 20px;
    width: 50px;
}`)

//  output: .box {
//      /* display and visibility */
//      display: flex;
// 
//      /* box model */
//      width: 50px;
// 
//      /* typography */
//      font-size: 20px;
//  }

```

CLI Command
---

css-comment-grouper

    groupcss [options] [rootDir]
