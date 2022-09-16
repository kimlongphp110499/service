import React from 'react'
import Link from "next/link"
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>

            {/* <div id="preloader"><i>.</i><i>.</i><i>.</i></div> */}

            <div id="main-wrapper">


                <div class="header landing @@headerClass">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <nav class="navbar navbar-expand-lg navbar-light">
                                <Link href="/"><a class="navbar-brand me-auto "><img src="./images/logo.png" alt="" /></a></Link>
                                    <div class="header_auth my-2 text-center text-lg-end">
                                        <button href="javascriptvoid()"
                                            class="btn btn-primary my-2 mx-2">Buy Now</button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="intro" id="intro" data-scroll-index="0">
                    <div class="container">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-xl-6 col-md-6">
                                <div class="intro-content my-5">
                                    <h1>CoinGain - Earn Free CS:GO Skins, Cryptocurrencies & Gift Cards</h1>
                                    <p>Earn Gems by Watching Videos, Playing Games & Completing Paid Surveys. Exchange them into
                                        Free Skins, Gift Cards, Cryptocurrencies, PayPal Money, CS:GO Items, Steam Items, and
                                        Various other Rewards. Join us Today & Never pay for Skins again! </p>

                                </div>
                            </div>
                            <div class="col-xl-5 col-md-6 py-md-5">
                                <div class="intro-demo_img">
                                    <img src="./images/demo/portfolio.png" alt="" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="demo section-padding">
                    <div class="container">
                        <div class="row py-lg-5 justify-content-center">
                            <div class="col-xl-7">
                                <div class="section-title text-center">
                                    <h2>Pages</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/dashboard.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Dashboard</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/shop"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/shop.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Shop</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/affiliate"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/affiliate.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Affiliates</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/leaderboard"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/leaderboard.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Leaderboard</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/support"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/support.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Support</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/profile"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/profile.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Profile</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/history"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/history.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>History</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/settings"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/settings.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Settings</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/about"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/about.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>About</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/privacy-policy"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/privacy-policy.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Privacy policy</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/term-condition"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/term-condition.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Term Condition</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/bug-bunty"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/bug-bunty.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Bug bunty</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/banned"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/banned.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Banned</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/create-ticket"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/create-ticket.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Create ticket</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/create-ticket-faq"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/create-ticket-faq.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Create ticket faq</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/create-ticket-details"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/create-ticket-details.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Create ticket details</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/game-skin"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/game-skin.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Game skin</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/notification"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/notification.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Notification</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/offer"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/offer.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Offer</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/popup"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/popup.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>Popup</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/shop-amazon-withdraw"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/shop-amazon-withdraw.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>shop-amazon-withdraw</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/shop-crypto-withdraw"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/shop-crypto-withdraw.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>shop-crypto-withdraw</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-4 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/shop-paypal-withdraw"><a>
                                        <div class="img-wrap">
                                            <img src="./images/demo/shop-paypal-withdraw.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </a></Link>
                                    <h4>shop-paypal-withdraw</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="features section-padding bg-light" data-scroll-index="2">
                    <div class="container">
                        <div class="row py-lg-5 justify-content-center">
                            <div class="col-xl-7">
                                <div class="section-title text-center">
                                    <span>Problem?</span>
                                    <h2>Don't Worry, I am waiting your question</h2>
                                    <p>Refreshing my inbox, waiting for your mail </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="customer-support-content">
                                    <span><i class="fab fa-whatsapp"></i></span>
                                    <h4>+8801843666660</h4>
                                    <p>Without sleeping time, I am avaiable in Whstsapp. I recommend Whstsapp</p>
                                    <Link href="https://api.whatsapp.com/send?phone=008801843666660"><a>Send Message <i
                                        class="la la-angle-right"></i></a></Link>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="customer-support-content">
                                    <span><i class="fab fa-skype"></i></span>
                                    <h4>sporsho9</h4>
                                    <p>Without sleeping time, I am avaiable in skype. I also recommend Skype</p>
                                    <Link href="skype:profile_name?sporsho9"><a>Add Skype <i class="la la-angle-right"></i></a></Link>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="customer-support-content">
                                    <span><i class="fas fa-envelope"></i></span>
                                    <h4>imsaifun@gmail.com</h4>
                                    <p>When you send me email, I get notification, and quickly reply you</p>
                                    <Link href="mailto:imsaifun@gmail.com"><a>Send Email <i class="la la-angle-right"></i></a></Link>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="customer-support-content">
                                    <span><i class="fas fa-headset"></i></span>
                                    <h4>Pre sale question</h4>
                                    <p>You have need more design or customization? Dont worry about Quality</p>
                                    <Link href="https://docs.google.com/forms/d/109oFBGTIIuWEt5JbmyqQE0vUc8hLw1pKxuFpQwE5Vig"><a>Hire
                                        Now <i class="la la-angle-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="footer-link text-center text-lg-start">
                                    <Link href="#"><a class="m_logo"><img src="./images/m_logo.png" alt="" /></a></Link>
                                    <Link href="/privacy-policy"><a class="pr-3 pr-lg-4">Privacy
                                        Policy</a></Link>
                                    <Link href="/term-condition"><a>Term & Service</a></Link>
                                </div>
                                <div class="copy_right text-center text-lg-start">
                                    Copyright © 2021 CoinGain. All Rights Reserved.
                                </div>
                            </div>

                            <div class="col-xl-6 text-center text-lg-end py-5 py-lg-0">
                                <div class="social">
                                    <Link href="#"><a><i class="fab fa-youtube"></i></a></Link>
                                    <Link href="#"><a><i class="fab fa-instagram"></i></a></Link>
                                    <Link href="#"><a><i class="fab fa-twitter"></i></a></Link>
                                    <Link href="#"><a><i class="fab fa-facebook"></i></a></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blank