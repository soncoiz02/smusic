import { combineReducers } from 'redux'
import songReducers from './song'
import userReducers from './user'
const rootReducers = combineReducers({
    songs: songReducers,
    users: userReducers
})

export default rootReducers