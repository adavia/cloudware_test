import React from 'react';
import { Wrapper, Img, Info, Username, Age } from './userStyles';

const UserAvatar = ({ user }) => {
    return (
        <Wrapper>
            <Img src={user.picture.thumbnail} alt={user.login.username} />
            <Info>
                <Username>{user.login.username}</Username>
                <Age>age: {user.dob.age}</Age>
            </Info>
        </Wrapper>
    );
};

export default UserAvatar;