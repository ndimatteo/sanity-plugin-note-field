import { createPlugin } from 'sanity'
import schema from './schema'

export const note = createPlugin({
	name: 'note-field',
	schema: { types: [schema] },
})