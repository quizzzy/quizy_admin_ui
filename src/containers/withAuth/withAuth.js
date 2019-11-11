import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

export default function withAuth(ComponentToProtect) {
    return props => {
        const { checkToken, token, shouldAllowAuth } = props;

        useEffect(() => {
            checkToken(token);
        });

        if (!shouldAllowAuth) {
            return <Redirect to="/login" />;
        }

        return (
            <>
                <ComponentToProtect {...props} />
            </>
        );
    };
}
