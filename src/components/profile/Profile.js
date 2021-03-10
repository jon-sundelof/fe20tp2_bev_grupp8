import React from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import SignOutButton from '../sign-out/SignOut';

const Profile = () => {
    const history = useHistory();

    const redirect = () => {
        console.log('REDIRECT ME');
        history.push('/');
    };

    return (
        <>
            <h1>SIGN OUT</h1>

            <SignOutButton />
        </>
    );
};

export default Profile;
