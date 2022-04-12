import { styled } from '@linaria/react'

const Container = styled.a`
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-right: 24px;

  &:hover {
    color: #335eea;
  }
`

type Props = {
  onClick: () => void
  selected?: boolean
  text: string
}

export default function Button({ selected, text, ...props }: Props) {
  return (
    <Container
      style={{
        color: selected ? '#335eea' : '#506690',
      }}
      {...props}
    >
      {text}
    </Container>
  )
}
