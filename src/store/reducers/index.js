import user from "./user";
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({ user: user });

export default rootReducer;
