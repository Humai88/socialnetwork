import styles from "./Users.module.scss";
import { Avatar } from "../UI/Avatar/Avatar";
import { Button } from "../UI/Button/Button";
import { NavLink } from "react-router-dom";
import { Pagination } from "@material-ui/lab";
import { UserType } from "../../api/api";

export const Users: React.FC<UserPropsType> = (props) => {
  const {
    totalUsersCout,
    pageSize,
    onChangePageHandler,
    users,
    follow,
    unfollow,
    followingInProgress,
  } = props;

  let pagesCount = Math.ceil(totalUsersCout / pageSize);
  let pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.mainWrapper}>
      <Pagination
        className={styles.pagination}
        count={pagesCount}
        shape="rounded"
        hidePrevButton
        hideNextButton
        onChange={(e: any) => {
          const value = e.currentTarget.textContent;
          onChangePageHandler(+value);
        }}
      />
      {/* {pages.map((p, i) => {
          return (
            <span
              key={i}
              className={currentPage === p ? styles.selectedPage : ""}
              onClick={() => {
                onChangePageHandler(p);
              }}
            >
              {p}
            </span>
          );
        })} */}
      <div className={styles.usersContainer}>
        {users.map((u) => {
          const onFollowHandler = () => {
            follow(u.id);
          };
          const onUnfollowHandler = () => {
            unfollow(u.id);
          };
          return (
            <div key={u.id} className={styles.wrapper}>
              <span className={styles.avatarWrapper}>
                <NavLink to={"/profile/" + u.id}>
                  <Avatar
                    src={
                      u.photos.small != null
                        ? u.photos.small
                        : "https://image.flaticon.com/icons/png/512/1077/1077275.png"
                    }
                    className={styles.img}
                  />
                </NavLink>
                <div>
                  {u.followed ? (
                    <Button
                      disabled={followingInProgress.some((id) => id === u.id)}
                      onClick={onUnfollowHandler}
                      className={styles.btn}
                    >
                      unfollow
                    </Button>
                  ) : (
                    <Button
                      disabled={followingInProgress.some((id) => id === u.id)}
                      onClick={onFollowHandler}
                      className={styles.btn}
                    >
                      follow
                    </Button>
                  )}
                </div>
              </span>
              <span className={styles.infoWrapper}>
                <p className={styles.name}>{u.name}</p>
                <p className={styles.status}>{u.status}</p>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Types
type UserPropsType = {
  totalUsersCout: number;
  pageSize: number;
  users: UserType[];
  followingInProgress: Array<number>;
  onChangePageHandler: (p: number) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};
export type CreateFollowResponseType = {
  data: { resultCode: number; messages: string[]; data: {} };
};
