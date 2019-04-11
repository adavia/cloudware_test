import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components'; 
import { Close } from 'styled-icons/material/Close';
import { Envelope } from 'styled-icons/boxicons-regular/Envelope';
import { Phone } from 'styled-icons/boxicons-regular/Phone';
import { 
    ModalBackground, 
    Modal, 
    ModalClose
} from '../mainStyles';

@inject('userStore')
@observer
class UserView extends React.Component {
    render() {
        const { toggleModal, user } = this.props;
        
        return (
            <ModalBackground>
                <Modal>
                    <ModalClose onClick={e => toggleModal()}>
                        <Close 
                            size="20" 
                            title="Close" 
                        />
                    </ModalClose>
                    <ModalUserInfo>
                        <AvatarWrapper>
                            <Img src={user.picture.large} alt={user.login.username} />
                            <Info>
                                <Name>{user.name.first} {user.name.last}</Name>
                                <Username>{user.login.username}</Username>
                                <Email><Envelope size="20" /> {user.email}</Email>
                                <Telephone><Phone size="20" /> {user.phone}</Telephone>
                            </Info>
                        </AvatarWrapper>
                    </ModalUserInfo>
                    <Meta>
                        <Item>
                            <TextContent>
                                <Title>CITY</Title>
                                <Text>{user.location.city}</Text>
                            </TextContent>
                        </Item>
                        <Item>
                            <TextContent>
                                <Title>STREET</Title>
                                <Text>{user.location.street}</Text>
                            </TextContent>
                        </Item>
                        <Item>
                            <TextContent>
                                <Title>STATE</Title>
                                <Text>{user.location.state}</Text>
                            </TextContent>
                        </Item>
                    </Meta>
                </Modal>
            </ModalBackground>
        );
    }
};

const ModalUserInfo = styled.div`
    padding: 1rem;
`

const AvatarWrapper = styled.div`
    display: flex;
`

const Img = styled.img`
    border-radius: 3px;
`;

const Info = styled.div`
    margin: 3px 0 0 15px;
`;

const Name = styled.span`
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    font-size: 2rem;
`;

const Username = styled.span`
    display: block;
    margin-top: 8px;
    color: #222;
`;

const Email = styled.span`
    display: block;
    margin-top: 8px;
    color: #222;
`;

const Telephone = styled.span`
    display: block;
    margin-top: 5px;
    color: #222;
`;

const Meta = styled.div`
    background: #F6F6F6;
    height: 100%;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
`;

const Item = styled.div`
    border-bottom: 1px solid #c0c0c0;
    &:last-child {
        border-bottom: none;
    }
`;

const TextContent = styled.div`
    padding: 1.5rem 1rem;
`;

const Title = styled.h5`
    margin: 0 0 10px 0;
    padding: 0;
`;

const Text = styled.span``;

export default UserView;