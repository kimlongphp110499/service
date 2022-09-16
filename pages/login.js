import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Back to Home" pageTitle="Login">

                <div class="profile_setting">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="account_setting card">
                                    <div class="card-header">
                                        <h4 class="card-title">Login</h4>
                                    </div>
                                    <div class="card-body">
                                        <form action="#">
                                            <div class="form-group">
                                                <label>Email Address</label>
                                                <input type="email" class="form-control" placeholder="Enter email address"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" class="form-control" placeholder="Enter email address"/>
                                            </div>

                                            <button type="submit" class="btn btn-primary">Login</button>
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