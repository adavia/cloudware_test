import React from 'react';
import { inject, observer } from 'mobx-react';
import { Filter } from 'styled-icons/boxicons-regular/Filter';
import { 
    GlobalStyle, 
    ColorLine, 
    NavWrapper,
    NavTotal,
    Container, 
    Sidebar, 
    Header, 
    Content 
} from './mainStyles';
import FilterColumns from './users/FilterColumns';
import UserList from './users/UserList';

@inject('uiStore', 'userStore')
@observer
class App extends React.Component {
    render() {
        const { uiStore, userStore } = this.props;

        return (
            <Container>
                <GlobalStyle />
                <Header>
                    <ColorLine />
                    <NavWrapper>    
                        <Filter 
                            size="30" 
                            onClick={uiStore.showSidebar}
                            style={{cursor: 'pointer'}} 
                            title="Filter user criteria" 
                        />
                        <NavTotal>
                            total results: {userStore.totalCount}
                        </NavTotal>
                    </NavWrapper>
                </Header>
                <Sidebar collapsed={uiStore.sidebar}>
                    <FilterColumns />
                </Sidebar>
                <Content>
                    <UserList />
                </Content>
                {uiStore.modal.body}
            </Container>
        );
    }
};

export default App;