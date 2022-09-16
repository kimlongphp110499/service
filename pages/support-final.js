import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Support" pageTitle="Support System">

                <div class="support">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="card ticket_final">
                                    <div class="card-header">
                                        <h4 class="card-title">Your Ticket Notification</h4>
                                        <a href="#" class="clear_notification text-warning">Clear All Notification</a>
                                    </div>
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <img src="./images/profile/2.png" alt="" class="me-3"/>
                                            <div class ="flex-grow-1">
                                            <h5>Rick Henary gave responded on your ticket <span
                                            class ="badge badge-warning">New</span></h5>
                                            </div>
                                            <span>1 min ago</span>
                                        </div>
                                        <div class="d-flex">
                                            <img src="./images/profile/1.png" alt="" class="me-3"/>
                                            <div class ="flex-grow-1">
                                            <h5>Jane gave responded on your ticket</h5>
                                            </div>
                                            <span>24 July 2021</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="card create_ticket">
                                    <div class="card-header">
                                        <h4 class="card-title">Your Ticket</h4>
                                        <a href="#" class="btn btn-primary">Create Ticket</a>
                                    </div>
                                    <div class="card-body create_ticket-after">
                                        <div class="ticket_after_list">
                                            <ul>
                                                <li>
                                                    <div>
                                                        <h5>I’m having issues claming with my daily hours <span
                                                            class="badge badge-success">OPEN</span></h5>
                                                        <p>Posted on 24 June 2021</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
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