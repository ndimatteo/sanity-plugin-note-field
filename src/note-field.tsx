import { definePlugin, defineType } from 'sanity'

import NoteInput from './note-input'

export const noteField = definePlugin(() => {
  return {
    name: 'sanity-plugin-note-field',
    schema: {
      types: [
        defineType({
          title: 'Note',
          name: 'note',
          type: 'string',
          components: {
            input: NoteInput,
            field: (props) => <>{props.children}</>,
          },
        }),
      ],
    },
  }
})
