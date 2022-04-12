import { configureStore, createSlice } from '@reduxjs/toolkit'
import { fetchLaunchesThunk } from 'store/thunks'
import { AsyncStatus, StoreState } from 'types'

const initialState = {
  launches: [],
  launchSite: undefined,
  status: AsyncStatus.idle,
  error: undefined,
} as StoreState

export const slice = createSlice({
  name: 'Store',
  initialState,
  reducers: {
    setLaunchSite(state, { payload }) {
      state.launchSite = payload
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchLaunchesThunk.pending, state => {
        state.status = AsyncStatus.pending
      })
      .addCase(fetchLaunchesThunk.fulfilled, (state, { payload: launches }) => {
        state.launches = launches

        if (launches.length > 0) state.launchSite = launches[0].launchSite

        state.status = AsyncStatus.resolved
      })
      .addCase(fetchLaunchesThunk.rejected, (state, { error }) => {
        state.error = error
        state.status = AsyncStatus.rejected
      }),
})

export const { setLaunchSite } = slice.actions

export const store = configureStore({
  reducer: slice.reducer,
})
