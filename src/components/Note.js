import React from 'react'

function Note() {
  return (
    <div style={{ width: '100%', height: "37rem", backgroundColor: '#F2F1EB', padding: '1em 2em' }}>
      <div style={{ width: '12rem', height: "5rem", backgroundColor: '#EEE7DA', display: 'flex',
       justifyContent: 'center', flexDirection: 'column', padding: '0 1em', borderRadius: '0.5em',
        boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)', cursor: 'pointer'
        }}>
        <h2 style={{ margin: 0, fontSize: 20}}>This is note title</h2>
        <p style={{ margin: 0, fontSize: 20}}>This is note content</p>
      </div>
    </div>
  )
}

export default Note