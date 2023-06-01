const Note = ({ note, toggleImportance }) => {
  const label = note.important 
    ? 'make not important' 
    : 'make important';

  const buttonStyle = note.important
  ? 'nes-btn is-primary'
  : 'nes-btn is-warning'

  return (
    <li className='note'>
      {note.content} 
      <button class={buttonStyle} onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note