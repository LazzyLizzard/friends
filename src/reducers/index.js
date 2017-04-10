import { combineReducers } from 'redux'
import friends from './friends'

const friendsApp = combineReducers({
    friends,
    //visibilityFilter
});


export default friendsApp;
