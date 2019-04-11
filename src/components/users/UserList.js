import React from 'react';
import { inject, observer } from 'mobx-react';
import { Loader } from 'styled-icons/feather/Loader';
import { Table, Thead, Tr, Th, Tbody, LoaderWrapper } from '../mainStyles';
import UserItem from './UserItem';

@inject('userStore', 'uiStore')
@observer
class UserList extends React.Component {
    componentDidMount() {
        const { userStore } = this.props;
        userStore.fetchUsers();
    }

    render() {
        const { userStore, uiStore } = this.props;
        
        return (
            <React.Fragment>
                <Table>
                    <Thead>
                        <Tr>
                            {uiStore.OPTIONS.map(option => (
                                uiStore.checkboxes[option] && <Th scope="col" key={option}>{option}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {!userStore.isEmpty && userStore.status === 'completed' &&
                            userStore.results.map((user) => (
                                <UserItem key={user.login.uuid} user={user} />
                            )
                        )}
                    </Tbody>
                </Table> 
                {userStore.isEmpty && userStore.status === 'pending' &&
                    <LoaderWrapper><Loader size="40" /></LoaderWrapper>
                }     
            </React.Fragment>    
        );  
    }
};

export default UserList;