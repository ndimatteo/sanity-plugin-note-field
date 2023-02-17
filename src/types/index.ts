import React from 'react'
import { ObjectSchemaType, ObjectInputProps } from 'sanity'

export type ThemeColorToneKey =
  | 'default'
  | 'transparent'
  | 'primary'
  | 'positive'
  | 'caution'
  | 'critical'

export type noteSchemaType = Omit<ObjectSchemaType, 'options'> & {
  options?: {
    icon?: React.ReactNode
    headline?: string
    message: any
    tone?: ThemeColorToneKey
  }
}

export interface noteInputValue {
  _type?: 'note'
}

export type noteInputProps = ObjectInputProps<noteInputValue, noteSchemaType>
