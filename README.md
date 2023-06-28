This repo demonstrates how you could manage a library of components, or even a whole application, outside of Primo & consume them from within Primo. This allows you to do the heavy lifting of managing your components and app logic from the comfort of VSCode, while enabling page building and content editing from Primo. Your components are bundled and deployed to a repo, from which you import your components from Primo

From a Primo block's HTML:
`<div bind:this={el}></div>`

And JS:
```
import { Tester } from "https://raw.githubusercontent.com/mateomorris/primo-components/master/build/myapp.js";

let el;
$: if (el) {
  new Tester({
    target: el,
    props: {
      foo,
    },
  });
}
```

Or for smaller components: 

JS: `import { Tester } from "https://raw.githubusercontent.com/mateomorris/primo-components/master/dist/Heading.svelte";`

HTML: `<Tester />`

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```


## Building

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```
