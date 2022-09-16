import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Back to Shop" pageTitle="Withdraw to Crypto Currencies">

    <div class="shop_withdraw">
        <div class="container">
            <div class="row">
                <div class="col-xl-3">
                    <div class="shop_card_desc">
                        <div class="card">
                            <div class="card-header">
                                <div class="icon btc">
                                    <span><img src="./images/svg/bitcoin.svg" alt=""/></span>
                                </div>
                                <h4 class="card-title">Crypto Currencies</h4>
                            </div>
                            <div class="card-body">
                                <h5>Description :</h5>
                                <p>Amazon is the world’s largest online retailer. Amazon Gift Cards are redeemable
                                    towards millions of items storewide on Amazon.
                                </p>
                            </div>
                            <div class="card-footer">
                                <div class="website">
                                    <span><img src="./images/svg/plane.svg" alt=""/></span>
                                    <a href="#">
                                        <p>Website</p>
                                    </a>
                                </div>
                                <div class="help">
                                    <span><img src="./images/svg/help.svg" alt=""/></span>
                                    <a href="#">
                                        <p>Help</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9">
                    <div class="shop_card_content">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Crypto Currencies</h4>
                            </div>
                            <div class="card-body">
                                <form action="#">
                                    <div class="form-group">
                                        <label>Choose crypto currencies</label>
                                        <ul class="crypto_currencies">
                                            <li class="wave-effect active"><i class="cc BTC-alt" title="BTC"></i>
                                                Bitcoin</li>
                                            <li class="wave-effect"><i class="cc LTC" title="BTC"></i> Litecoin</li>
                                            <li class="wave-effect"><i class="cc ETH" title="BTC"></i> Etherum</li>
                                            <li class="wave-effect"><i class="cc BTC" title="BTC"></i>Bitcoin Cash
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="form-group">
                                        <label>Choose Amount</label>
                                        <ul class="choose_amount">
                                            <li class="wave-effect active">$2.50</li>
                                            <li class="wave-effect">$2.50</li>
                                            <li class="wave-effect">$2.50</li>
                                            <li class="wave-effect">$2.50</li>
                                            <li class="wave-effect">$2.50</li>
                                            <li class="wave-effect">$2.50</li>
                                            <li class="wave-effect">$2.50</li>
                                        </ul>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Set PayPal address</label>
                                        <input type="text" class="form-control" placeholder="Enter paypal address"/>
                                    </div>
                                    <div class="form-button">
                                        <p>USD account balance will be sent to your PayPal account. PayPal charges
                                            you a
                                            transaction fee of 2.9% + $0.30.</p>
                                        <button class="btn btn-primary">Withdraw</button>
                                    </div>
                                </form>
                                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                    Payment of 30,000G will be equivalent to $2.50 withdrawals
                                    <div class="close" data-bs-dismiss="alert" aria-label="Close">
                                        <span><i class="la la-close"></i></span>
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