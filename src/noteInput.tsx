import React from 'react'
import { Card, Flex, Box, Inline, Heading, Text } from '@sanity/ui'
import { ObjectSchemaType, ObjectInputProps } from 'sanity'

type noteSchemaType = Omit<ObjectSchemaType, 'options'> & {
	options?: {
		icon?: any
		headline?: string
		message: any
		tone?: any
	}
}

interface noteInputValue {
	_type?: 'note'
}

type noteInputProps = ObjectInputProps<noteInputValue, noteSchemaType>

export const noteInput = React.forwardRef((args: noteInputProps, ref: any) => {
	const { options } = args.schemaType
	const icon = options?.icon
	const headline = options?.headline
	const message = options?.message
	const tone = options?.tone

	if (!message) return null

	const CustomIcon = icon

	return (
		<Card
			ref={ref}
			padding={[3, 3, 4]}
			radius={3}
			shadow={1}
			tone={tone || 'primary'}
		>
			{headline && (
				<Box marginBottom={3}>
					<Inline space={[1]}>
						{icon && <CustomIcon style={{ fontSize: 24 }} />}
						<Heading size={1}>{headline}</Heading>
					</Inline>
				</Box>
			)}

			<Flex>
				<Box style={{ flexShrink: 0 }}>
					{icon && !headline && <CustomIcon style={{ fontSize: 24 }} />}
				</Box>
				<Box marginLeft={!headline ? 3 : 0}>
					<Text size={[1, 1, 1]}>{message}</Text>
				</Box>
			</Flex>
		</Card>
	)
})