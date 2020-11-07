import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../../firebase'
import '../../CSSfiles/LoginPage.css'

function LoginPage() {
    
    const SignIn = () =>{
        auth.signInWithPopup(provider).catch(error => error.message)
    }
    return (
        <div className='loginpage'>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/1200px-Discord_logo.svg.png" alt="discord logo"/>
            </div>
            <Button  onClick={SignIn} >Sign In </Button>
        </div>
    )
}

export default LoginPage
