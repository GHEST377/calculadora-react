import './Display.css'

function Display({ valor }) {

  return (

    <input
      className='display'
      type='text'
      value={valor}
      readOnly
    />

  )
}

export default Display