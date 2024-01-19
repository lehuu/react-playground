# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## 📚 Which Emoji to Use for the commit messages?

| Commit Type            | Emoji                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| Initial Commit         | [🎉 Party Popper](http://emojipedia.org/party-popper/)                                         |
| Version Tag            | [🔖 Bookmark](http://emojipedia.org/bookmark/)                                                 |
| New Feature            | [✨ Sparkles](http://emojipedia.org/sparkles/)                                                 |
| Bugfix                 | [🐛 Bug](http://emojipedia.org/bug/)                                                           |
| Security Fix           | [🔒 Lock](https://emojipedia.org/lock/)                                                        |
| Metadata               | [📇 Card Index](http://emojipedia.org/card-index/)                                             |
| Refactoring            | [♻️ Black Universal Recycling Symbol](http://emojipedia.org/black-universal-recycling-symbol/) |
| Documentation          | [📚 Books](http://emojipedia.org/books/)                                                       |
| Internationalization   | [🌐 Globe With Meridians](http://emojipedia.org/globe-with-meridians/)                         |
| Accessibility          | [♿ Wheelchair](https://emojipedia.org/wheelchair-symbol/)                                     |
| Performance            | [🐎 Horse](http://emojipedia.org/horse/)                                                       |
| Cosmetic               | [🎨 Artist Palette](http://emojipedia.org/artist-palette/)                                     |
| Tooling                | [🔧 Wrench](http://emojipedia.org/wrench/)                                                     |
| Tests                  | [🚨 Police Cars Revolving Light](http://emojipedia.org/police-cars-revolving-light/)           |
| Deprecation            | [💩 Pile of Poo](http://emojipedia.org/pile-of-poo/)                                           |
| Removal                | [🗑️ Wastebasket](http://emojipedia.org/wastebasket/)                                           |
| Work In Progress (WIP) | [🚧 Construction Sign](http://emojipedia.org/construction-sign/)                               |