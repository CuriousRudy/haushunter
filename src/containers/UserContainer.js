import React from 'react';
import AppointmentContainer from './AppointmentContainer';
import ListingContainer from './ListingContainer';
import { Route } from 'react-router-dom';

// import { Col, ProgressBar, Row } from 'react-materialize';

export default class UserContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      userId: {},
      containerState: '',
      loading: true
    };
  }
  componentDidMount = () => {
    this.setState({
      userId: this.props.userId
    });
  };

  //updates the toggle status for the filter
  // componentWillReceiveProps = nextProps => {
  //   this.setState({ containerState: nextProps.containerState });
  // };

  //pass our resource directly down to the AppointmentContainer
  render() {
    // console.log(this.state, this.props);
    // const containerSwitch =
    //   this.state.containerState === "appointments" ? (
    //     <AppointmentContainer userId={this.state.thisUser.id} />
    //   ) : (
    //     <ListingContainer userId={this.state.thisUser.id} />
    //   );
    console.log('usercontroller', this.state);
    return (
      <div className="container">
        <Route
          path="/appointments"
          render={() => {
            return <AppointmentContainer thisUser={this.state.thisUser} />;
          }}
        />
        <Route path="/listings" component={ListingContainer} />
      </div>
    );
  }
}
