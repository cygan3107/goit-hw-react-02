import css from "./FriendsList.module.css";
import { FriendsItem } from "../FriendsItem/FriendsItem";

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friends_list}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendsItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};
