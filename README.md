<h3 align="center">
  Note Fields for Sanity
</h3>
<p align="center">
  <strong>Display inline notes within your schemas</strong><br />
✨ uses Sanity UI ✨ multiple styles ✨ dark mode compatible ✨
</p>

![note-field-v3](https://user-images.githubusercontent.com/737188/219781860-0e43a189-3fce-48e6-8440-f70908deba54.png)

<br />

## 🔌 Install

```sh
yarn add sanity-plugin-note-field
# or npm
npm i sanity-plugin-note-field
```

> **Warning** <br />This is a **Sanity Studio V3** plugin. For the V2 version, please refer to the [studio-v2 branch](https://github.com/ndimatteo/sanity-plugin-note-field/tree/studio-v2).

<br />

## ⚙️ Configure

```ts
// `sanity.config.ts` / `sanity.config.js`:
import { defineConfig } from 'sanity'
import { noteField } from 'sanity-plugin-note-field'

export default defineConfig({
  // ...
  plugins: [
    // ...
    noteField(),
  ],
})
```

<br />

## 🗒️ Usage

```js
defineField({
  title: 'Important!',
  description: 'a custom Message...',
  name: 'myCustomNote',
  type: 'note',
  options: {
    icon: () => <Warning size={20} weight="duotone" />,
    tone: 'caution',
  },
})
```

### Properties
| Name          | Type                      | Description                                                                  |
| --------      | ------------------------- | ---------------------------------------------------------------------------- | 
| `type`        | string                    | **(Required)** Value must be set to `note`.                                  |
| `name`        | string                    | **(Required)** The field name. This will be the key in the data record.      |
| `title`       | string                    | **(Optional)** Short title, appears in bold above the optional description.  |
| `description` | string / React.Component  | **(Optional)** Long form message, displayed under the title.                 |

### Options
| Name          | Type                  | Description                                                                  |
| --------      | --------------------- | ---------------------------------------------------------------------------- | 
| `icon`        | React.Component       | **(Optional)** Display an icon alongside your note's title/message. <br />*Just remember that any schema file with icons in them should have a .jsx or .tsx extension.*                             |
| `tone`        | string                | **(Optional)** The color of the note. <br />*Accepts any of the [Sanity UI Card](https://www.sanity.io/ui/docs/primitive/card#properties) tone values. Defaults to `primary`.*     |

<br />

## 🧪 Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.

<br />

## 🤝 License

### MIT

> [nickdimatteo.com](https://nickdimatteo.com) &nbsp;&middot;&nbsp;
> Github [@ndimatteo](https://github.com/ndimatteo) &nbsp;&middot;&nbsp;
> Instagram [@ndimatteo](https://instagram.com/ndimatteo)
