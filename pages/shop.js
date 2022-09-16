import Link from "next/link"
import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Shop" pageTitle="Shop Gift Card">

        <div class="gift_card">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3">
                        <div class="gift_card-content">
                            <div class="icon paypal">
                                <span><img src="./images/svg/paypal.svg" alt=""/></span>
                            </div>
                            <h4>Paypal</h4>
                            <p>PayPal allows you to easily send or receive payments, making online purchases safer and
                                easier than ever before.</p>
                            <Link href="/shop-paypal-withdraw"><a class="paypal-btn wave-effect">SELECT</a></Link>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="gift_card-content even">
                            <div class="icon btc">
                                <span><img src="./images/svg/bitcoin.svg" alt=""/></span>
                            </div>
                            <h4>Crypto Currencies</h4>
                            <p>Crypto currencies are a digital currency that are not backed by any country’s central
                                bank or government. They can be traded for goods or services with whoever accepts them
                                as form of payment</p>
                            <Link href="/shop-crypto-withdraw"><a class="btc-btn wave-effect">SELECT</a></Link>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="gift_card-content">
                            <div class="icon aws">
                                <span><img src="./images/svg/aws.svg" alt=""/></span>
                            </div>
                            <h4>Amazon Giftcards</h4>
                            <p>Amazon is the world’s largest online retailer. Amazon Gift Cards are redeemable towards
                                millions of items storewide on Amazon.</p>
                            <Link href="/shop-amazon-withdraw"><a class="aws-btn wave-effect">SELECT</a></Link>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="gift_card-content even">
                            <div class="icon virtual">
                                <span><img src="./images/svg/virtual.svg" alt=""/></span>
                            </div>
                            <h4>Virtual items</h4>
                            <p>We partnered up with CSGOShop & Dota Skin,o give you the option to get digital items at
                                the cheapest price.</p>
                            <Link href="/game-skin-csgo"><a class="virtual-btn wave-effect">SELECT</a></Link>
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