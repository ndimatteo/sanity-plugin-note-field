import React from 'react'
import { Card, Flex, Box, Inline, Heading, Text } from '@sanity/ui'

const NoteField = React.forwardRef(({ type }, ref) => {
  const { options } = type
  const { icon, headline, message, tone } = options

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

export default NoteField
