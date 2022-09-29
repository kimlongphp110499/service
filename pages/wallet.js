import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import Layout from '../components/layout/Layout'
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Blank() {
    const router = useRouter();
    if(router.query.message)
    {
        toast.success("Payment success!")
    }
    const [datas, setDatas] = useState([])
    const BASE_URL = process.env.API_ENDPOINT;
    useEffect(async () => {

    });
   
    return (
        <>
           <Layout subTitle="Wallet" pageTitle="Wallet Payment Manager">
<ToastContainer/>
<div class="affiliates">
    <div class="container">
        <div class="row">
            <div class="col-xl-3 col-lg-3">
                <div class="credit">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Your Coins Wallet</h4>
                            <div class="credit-content">
                                <div class="invited d-flex justify-content-between">
                                    <h6>Invited</h6>
                                    <h6 class="text-primary">12</h6>
                                </div>
                                <div class="earnings d-flex justify-content-between">
                                    <h6>Earnings</h6>
                                    <h6 class="text-primary">111 <img src="./images/svg/gem.svg" alt=""/></h6>
                                </div>

                                <button class="btn btn-primary">CLAIM REWARDS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-lg-9">
                <div class="refferal_link">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Referral link</h4>
                            <p>Your earn 5% of the Coins your referrals earn through an offer ! Give them this
                                link
                                to sign up and you’re good to go</p>

                            <div class="referral_form">
                                <form action="#">
                                    <div class="form-row align-items-center">
                                        <div class="form-group col-xl-8">
                                            <label for="">Your Referral Link</label>
                                            <input type="text" class="form-control"
                                                placeholder="Your Referral link"/>
                                            <div class ="edit_copy">
                                            <span><img src="./images/svg/copy.svg" alt=""/></span>
                                            <span><img src="./images/svg/edit.svg" alt=""/></span>
                                            </div>
                                        </div>
                                        <div class="form-social col-xl-4">
                                            <a href="#" class="facebook">
                                                <span><i class="fab fa-facebook-square"></i></span>
                                            </a>
                                            <a href="#" class="twitter">
                                                <span><i class="fab fa-twitter"></i></span>
                                            </a>
                                            <a href="#" class="reddit">
                                                <span><i class="fab fa-reddit-alien"></i></span>
                                            </a>
                                            <a href="#" class="email">
                                                <span><i class="fa fa-envelope"></i></span>
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="refferal_level">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Referral level</h4>
                            <span>Current Bonus : 5%</span>
                        </div>
                        <div class="card-body">
                            <div class="referral-progress-content">
                                <div class="progress-popup first">
                                    <h5>Bronze <span class="divider">|</span><span>5%</span></h5>
                                    <p>Referral : 0</p>
                                </div>
                                <div class="progress-popup middle">
                                    <h5>Bronze <span class="divider">|</span><span>5%</span></h5>
                                    <p>Referral : 0</p>
                                </div>
                                <div class="progress-popup last">
                                    <h5>Bronze <span class="divider">|</span><span>5%</span></h5>
                                    <p>Referral : 0</p>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar w-50" role="progressbar" aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100"></div>
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