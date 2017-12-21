import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

//all notes are listed in a collapsible
export default class NoteContainer extends React.Component {
  render() {
    const notes =
      this.props.notes.length > 0 ? (
        this.props.notes.map((note, i) => (
          <CollapsibleItem key={i} header={`Note ${i + 1}`} icon="map">
            {note.content}
          </CollapsibleItem>
        ))
      ) : (
        <button>No Notes Found</button>
      );
    return <Collapsible>{notes}</Collapsible>;
  }
}
