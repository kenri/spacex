import { gql } from '@apollo/client'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Launch, LaunchResponse } from 'types'
import client from './client'

export const fetchLaunchesThunk = createAsyncThunk<Launch[]>(
  'Store/fetchLaunchesThunk',
  async () => {
    const { data } = await client.query<LaunchResponse>({
      query: gql`
        query GetLaunchSites {
          launches {
            launch_success
            launch_site {
              site_id
              site_name
            }
          }
        }
      `,
    })

    return data.launches.map(({ launch_success, launch_site }) => ({
      launchSuccess: Boolean(launch_success),
      launchSite: {
        id: launch_site.site_id,
        name: launch_site.site_name,
      },
    }))
  }
)
