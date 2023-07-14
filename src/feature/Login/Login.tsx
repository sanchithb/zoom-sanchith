import React from 'react'
import './login.scss'
import { devConfig } from '../../config/dev'
import { Link } from 'react-router-dom'

import login_logo from '../Login/loginLogo.png'

const Login = () => {
    devConfig.name=""
    
  return (
    <div className='onnetsystems-body'>
        <div className="onnetsystems-container">
            <div className="onnetsystems-box">
                <div className="onnetsystems-heading">
                    <div className="onnetsystems-logomg">
                        <img src={login_logo} alt='High Court of Delhi'/>
                    </div>
                    <p>High Court of <b>Delhi</b></p>
                    <p><b>Courtroom</b>VC</p>
                </div>
                <div className="onnetsystems-formContainer">
                    <div className="onnetsystems-rows">
                        <input type='text' name='id' id='id'/>
                        <input type='password' name='password' id='password'/>
                        <p>Trouble Logging in?</p>
                        <Link to="/video">
                         <button type='button' id='login'>Login</button>
                        </Link>
                        <div className="onnetsystems-loading-dots">
                            <div className="onnetsystems-loading-dot"></div>
                            <div className="onnetsystems-loading-dot"></div>
                            <div className="onnetsystems-loading-dot"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="onnetsystems-troubleDialog">
                <div className="onnetsystems-dBox">
                    <div className="onnetsystems-content">
                        <h3>Please contact The High Court of Delhi to resolve this issue</h3>
                        <h5 className='onnetsystems-close'>Close</h5>
                    </div>
                </div>
            </div> */}
        </div> 
    </div>
  )
}

export default Login