import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Support" pageTitle="Support System">

    <div class="notification_alert">
        <div class="container">
            <div class="row">
                <div class="col-xl-4">
                    <div class="notification_card">
                        <h5>Verify Email :</h5>

                        <div class="notification alert verify_email alert-dismissible fade show">
                            <div class="d-flex">
                                <div class="alert_icon me-3">
                                    <span><i class="fa fa-envelope"></i></span>
                                </div>
                                <p>Please verify your e-mail address on the settings</p>
                            </div>
                            <span class="close" data-bs-dismiss="alert" aria-label="Close">
                                <i class="la la-close"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="notification_card">
                        <h5>Information Alert :</h5>

                        <div class="notification alert information_alert alert-dismissible fade show">
                            <div class="d-flex">
                                <div class="alert_icon me-3">
                                    <span><i class="fa fa-bell"></i></span>
                                </div>
                                <p>The maximum number of items for exchange </p>
                            </div>
                            <span class="close" data-bs-dismiss="alert" aria-label="Close">
                                <i class="la la-close"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="notification_card">
                        <h5>Information Attention :</h5>

                        <div class="notification alert information_ttention alert-dismissible fade show">
                            <div class="d-flex">
                                <div class="alert_icon me-3">
                                    <span><i class="fa fa-exclamation-triangle"></i></span>
                                </div>
                                <p>The maximum number of items for exchange</p>
                            </div>
                            <span class="close" data-bs-dismiss="alert" aria-label="Close">
                                <i class="la la-close"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="notification_card">
                        <h5>Success :</h5>

                        <div class="notification alert success alert-dismissible fade show">
                            <div class="d-flex">
                                <div class="alert_icon me-3">
                                    <span><i class="fa fa-check-circle"></i></span>
                                </div>
                                <p>Link copied to clipboard, and earnings claimed</p>
                            </div>
                            <span class="close" data-bs-dismiss="alert" aria-label="Close">
                                <i class="la la-close"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="notification_card">
                        <h5>Verify Email :</h5>

                        <div class="notification alert failure alert-dismissible fade show">
                            <div class="d-flex">
                                <div class="alert_icon me-3">
                                    <span><i class="fa fa-times-circle"></i></span>
                                </div>
                                <p>Fail copied link to clipboard</p>
                            </div>
                            <span class="close" data-bs-dismiss="alert" aria-label="Close">
                                <i class="la la-close"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="notification_card">
                        <h5>Verify Email :</h5>

                        <div class="notification alert cookies alert-dismissible fade show">
                            <div class="d-flex">
                                <div class="alert_icon me-3">
                                    <span><i class="fa fa-envelope"></i></span>
                                </div>
                                <p>Coockies help us to provide our service. By continuing to use the site, you agree
                                    to
                                    <a href="#">Our Use of Cookies</a>
                                </p>
                            </div>
                            <span class="close" data-bs-dismiss="alert" aria-label="Close">
                                <i class="la la-close"></i>
                            </span>
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