import { noteInput } from './noteInput'
import { defineType } from 'sanity'

export default defineType({
	name: 'note',
	type: 'string',
	title: 'Note',
	components: { input: noteInput },
})