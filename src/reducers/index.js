import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import { combineReducers } from "redux";
import messages from "./messages";

export default combineReducers({
  user,
  messages,
  contacts,
  activeUserId
});
