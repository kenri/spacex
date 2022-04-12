import { styled } from '@linaria/react'
import Card from 'components/Card'
import Link from 'components/Link'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLaunchSite } from 'store'
import { getLaunchSite, getLaunchSites } from 'store/selectors'
import { fetchLaunchesThunk } from 'store/thunks'
import { LaunchSite } from 'types'

const List = styled.div`
  display: flex;
  flex-direction: column;
`

export default function LaunchSiteList() {
  const dispatch = useDispatch()
  const sites = useSelector(getLaunchSites)
  const launchSite = useSelector(getLaunchSite)

  useEffect(() => {
    dispatch(fetchLaunchesThunk())
  }, [dispatch])

  const handleClick = (launchSite: LaunchSite) => () => {
    dispatch(setLaunchSite(launchSite))
  }

  return (
    <Card title='Launch Sites'>
      <List>
        {sites.map(site => (
          <Link
            key={site.id}
            onClick={handleClick(site)}
            text={site.name}
            selected={site.id === launchSite?.id}
          />
        ))}
      </List>
    </Card>
  )
}
