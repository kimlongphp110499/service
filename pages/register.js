import React from 'react'
import Layout from '../components/layout/Layout'
import AuthService from '../service/auth.service';

function Blank() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const resp = await AuthService.handleRegister(event.target.name.value, event.target.email.value, event.target.password.value);
      };
    return (
        <>
            <Layout subTitle="Back to Home" pageTitle="Register">

                <div class="profile_setting">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="account_setting card">
                                    <div class="card-header">
                                        <h4 class="card-title">Register</h4>
                                    </div>
                                    <div class="card-body">
                                        <form onSubmit={onSubmit}>
                                            <div class="form-group">
                                                <label>User Name</label>
                                                <input name="name" type="text" class="form-control" placeholder="Henry"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Email Address</label>
                                                <input name="email" type="email" class="form-control" placeholder="Enter email address"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input name="password" type="password" class="form-control" placeholder="Enter email address"/>
                                            </div>

                                            <button type="submit" class="btn btn-primary">Register</button>
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