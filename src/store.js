import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/changeThemeSlice'


export const store = configureStore({
  reducer: {
     theme: themeReducer,
  },
})