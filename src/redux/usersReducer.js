const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: []
  //   {id:1, imgUrl:"https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg",followed: true, fullName:'Oleg', status:'I am a boss', location:{city: 'Kiev', country: 'Ukraine'}},
  //   {id:2, imgUrl:"https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg", followed: false, fullName:'John', status:'I am big boss', location:{city: 'Vinnitsia', country: 'Ukraine'}},
  //   {id:3, imgUrl:"https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg",followed: true, fullName:'Valentine', status:'I am a little boss', location:{city: 'Arizona', country: 'USA'}},
  // ],
};

const usersReducer = (state=initialState, action) =>{

  switch (action.type) {
      case FOLLOW:
        return{
          ...state,
          users: state.users.map((user) => {
            if(user.id === action.userId){
              return {...user, followed: true}
            }
            return user
          })
        };

      case UNFOLLOW:
        return{
          ...state,
          users: state.users.map((user) => {
            if(user.id === action.userId){
              return {...user, followed: false}
            }
            return user
          })
        };
      
      case SET_USERS:
        return {
          ...state,
          users: [...state.users, ...action.users],
        };

    default: return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId});
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });


export default usersReducer; 