import React from 'react'
import ChartData from '../components/chart/chart'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Back to Home" pageTitle="Profile">

                <div class="profile">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-4">
                                <div class="profile_card">
                                    <div class="d-flex">
                                        <img src="./images/profile/profile.png" alt="" />
                                        <div class="flex-grow-1">
                                            <h4>Henry John Paulin</h4>
                                            <p>henry@gmail.com</p>
                                        </div>
                                    </div>
                                    <div class="profile-reg">
                                        <div class="registered">
                                            <h5>25 June 2021</h5>
                                            <p>Registered</p>
                                        </div>
                                        <span class="reg_divider"></span>
                                        <div class="rank">
                                            <h5>User</h5>
                                            <p>Rank</p>
                                        </div>
                                    </div>
                                    <div class="profile_list">
                                        <ul class="nav nav-tabs">
                                            <li>
                                                <a data-bs-toggle="tab" href="#coinEarn" class="active">
                                                    <span class="icons usd"><i class="fa fa-usd"></i></span>
                                                    Coin Earned
                                                    <span><i class="la la-angle-right"></i></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a data-bs-toggle="tab" href="#offeres">
                                                    <span class="icons gift"><i class="fa fa-gift"></i></span>
                                                    Offers Completed
                                                    <span><i class="la la-angle-right"></i></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a data-bs-toggle="tab" href="#order">
                                                    <span class="icons cart"><i class="fa fa-cart-plus"></i></span>
                                                    Order Placed
                                                    <span><i class="la la-angle-right"></i></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a data-bs-toggle="tab" href="#referrals">
                                                    <span class="icons link"><i class="fa fa-link"></i></span>
                                                    Referrals
                                                    <span><i class="la la-angle-right"></i></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-8">
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="coinEarn">
                                        <div class="profile_chart">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title">
                                                        <span class="icons usd"><i class="fa fa-usd"></i></span>
                                                        Coin Earned
                                                        <span class="active">All Time</span>
                                                    </h4>
                                                    <div class="duration-option">
                                                        <a class="active" href="#">All time</a>
                                                        <a href="#">24 H</a>
                                                        <a href="#">7D</a>
                                                        <a href="#">14D</a>
                                                        <a href="#">30D</a>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="chart_current_data">
                                                        <h3>406</h3>
                                                        <p>Coin Earned</p>
                                                    </div>
                                                    {/* <canvas id="coin_earned"></canvas> */}
                                                    <ChartData/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="offeres">
                                        <div class="profile_chart">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title">
                                                        <span class="icons gift"><i class="fa fa-gift"></i></span>
                                                        Offers Completed
                                                        <span class="active">All Time</span>
                                                    </h4>
                                                    <div class="duration-option">
                                                        <a href="#">All time</a>
                                                        <a class="active" href="#">24 H</a>
                                                        <a href="#">7D</a>
                                                        <a href="#">14D</a>
                                                        <a href="#">30D</a>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="chart_current_data">
                                                        <h3>406</h3>
                                                        <p>Offer Completed</p>
                                                    </div>
                                                    <canvas id="offer_completed"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="order">
                                        <div class="profile_chart">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title">
                                                        <span class="icons link"><i class="fa fa-link"></i></span>
                                                        Referrals Link
                                                        <span class="active">All Time</span>
                                                    </h4>
                                                    <div class="duration-option">
                                                        <a href="#">All time</a>
                                                        <a href="#">24 H</a>
                                                        <a href="#">7D</a>
                                                        <a class="active" href="#">14D</a>
                                                        <a href="#">30D</a>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="chart_current_data">
                                                        <h3>406</h3>
                                                        <p>Referrals Link</p>
                                                    </div>
                                                    <canvas id="refferal_link"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="referrals">
                                        <div class="profile_chart">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title">
                                                        <span class="icons cart"><i class="fa fa-cart-plus"></i></span>
                                                        Order Placed
                                                        <span class="active">All Time</span>
                                                    </h4>
                                                    <div class="duration-option">
                                                        <a href="#">All time</a>
                                                        <a href="#">24 H</a>
                                                        <a class="active" href="#">7D</a>
                                                        <a href="#">14D</a>
                                                        <a href="#">30D</a>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="chart_current_data">
                                                        <h3>406</h3>
                                                        <p>Order Placed</p>
                                                    </div>
                                                    <canvas id="order_placed"></canvas>
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