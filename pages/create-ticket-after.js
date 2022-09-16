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
                    <div class="card blank_notification">
                        <div class="card-header">
                            <h4 class="card-title">Your Ticket Notification</h4>
                            <a href="#" class="clear_notification text-warning">Clear All Notification</a>
                        </div>
                        <div class="card-body">
                            <p>Opps sorry, There are no notification to show </p>
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