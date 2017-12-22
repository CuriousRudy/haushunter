import React from 'react';
import AppointmentContainer from './AppointmentContainer';
import ListingContainer from './ListingContainer';
// import { Col, ProgressBar, Row } from 'react-materialize';

export default class UserContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      thisUser: {},
      containerState: '',
      loading: true
    };
  }
  componentDidMount = () => {
    this.setState({
      thisUser: this.props.thisUser
    });
  };

  //updates the toggle status for the filter
  componentWillReceiveProps = nextProps => {
    this.setState({ containerState: nextProps.containerState });
  };

  //pass our resource directly down to the AppointmentContainer
  render() {
    // console.log(this.state, this.props);
    const containerSwitch =
      this.state.containerState === 'appointments' ? (
        <AppointmentContainer userId={this.state.thisUser.id} />
      ) : (
        <ListingContainer userId={this.state.thisUser.id} />
      );

    return (
      <div className="row">
        {
          //   this.state.loading ? (
          //   <Row>
          //     <Col s={12}>
          //       <ProgressBar />
          //     </Col>
          //   </Row>
          // ) : (
          containerSwitch
          // )
        }
      </div>
    );
  }
}
