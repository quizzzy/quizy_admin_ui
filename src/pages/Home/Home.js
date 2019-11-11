import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

export default function Home({ checkToken, token, shouldAllowAuth }) {
    useEffect(() => {
        checkToken(token);
    });

    if (shouldAllowAuth) {
        return "HOME PAGE";
    }

    // if (!shouldAllowAuth) {
    //     return <Redirect to="/login" />;
    // }

    return null;
}
