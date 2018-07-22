import * as React from "react";
import UserType from "../types/userType";

const UserContext = React.createContext({
  resetUser: () => {
    let user;
    user = user;
  },
  setUser: (newUser: UserType | null) => {
    newUser = null;
  },

  user: null
});

export default UserContext;
