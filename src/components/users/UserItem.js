import React from 'react';
import { inject, observer } from 'mobx-react';
import { Tr, Td } from '../mainStyles';
import UserAvatar from './UserAvatar';
import UserView from './UserView';

@inject('uiStore')
@observer
class UserItem extends React.Component {
    render() {
        const { user } = this.props;
        const { uiStore: { checkboxes, toggleModal } } = this.props;
        
        return (
            <Tr onClick={e => toggleModal(<UserView toggleModal={toggleModal} user={user} />)}>
                {checkboxes['user'] && <Td data-label="User"><UserAvatar user={user} /></Td>}
                {checkboxes['gender'] && <Td data-label="Gender">{user.gender}</Td>}
                {checkboxes['title'] && <Td data-label="Title">{user.name.title}</Td>}
                {checkboxes['name'] && <Td data-label="Name">{user.name.first} {user.name.last}</Td>}
                {checkboxes['email'] && <Td data-label="Email">{user.email}</Td>}
                {checkboxes['phone'] && <Td data-label="Phone">{user.phone}</Td>}
                {checkboxes['cell'] && <Td data-label="Cell">{user.cell}</Td>}
            </Tr>   
        );
    }
};

export default UserItem;