import { noteInput } from './noteInput'
import { defineType } from 'sanity'
import React from 'react'

export default defineType({
	name: 'note',
	type: 'string',
	title: 'Note',
	components: {
		input: noteInput,
		field: (props) => <div>{props.children}</div>
},
})