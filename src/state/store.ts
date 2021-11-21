import { configureStore } from '@reduxjs/toolkit'
import producSlice from './slices/productSlices'

const store = configureStore({
  reducer: {
    productReducer: producSlice,
  },
})

export default store
