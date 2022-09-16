import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Support System" pageTitle="Detail Ticket">

                <div class="support">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="card create_ticket_details">
                                    <div class="card-body">
                                        <div class="ticket_details">
                                            <div class="ticket_details-header">
                                                <div>
                                                    <h5>I’m having issues claming with my daily hours <span
                                                        class="badge badge-success">OPEN</span></h5>
                                                    <p>Posted on 24 June 2021</p>
                                                </div>

                                                <button class="btn btn-danger">
                                                    <span><i class="la la-close"></i></span>Close Ticket
                                                </button>
                                            </div>
                                            <div class="ticket_desc">
                                                <p>lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry’s standard dummy text ever since the 1500slorem
                                                    Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                    Ipsum
                                                    has been the industry’s standard dummy text ever since the 1500s</p>
                                            </div>

                                            <div class="comment-reply">
                                                <div class="d-flex align-items-start">
                                                    <img src="./images/profile/2.png" alt="" class="me-3"/>
                                                    <div class ="flex-grow-1">
                                                    <h5>Rick Henary</h5>
                                                    <span>Posted on 24 June 2021</span>
                                                    <p>lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.Lorem Ipsum has been the industry’s standard dummy text
                                                    ever
                                                    since the 1500slorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry.Lorem Ipsum has been the industry’s standard
                                                    dummy
                                                    text ever since the 1500s</p>
                                                    </div>
                                                    <span>REPORT</span>
                                                </div>

                                                <div class="d-flex align-items-start">
                                                    <img src="./images/profile/3.png" alt="" class="me-3"/>
                                                    <div class ="flex-grow-1">
                                                    <form action="#">
                                                    <textarea name="" id="" rows="5" class ="form-control"></textarea>
                                                    <button class ="btn btn-primary">Add Response</button>
                                                    </form>
                                                    </div>
                                                </div>
                                                <div class="d-flex user_admin  align-items-start">
                                                    <img src="./images/profile/4.png" alt="" class="me-3"/>
                                                    <div class ="flex-grow-1 ">
                                                    <h5>Admin</h5>
                                                    <span>Posted on 24 June 2021</span>
                                                    <p>lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.Lorem Ipsum has been the industry’s standard dummy text
                                                    ever
                                                    since the 1500slorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry.Lorem Ipsum has been the industry’s standard
                                                    dummy
                                                    text ever since the 1500s</p>
                                                    <a href="#">Add Response</a>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start">
                                                    <img src="./images/profile/1.png" alt="" class="me-3"/>
                                                    <div class ="flex-grow-1 ">
                                                    <h5>Thomas Halva </h5>
                                                    <span>Posted on 24 June 2021</span>
                                                    <p>lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.Lorem Ipsum has been the industry’s standard dummy text
                                                    ever
                                                    since the 1500slorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry.Lorem Ipsum has been the industry’s standard
                                                    dummy
                                                    text ever since the 1500s</p>
                                                    <a href="#">Add Response</a>
                                                    </div>
                                                    <span>REPORT</span>
                                                </div>
                                                <div class="d-flex align-items-start">
                                                    <img src="./images/profile/2.png" alt="" class="me-3"/>
                                                    <div class ="flex-grow-1 ">
                                                    <h5>Bastian Swest</h5>
                                                    <span>Posted on 24 June 2021</span>
                                                    <p>lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.Lorem Ipsum has been the industry’s standard dummy text
                                                    ever
                                                    since the 1500slorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry.Lorem Ipsum has been the industry’s standard
                                                    dummy
                                                    text ever since the 1500s</p>
                                                    <a href="#">Add Response</a>
                                                    </div>
                                                    <span>REPORT</span>
                                                </div>
                                            </div>

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