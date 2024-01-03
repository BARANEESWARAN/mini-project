import React from 'react'
import "../Animatedlogin/AnimiLogin.css"
function AnimiLogin() {
  return (
    <div className='login_container'>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"}}>
        <h2>Login</h2>
        <img src='https://e7.pngegg.com/pngimages/434/626/png-clipart-computer-icons-scalable-graphics-people-icons-multiple-black-thumbnail.png' alt="no data" width={30}/>
        </div>

<form>
    <div className='login'>
        <label>Name</label><br></br>
        <input placeholder='name'/>
        <br></br><br></br>
        <label>Password</label><br></br>
        <input placeholder='Password'/>
        <br></br><br></br>
        <button>sign in</button>

    </div>
</form>
<div className='forget'>
<br>
</br>
<p>forgetPassword ? <a href='#'>Sign up </a></p>
</div>
    </div>
  )
}

export default AnimiLogin