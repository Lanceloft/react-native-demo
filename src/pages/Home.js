import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  addNumber,
  reduceNumber
} from '../actions/Actions';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>HomeScreen!</Text>
        <Text>{ this.props.number }</Text>
        <Text onPress={ this.props.onAdd }>ADD</Text>
        <Text onPress={ this.props.onReduce }>REDUCE</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.getIn(['homeState', 'number']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch(addNumber()),
    onReduce: () => dispatch(reduceNumber()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
