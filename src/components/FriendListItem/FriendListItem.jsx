import PropTypes from 'prop-types';
import { Item, Avatar, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ friend }) => {
    return (
         <Item>
            <Status status={friend.isOnline}></Status>
            <Avatar src={friend.avatar} alt="User avatar" width="100" />
            <Name>{friend.name}</Name>
        </Item>
    )
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
};