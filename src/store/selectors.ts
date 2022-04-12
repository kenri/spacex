import { StoreState } from 'types'

export const getLaunchSites = (state: StoreState) => {
  const sites = state.launches.map(({ launchSite }) => launchSite)
  const set = new Set()
  return sites.filter(site => (set.has(site.id) ? false : set.add(site.id)))
}

export const getLaunchSite = (state: StoreState) => state.launchSite

export const getLaunchStatusBySite = (state: StoreState) => {
  if (!state.launchSite) return []

  const launches = state.launches.filter(
    launch => launch.launchSite.id === state.launchSite?.id
  )

  return [
    {
      name: 'Success',
      launches: launches.reduce(
        (acc, { launchSuccess }) => (launchSuccess ? acc + 1 : acc),
        0
      ),
    },
    {
      name: 'Fail',
      launches: launches.reduce(
        (acc, { launchSuccess }) => (launchSuccess ? acc : acc + 1),
        0
      ),
    },
  ]
}
