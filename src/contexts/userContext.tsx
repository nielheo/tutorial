import * as React from "react";

const UserContext = React.createContext({
  setUser: null,
  user: null
});

export default UserContext;
