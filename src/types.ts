import { SerializedError } from '@reduxjs/toolkit'

export enum AsyncStatus {
  idle,
  pending,
  resolved,
  rejected,
}

export type LaunchResponse = {
  launches: [
    {
      launch_success: boolean | null
      launch_site: {
        site_id: string
        site_name: string
      }
    }
  ]
}

export type Launch = {
  launchSuccess: boolean
  launchSite: LaunchSite
}

export type LaunchSite = {
  id: string
  name: string
}

export type StoreState = {
  launches: Launch[]
  launchSite: LaunchSite | undefined
  status: AsyncStatus
  error: SerializedError | undefined
}
