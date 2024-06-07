import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../AppContext";

export default function PrivateRoute({ element }) {
  const { user } = useContext(AppContext);
  if (user.id) {
    return element;
  }
  return (
    <Navigate
      to={{
        pathname: user.idle ? "/login" : "/about",
      }}
    />
  );
}
