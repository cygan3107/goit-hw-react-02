import css from "./FriendsItem.module.css";

export const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friend_box}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friend_name}>{name}</p>
      {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </div>
  );
};
