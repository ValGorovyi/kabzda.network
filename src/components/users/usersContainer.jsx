import React from 'react';
import Users from './users';
import { connect } from "react-redux";
import { setCurrentPage, getUsersThunkCreator } from "../../redux/users-reducer";
import Preloader from '../../common/preloader/preloader';
import {
  getIsFetchingSelector, getCurrentPageSelector,
  getPageSizeSelector, getTotalUsersCoundSelector, getUsersSelectorSuper
} from '../../redux/selectors';



class UsersContainerComponent extends React.Component {

  componentDidMount() {
    this.props.getUsersThunkCreator()
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)

    // this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber);
    // this.props.getUsers(pageNumber, this.props.pageSize)
    //   .then(response => {
    //     this.props.toggleIsFetching(false)
    //     this.props.setUsers(response.items)
    //   })
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader /> : null}
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


const mapStateToProps = (state) => {
  return {
    isFetching: getIsFetchingSelector(state),
    users: getUsersSelectorSuper(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCound: getTotalUsersCoundSelector(state),
    currentPage: getCurrentPageSelector(state),

  }
}


export default connect(mapStateToProps,
  { setCurrentPage, getUsersThunkCreator })(UsersContainerComponent);