import React from 'react';
import Users from './users';
import { getPageWithUsers } from './api/api';
import { connect } from "react-redux";
import { follow, unFollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, getUsersThunkCreator } from "../../redux/users-reducer";
import Preloader from '../../common/preloader/preloader';
import { getIsFetchingSelector, getCurrentPageSelector,
getPageSizeSelector, getTotalUsersCoundSelector, getUsersSelectorSuper } from '../../redux/selectors';



class UsersContainerComponent extends React.Component {
  componentDidMount() {
    
    this.props.getUsersThunkCreator()
    
    // this.props.toggleIsFetching(true)
    // getUsers(this.props.currentPage, this.props.pageSize).then(response => {
    //   this.props.setUsers(response.items);
    //   this.props.toggleIsFetching(false)
    //   this.props.setUsersTotalCount(response.totalCount)
    // })
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber);
    getPageWithUsers(pageNumber, this.props.pageSize)
    .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.items)
      })
  }

  render() {

    return <>
    {this.props.isFetching ? <Preloader/> : null}
    <Users 
      totalUsersCound={this.props.totalUsersCound}
      pageSize={this.props.pageSize}
      onPageChanged={this.onPageChanged}
      unFollow={this.props.unFollow}
      follow={this.props.follow}
      users={this.props.users}
      isFetching={this.props.isFetching}
      currentPage={this.props.currentPage}
       />
       </>
  }
}

// const mapStateToProps = (state) => {
//   return {
//     isFetching: state.usersPage.isFetching,
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCound: state.usersPage.totalUsersCound,
//     currentPage: state.usersPage.currentPage,

//   }
// }

const mapStateToProps = (state) => {
  return {
    isFetching: getIsFetchingSelector(state),
    users: getUsersSelectorSuper(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCound: getTotalUsersCoundSelector(state),
    currentPage: getCurrentPageSelector(state),

  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: userID => {
//       dispatch(follow(userID))
//     },
//     unFollow: userID => {
//       dispatch(unFollow(userID))
//     },
//     setUsers: users => {
//       dispatch(setUsers(users))
//     },
//     setCurrentPage: pageNumber => {
//       dispatch(setCurrentPage(pageNumber))
//     },
//     setTotalUsersCount: totalCount => {
//       dispatch(setUsersTotalCount(totalCount))
//     },
//     toggleIsFetching: isFetching => {
//       dispatch(toggleIsFetching(isFetching))
//     }
//   }
// }


export default connect(mapStateToProps, 
  {follow, unFollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, getUsersThunkCreator})(UsersContainerComponent);