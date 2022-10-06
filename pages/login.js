import React, { useState } from 'react';
import Layout from '../components/layout/Layout'
import AuthService from '../service/auth.service';
import Link from "next/link"

function Blank() {
    const [message, setMessage] = useState(
        <div></div>
    )
  const handleClick = () => setCount(1 + 1)

    const onSubmit = async (e) => {
        e.preventDefault();
        const resp = await AuthService.handleLogin(event.target.email.value, event.target.password.value);
        if(resp ==  false){
            setMessage(<div class="alert alert-danger">Login Error</div>)
        }

      };
    return (
        <>
            <Layout subTitle="Back to Home" pageTitle="Login">

                <div class="profile_setting">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="account_setting card">
                                    <div class="card-body">
                                    {message}
                                        <form onSubmit={onSubmit}>
                                            <div class="form-group">
                                                <label>Email Address</label>
                                                <input name="email" type="email" class="form-control" placeholder="Enter email address" required/>
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input name="password" type="password" class="form-control" placeholder="Enter email address" required/>
                                            </div>
                                            
                                            <button type="submit" class="btn btn-primary" style={{"margin-right":"1%"}}>Login</button>
                                            <button type="text" class="btn btn-primary"><Link href="/register">Register</Link></button>
                                        </form>
                                       

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Layout>
        </>
    )
}

export default Blank