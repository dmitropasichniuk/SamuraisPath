import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import { followAC, troggleIsFetchingAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/preloader";
// import preloader from "../../assets/images/preloader.svg"

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.troggleIsFetching(true); 
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.troggleIsFetching(false); 
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.troggleIsFetching(true); 
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.troggleIsFetching(false); 
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : null} 
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetching={this.props.isFetching}
        />
      </>
    );
  }
}

let mapStateToProps = (state)=> {

  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
}

let mapDispatchToProps = (dispatch)=> {
  return{
    follow: (userId) => {
      dispatch(followAC(userId))
    },

    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },

    setCurrentPage: (pageNumber) =>{
      dispatch(setCurrentPageAC(pageNumber))
    },

    setTotalUsersCount: (totalCount) =>{
      dispatch(setTotalUsersCountAC(totalCount)) 
    },

    troggleIsFetching: (value) =>{
      dispatch(troggleIsFetchingAC(value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
