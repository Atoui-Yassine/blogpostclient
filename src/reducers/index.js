import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import allPostsReducer from "./allPosts.reducer";
import postReducer from "./post.reducer";
import usersReducer from "./users.reuducer";

export default combineReducers({
    userReducer,
    allPostsReducer,
    postReducer,
    usersReducer,
})