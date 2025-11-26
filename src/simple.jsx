import React from 'react'

const Simple = () => {
  return (
    <div>
      <div>
        <h1 style={{textAlign: 'center', color:'blue' }}>Codebook</h1>
      </div>
       <div style={{
        border: '2px solid #ddd',
        borderRadius: '10px',
        margin: '40px auto',
        padding:'30px',
        textAlign: 'center',
        width: '450px'
        

       }}> <h2 style={{textAlign: 'center', color: 'rebeccapurple'}}> Login aur codebook account</h2>
      <form action="" style={{textAlign:'cente'}}>
        <input type="text" placeholder='enter a username'  style={{textAlign: 'center', color: 'blue',  padding: "7px"}} /> <br /> <br />
        <input type="number" placeholder='enter your password'  style={{textAlign: 'center', color: 'blue',  padding: "7px"}} />  <br /> <br />


        <button  style={{ color: "red", textAlign: 'center', color: 'white',  padding: "7px", backgroundColor:'blue' }}onClick={alert('loginsoon')}>login


        </button>
      </form>
      </div>
    </div> 
  )
}

export default Simple
