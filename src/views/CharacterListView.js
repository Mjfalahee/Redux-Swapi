import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacter } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacter();
    // call our action
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return console.log('FETCHING NOW.')
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.characters,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  {
    getCharacter
  }
)(CharacterListView);
