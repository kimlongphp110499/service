import Link from "next/link"
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
                            <Link href="/create-ticket"><a class="btn btn-primary">Create Ticket</a></Link>
                        </div>
                        <div class="card-body height-200 d-flex align-items-center justify-content-center">
                            <p class="mt-5">You have no ticket yet! Create one by hitting the <Link href="/create-ticket"><a class="text-primary">Create
                                    Button</a></Link> </p>
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