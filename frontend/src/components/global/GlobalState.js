import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext"

export default function GlobalState(props) {
  const [currentUser, setCurrentUser] = useState({})

  const values = {
    currentUser,
    setCurrentUser,
  }

  const Provider = GlobalContext.Provider

  return <Provider value={values}>{props.children}</Provider>
}