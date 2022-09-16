import Link from "next/link";
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';


function Blank() {
    const [isToggled, setToggled] = useState(false);
    const [openClass, setOpenClass] = useState(false);

    const handleOpen = () => setOpenClass(true)


    const handleRemove = () => setOpenClass(false)


    const toggleTrueFalse = () => setToggled(!isToggled);
    return (
        <>
            <Layout subTitle="Welcome Back!" pageTitle="Thomas Henry">

                <div class="earn_possibilities">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="earn_possibilities-header">
                                    <div class="title">
                                        <span><img src="./images/svg/bar_chart.svg" alt="" /></span>
                                        <p>Earn Possibilities</p>
                                    </div>
                                    <span class="see_all" onClick={toggleTrueFalse}>{isToggled ? "Hide All" : "See All"} </span>
                                </div>

                                <div class="earn_possibilities-carousel">
                                    <div class="row">
                                        <div class="col">
                                            <div class="earn_possibilities-content color_8 active">
                                                <div class="earn_possibilities-content-img">
                                                    <img src="./images/brand/8.svg" alt="" />
                                                </div>
                                                <Link href="/offer"><a class="wave-effect">Enter</a></Link>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="earn_possibilities-content color_1">
                                                <div class="earn_possibilities-content-img">
                                                    <img src="./images/brand/1.png" alt="" />
                                                </div>
                                                <Link href="/offer"><a class="wave-effect">Enter</a></Link>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="earn_possibilities-content color_2">
                                                <div class="earn_possibilities-content-img">
                                                    <img src="./images/brand/2.png" alt="" />
                                                </div>
                                                <Link href="/offer"><a class="wave-effect">Enter</a></Link>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="earn_possibilities-content color_3">
                                                <div class="earn_possibilities-content-img">
                                                    <img src="./images/brand/3.svg" alt="" />
                                                </div>
                                                <Link href="/offer"><a class="wave-effect">Enter</a></Link>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="earn_possibilities-content color_4">
                                                <div class="earn_possibilities-content-img">
                                                    <img src="./images/brand/4.svg" alt="" />
                                                </div>
                                                <Link href="/offer"><a class="wave-effect">Enter</a></Link>
                                            </div>
                                        </div>


                                    </div>
                                    <div class={isToggled ? "row all_items" : "d-none"}>
                                        <div class="col">
                                            <div class="earn_possibilities-content color_5">
                                                <div class="earn_possibilities-content-img">
                                                    <img src="./images/brand/5.svg" alt="" />
                                                </div>
                                                <Link href="/offer"><a class="wave-effect">Enter</a></Link>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="earn_possibilities-content color_6">
                                                <div class="earn_possibilities-content-img">
                                                    <img src="./images/brand/6.svg" alt="" />
                                                </div>
                                                <Link href="/offer"><a class="wave-effect">Enter</a></Link>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="earn_possibilities-content color_7">
                                                <div class="earn_possibilities-content-img">
                                                    <img src="./images/brand/7.png" alt="" />
                                                </div>
                                                <Link href="/offer"><a class="wave-effect">Enter</a></Link>
                                            </div>
                                        </div>


                                        <div class="col">
                                            <div class="earn_possibilities-content color_4">
                                                <div class="earn_possibilities-content-img">
                                                    <img src="./images/brand/4.svg" alt="" />
                                                </div>
                                                <Link href="/offer"><a class="wave-effect">Enter</a></Link>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="earn_possibilities-content color_5">
                                                <div class="earn_possibilities-content-img">
                                                    <img src="./images/brand/5.svg" alt="" />
                                                </div>
                                                <Link href="/offer"><a class="wave-effect">Enter</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ani-1">
                        <img src="./images/svg/circle.svg" alt="" />
                    </div>
                    <div class="ani-2 ">
                        <img src="./images/svg/triangle.svg" alt="" />
                    </div>
                </div>

                <div class="bonus_reward">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="row">
                                    <div class="col-xl-12 col-lg-6 col-md-6">
                                        <div class="bonus_card active">
                                            <div class="bonus_card-icon">
                                                <img src="./images/svg/star.svg" alt="" />
                                            </div>
                                            <div class="bonus_card-content">
                                                <div class="bonus_card-text">
                                                    <h6>Bonus Code</h6>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                        accusantium d</p>
                                                </div>
                                                <a class="bonus_card-btn wave-effect"
                                                    onClick={handleOpen}>Claim</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-6 col-md-6">
                                        <div class="bonus_card reward_card">
                                            <div class="bonus_card-icon">
                                                <img src="./images/svg/badge.svg" alt="" />
                                            </div>
                                            <div class="bonus_card-content">
                                                <div class="bonus_card-text">
                                                    <h6>Bonus Code</h6>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                        accusantium d</p>
                                                </div>
                                                <a onClick={handleOpen} class="bonus_card-btn wave-effect">Claim</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="social_task">
                                    <div class="social_task-header">
                                        <div class="title">
                                            <span><img src="./images/svg/coingain.svg" alt="" /></span>
                                            <p>Complete CoinGain tasks</p>
                                        </div>
                                    </div>
                                    <div class="social_task-table table-responsive">
                                        <table class="table" style={{ "minWidth": "600px" }}>
                                            <tbody>
                                                <tr>
                                                    <td><span class="social_icon twitter"><img src="./images/svg/twitter.svg"
                                                        alt="" /></span></td>
                                                    <td>
                                                        <span>Follow us</span>
                                                        <p><strong>On Twitter</strong> @CoinGain </p>
                                                    </td>
                                                    <td>
                                                        <span class="earn_gem">Earn 250 <img src="./images/svg/gem.svg"
                                                            alt="" /></span>

                                                    </td>
                                                    <td class="text-center"><span><img src="./images/svg/checked.svg" alt="" /></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span class="social_icon instagram"><img src="./images/svg/instagram.svg"
                                                        alt="" /></span></td>
                                                    <td>
                                                        <span>Follow us</span>
                                                        <p><strong>On Twitter</strong> @CoinGain </p>
                                                    </td>
                                                    <td>
                                                        <span class="earn_gem">Earn 250 <img src="./images/svg/gem.svg"
                                                            alt="" /></span>

                                                    </td>
                                                    <td class="text-center"><button class="btn btn-primary">Complete</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span class="social_icon facebook"><img src="./images/svg/facebook.svg"
                                                        alt="" /></span></td>
                                                    <td>
                                                        <span>Follow us</span>
                                                        <p><strong>On Twitter</strong> @CoinGain </p>
                                                    </td>
                                                    <td>
                                                        <span class="earn_gem">Earn 250 <img src="./images/svg/gem.svg"
                                                            alt="" /></span>

                                                    </td>
                                                    <td class="text-center"><button class="btn btn-primary">Complete</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="ani-5">
                        <img src="./images/svg/line2.svg" alt="" />
                    </div> */}
                </div>





            </Layout>

            <div class={openClass ? "popup_claim modal fade show d-block" : "popup_claim modal fade "} id="popup_claim">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="popup_content modal-content">
                        <span class="popup_claim-icon">
                            <img src="./images/popup/1.svg" alt="" />
                        </span>
                        <h4>Claim your bonus!</h4>
                        <p>Enter a Bonus code and get rewarded with gems! Bonus codes are post regularly on our <a
                            href="#">Twitter</a>.
                        </p>

                        <form action="#">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Enter bonus code here" />
                                <span onClick={handleRemove}>Cancel</span>
                            </div>
                            <button type="button" class="btn btn-primary">Claim</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class={openClass ? "modal-backdrop fade show" : "d-none"}></div>

        </>
    )
}

export default Blank