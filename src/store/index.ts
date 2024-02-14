import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import persistedReducer from './rootReducer'

const store = configureStore({
  reducer: persistedReducer
})

const makeStore = () => store

type AppStore = ReturnType<typeof makeStore>
type AppDispatch = AppStore['dispatch']
type RootState = ReturnType<AppStore['getState']>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
