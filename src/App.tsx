import { styled } from '@linaria/react'
import LaunchSiteChart from 'components/LaunchSiteChart'
import LaunchSiteList from 'components/LaunchSiteList'

const Container = styled.div`
  padding: 20px;
`

const Content = styled.div`
  display: flex;
`

const Title = styled.h1`
  color: #161c2d;
`

function App() {
  return (
    <Container>
      <Title>SpaceX</Title>

      <Content>
        <LaunchSiteList />

        <LaunchSiteChart />
      </Content>
    </Container>
  )
}

export default App
