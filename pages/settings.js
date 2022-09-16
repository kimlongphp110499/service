import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Back to Home" pageTitle="Settings">

                <div class="profile_setting">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="account_setting card">
                                    <div class="card-header">
                                        <h4 class="card-title">Account Setting</h4>
                                    </div>
                                    <div class="card-body">
                                        <form action="#">
                                            <div class="form-group">
                                                <label>User Name</label>
                                                <input type="text" class="form-control" placeholder="Henry"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Email Address</label>
                                                <input type="email" class="form-control" placeholder="Enter email address"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Country</label>
                                                <select class="form-control">
                                                    
                                                    <option>United States</option>
                                                    <option>United Kingdom</option>
                                                    <option>Germany</option>
                                                    <option>Bangladesh</option>
                                                    <option>Others</option>
                                                    
                                                </select>
                                                <span>We use your geo to filter out the option the cashout options that are not
                                                    available to you. Your should be deleted automacally.</span>
                                            </div>
                                            <div class="form-group">
                                                <label>Custom referral code</label>
                                                <input type="text" class="form-control" placeholder="Henry"/>
                                                <span>Set a custom referral code to be used in your referral url.This will be
                                                your
                                                self id by default.</span>
                                            </div>

                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </form>
                                    </div>
                                </div>
                                <div class="payment_setting card">
                                    <div class="card-header">
                                        <h4 class="card-title">Payment Setting</h4>
                                    </div>
                                    <div class="card-body">
                                        <form action="#">
                                            <div class="form-group">
                                                <label>PayPal Address</label>
                                                <input type="text" class="form-control" placeholder="Enter paypal address"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Steam Trade Url</label>
                                                <input type="text" class="form-control" placeholder="Enter steam trade url"/>
                                            </div>

                                            <div class="form-group">
                                                <label>Bitcoin Address</label>
                                                <input type="text" class="form-control" placeholder="Enter BTC address"/>
                                            </div>

                                            <div class="form-group">
                                                <label>Eetherum Address</label>
                                                <input type="text" class="form-control" placeholder="Enter ETH address"/>
                                            </div>

                                            <div class="form-group">
                                                <label>Litecoin Address</label>
                                                <input type="text" class="form-control" placeholder="Enter LTC address"/>
                                            </div>

                                            <div class="form-group">
                                                <label>Bitcoin Cash Address</label>
                                                <input type="text" class="form-control" placeholder="Enter BCH address"/>
                                            </div>

                                            <button type="submit" class="btn btn-primary">Save</button>
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