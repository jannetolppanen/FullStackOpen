
const NoteForm = ( {addNote, newNote, handleNoteChange }) => (
  <form onSubmit={addNote}>
    <input
      value={newNote}
      onChange={handleNoteChange}
      id='input'
    />
    <button id='save-button'type="submit">save</button>
  </form>
)

export default NoteForm