import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile_box}>
      <div className={css.info_box}>
        <img className={css.profile_image} src={image} alt="User avatar" />
        <p className={css.username}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item_border}>
          <span>Followers</span>
          <span className={css.item_bold}>{stats.followers}</span>
        </li>
        <li className={css.item_border}>
          <span>Views</span>
          <span className={css.item_bold}>{stats.views}</span>
        </li>
        <li className={css.item_border}>
          <span>Likes</span>
          <span className={css.item_bold}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
