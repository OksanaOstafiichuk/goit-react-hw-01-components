import PropTypes from 'prop-types';
import FriendListItem from "../FriendListItem/FriendListItem";
import { List } from './FriendList.styled';

const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
               ))}
        </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        })
    )
};

export default FriendList;