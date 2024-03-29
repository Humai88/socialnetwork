import { followAPI, usersAPI, UserType } from "../api/api";
import { ThunkType } from "./reduxStore";

const initialState: UsersPageType = {
  users: [],
  pageSize: 8,
  totalUsersCout: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

export const usersReducer = (
  state = initialState,
  action: ActionUsersTypes
): UsersPageType => {
  switch (action.type) {
    case "users/FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case "users/UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case "users/SET_USERS":
      return {
        ...state,
        users: action.payload.users,
      };
    case "users/SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload.currentPage,
      };

    case "users/SET_TOTAL_COUNT":
      return {
        ...state,
        totalUsersCout: action.payload.totalCount,
      };
    case "users/TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };
    case "users/TOGGLE_FOLLOWING_PROGRESS":
      return {
        ...state,
        followingInProgress: action.payload.isFetching
          ? [...state.followingInProgress, action.payload.userId]
          : [
              ...state.followingInProgress.filter(
                (id) => id !== action.payload.userId
              ),
            ],
      };
    default:
      return state;
  }
};

// Action Creators
export const followAC = (userId: number) => {
  return {
    type: "users/FOLLOW",
    payload: {
      userId,
    },
  } as const;
};

export const unfollowAC = (userId: number) => {
  return {
    type: "users/UNFOLLOW",
    payload: {
      userId,
    },
  } as const;
};

export const setUsersAC = (users: UserType[]) => {
  return {
    type: "users/SET_USERS",
    payload: {
      users,
    },
  } as const;
};

export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: "users/SET_CURRENT_PAGE",
    payload: {
      currentPage,
    },
  } as const;
};

export const setTotalUsersCountAC = (totalCount: number) => {
  return {
    type: "users/SET_TOTAL_COUNT",
    payload: {
      totalCount,
    },
  } as const;
};

export const toggleIsFetchingAC = (isFetching: boolean) => {
  return {
    type: "users/TOGGLE_IS_FETCHING",
    payload: {
      isFetching,
    },
  } as const;
};
export const toggleFollowingProgressAC = (
  isFetching: boolean,
  userId: number
) => {
  return {
    type: "users/TOGGLE_FOLLOWING_PROGRESS",
    payload: {
      isFetching,
      userId,
    },
  } as const;
};

// Thunks
export const getUsersThunkCreator = (
  currentPage: number,
  pageSize: number
): ThunkType => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetchingAC(false));
      dispatch(setUsersAC(data.items));
      dispatch(setTotalUsersCountAC(data.totalCount));
    });
  };
};

export const followThunkCreator = (id: number): ThunkType => {
  return (dispatch) => {
    dispatch(toggleFollowingProgressAC(true, id));
    followAPI.setFollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followAC(id));
      }
      dispatch(toggleFollowingProgressAC(false, id));
    });
  };
};
export const unfollowThunkCreator = (id: number): ThunkType => {
  return (dispatch) => {
    dispatch(toggleFollowingProgressAC(true, id));
    followAPI.setUnfollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowAC(id));
      }
      dispatch(toggleFollowingProgressAC(false, id));
    });
  };
};

// Types
export type UsersPageType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCout: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};

export type ActionUsersTypes =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof toggleIsFetchingAC>
  | ReturnType<typeof toggleFollowingProgressAC>;
