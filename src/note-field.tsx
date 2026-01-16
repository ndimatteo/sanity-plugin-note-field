import { definePlugin, defineType } from 'sanity'

import NoteInput from './note-input'

export const noteField = definePlugin(() => {
  return {
    name: 'sanity-plugin-note-field',
    schema: {
      types: [
        defineType({
          name: 'note',
          type: 'object',
          fields: [
            {
              name: 'value',
              type: 'string',
            },
          ],
          components: {
            input: NoteInput,
            field: (props) => <>{props.children}</>,
          },
        }),
      ],
    },
  }
})
