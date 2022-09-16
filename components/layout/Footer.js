import React from 'react'
import Link from "next/link"

function Footer() {
    return (
        <>
            <div class="footer dashboard">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="footer-link text-left">
                                <Link href="#"><a class="m_logo">
                                    <img src="./images/m_logo.png" alt="" /></a></Link>
                                <Link href="/shop"><a>Shop</a></Link>
                                <Link href="/affiliate"><a>Affiliates</a></Link>
                                <Link href="/affiliate"><a>Leaderboards</a></Link>
                                <Link href="/support"><a>Support</a></Link>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="footer-link text-end">
                                <Link href="/about"><a>About</a></Link>
                                <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
                                <Link href="/term-condition"><a>Term & Service</a></Link>
                                <Link href="/bug-bunty"><a>Bug Bounty</a></Link>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-xl-6">
                            <div class="copy_right text-center text-lg-start">
                                Copyright ©
                                CoinGain. All Rights Reserved.
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
        </>
    )
}

export default Footer
