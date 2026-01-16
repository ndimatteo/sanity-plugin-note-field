import React from 'react'
import startCase from 'lodash/startCase'
import { Card, Flex, Box, Text } from '@sanity/ui'
import { styled } from 'styled-components'

import type { noteInputProps } from './types'

const NoteInput = React.forwardRef((args: noteInputProps, ref: any) => {
  const { title, description, options } = args.schemaType

  // get last item in args.path array
  const pathId = args.path[args.path?.length - 1] as any as string

  const displayTitle = startCase(pathId) === title ? null : title
  const icon = options?.icon
  const tone = options?.tone ?? 'primary'

  // bail if nothing was set
  if (!displayTitle && !description) return null

  const CustomIcon = icon as React.ElementType

  return (
    <Card ref={ref} padding={4} radius={2} tone={tone}>
      <Flex>
        {icon && (
          <Box>
            <IconWrapper size={1}>
              <CustomIcon />
            </IconWrapper>
          </Box>
        )}
        <Box flex={1} marginLeft={icon ? 3 : 0}>
          {displayTitle && (
            <Box marginBottom={description ? 3 : 0}>
              <Text size={1} weight="medium">
                {displayTitle}
              </Text>
            </Box>
          )}

          {description && (
            <Text size={1} muted>
              {description}
            </Text>
          )}
        </Box>
      </Flex>
    </Card>
  )
})

const IconWrapper = styled(Text)`
  color: var(--card-icon-color);
`

NoteInput.displayName = 'NoteInput'

export default NoteInput
