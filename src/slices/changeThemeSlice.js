import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 0,
}

export const changeThemeSlice = createSlice({
  name: 'changeTheme',
  initialState,
  reducers: {
    themeIndex: (state, actions) => {
     state.value = actions.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { themeIndex } = changeThemeSlice.actions

export default changeThemeSlice.reducer