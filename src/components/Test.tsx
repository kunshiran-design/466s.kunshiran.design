import type { ElementType, ReactNode } from 'react'

export type TestProps = {
  as?: ElementType
  children: ReactNode
}

const Test = ({ as: Tag = 'div', children }: TestProps) => {
  return <Tag>{children}</Tag>
}

export default Test
