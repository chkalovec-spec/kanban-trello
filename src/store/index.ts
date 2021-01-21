import { combineReducers, createStore } from 'redux'
import { boards } from './Boards/reducers'

const rootReducer = combineReducers({ boards })
export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
;(window as any).store = store
