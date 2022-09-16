import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Welcome" pageTitle="Thomas">

                <div class="popup">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="popup_content claim pt-5">
                                    <span class="popup_icon">
                                        <img src="./images/popup/1.svg" alt="" />
                                    </span>
                                    <h4>Claim your bonus!</h4>
                                    <p>Enter a Bonus code and get rewarded with gems! Bonus codes are post regularly on our
                                        <a href="#">Twitter</a>.
                                    </p>

                                    <form action="#">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Enter bonus code here"/>
                                            <span>Cancel</span>
                                        </div>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#popup_claim1">Claim</button>
                                    </form>
                                </div>
                            </div>


                            <div class="col-xl-6">
                                <div class="popup_content claim pt-5">
                                    <span class="popup_icon">
                                        <img src="./images/popup/2.svg" alt="" />
                                    </span>
                                    <h4>Wohoo Congratulations! </h4>
                                    <p>Claimed the bonus code has been successful, please press the continue button or you have
                                        another code bonus</p>

                                    <button type="button" class="btn btn-primary mt-5" data-bs-toggle="modal"
                                        data-bs-target="#popup_claim2">CONTINUE</button>
                                </div>
                            </div>


                            <div class="col-xl-6">
                                <div class="popup_content claim pt-5">
                                    <span class="popup_icon">
                                        <img src="./images/popup/3.svg" alt="" />
                                    </span>
                                    <h4>Oops sorry! the code doesn’t work</h4>
                                    <p>Please, try again to enter the correct code</p>
                                    <a href="#" class="btn btn-outline-warning me-3">Cancel</a>
                                    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#popup_claim3">TRY
                                        AGAIN</a>
                                </div>
                            </div>


                            <div class="col-xl-6">
                                <div class="popup_content claim pt-5">
                                    <span class="popup_icon">
                                        <img src="./images/popup/4.svg" alt="" />
                                    </span>
                                    <h4>Free Gems bonus!</h4>
                                    <p>Earn free money by clicking claim now every single day!</p>
                                    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#popup_claim4">CLAIM</a>
                                </div>
                            </div>


                            <div class="col-xl-6">
                                <div class="popup_content claim pt-5">
                                    <span class="popup_icon">
                                        <img src="./images/popup/5.svg" alt="" />
                                    </span>
                                    <h4>Wohoo Congratulations! </h4>
                                    <p>Earn free money by clicking claim now every single day!</p>
                                    <a href="#" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#popup_claim5">Continue</a>
                                </div>
                            </div>


                            <div class="col-xl-6">
                                <div class="popup_content claim pt-5">
                                    <span class="popup_icon">
                                        <img src="./images/popup/6.svg" alt="" />
                                    </span>
                                    <h4>Oops sorry! there was an error</h4>
                                    <p>Earn free money by clicking claim now every single day!</p>
                                    <p>Please, try again </p>
                                    <a href="#" class="btn btn-outline-warning me-3">Cancel</a>
                                    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#popup_claim6">TRY
                                        AGAIN</a>
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