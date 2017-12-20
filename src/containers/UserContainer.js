import React from 'react';

export default class UserContainer extends React.Component {
  state = {
    users: [],
    myUser: {},
    containerState: ''
  };

  componentDidMount() {
    this.setState({
      users: [...this.props.users][0]
    });

    this.setState({
      containerState: this.props.containerState
    });
  }

  render() {
    console.log(this.props.containerState);
    return <div>Hey there!</div>;
  }
}
