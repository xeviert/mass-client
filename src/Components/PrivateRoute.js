import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AppContext from '../AppContext'

export default function PrivateRoute({ component, ...props}) {
    const Component = component
    return (
        <Route
            {...props}
            render={componentProps => (
                <AppContext.Consumer>
                    {userContext =>
                        !!userContext.user.Redirect
                            ? <Component {...componentProps} />
                            : (
                                <Redirect
                                    to={{
                                        pathname: userContext.user.idle ? '/login' : '/register',
                                        state: { from: componentProps.location },
                                    }}
                                />
                            )}
                </AppContext.Consumer>
            )}
        />
    )
}
