import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface MenuState {
  isOpen: boolean
}

// Define the initial state using that type
const initialState: MenuState = {
  isOpen: false
}

export const menuSlice = createSlice({
  name: 'menu',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setOpen: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { setOpen } = menuSlice.actions

export default menuSlice.reducer