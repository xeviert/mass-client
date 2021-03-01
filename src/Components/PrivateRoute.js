import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../AppContext";

export default function PrivateRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={(componentProps) => (
        <AppContext.Consumer>
          {(AppContext) =>
            !!AppContext.user.id ? (
              <Component {...componentProps} />
            ) : (
              <Redirect
                to={{
                  pathname: AppContext.user.idle ? "/login" : "/about",
                  state: { from: componentProps.location },
                }}
              />
            )
          }
        </AppContext.Consumer>
      )}
    />
  );
}
