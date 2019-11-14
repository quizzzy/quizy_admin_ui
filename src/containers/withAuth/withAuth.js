import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export default function withAuth(ComponentToProtect) {
	return props => {
		const { checkToken, token, shouldAllowAuth, shouldLogAgain } = props;

		useEffect(() => {
			checkToken(token || JSON.parse(localStorage.getItem('token')));
		}, [checkToken, token]);

		if (shouldLogAgain) {
			return <Redirect to={{ pathname: '/login' }} />;
		}

		if (shouldAllowAuth) {
			return (
				<>
					<ComponentToProtect {...props} />
				</>
			);
		}

		return null;
	};
}
