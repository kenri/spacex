import { styled } from '@linaria/react'

const Container = styled.div`
  background-color: #fff;
  border: 0 solid #f1f4f8;
  border-radius: 15px;
  box-shadow: 0 1.5rem 4rem rgba(22, 28, 45, 0.05);
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  min-width: 250px;
  padding: 20px;
`

const Title = styled.h3`
  color: #161c2d;
`

type Props = {
  children: React.ReactNode
  title: string
}

export default function Card({ title, children }: Props) {
  return (
    <Container>
      <Title>{title}</Title>

      {children}
    </Container>
  )
}
