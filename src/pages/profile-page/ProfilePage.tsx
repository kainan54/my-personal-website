import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './ProfilePage.scss';

const ProfilePage: React.FC<RouteComponentProps> = function () {
    return (
        <div className="profile-page">
            <div className="profile-card-1" />
        </div>
    );
};

export default ProfilePage;
