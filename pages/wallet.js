import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import Layout from '../components/layout/Layout'
import axios from 'axios';
import { useRouter } from 'next/router';
import AuthService from '../service/auth.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Blank() {
    const router = useRouter();
    
    const [wallets, setWallets] = useState()
    const [avai, setAvai] = useState(0)
    const [total, setTotal] = useState(0)
    const resp = []
    const token = ''
    const ISSERVER = typeof window === "undefined";
    if (!ISSERVER) {
        token = localStorage.getItem("token");
        }
    const BASE_URL = process.env.API_ENDPOINT;
    const URL_TO = '/order-point-vnpay'
    const checkout = async (e) => {
        e.preventDefault();
        const redirect = BASE_URL+URL_TO+'?token='+token+'&amount=' + event.target.amount.value
        window.location.replace(redirect);
      };
    useEffect(() => {
        if(router.query.message)
        {
            toast.success("Payment success!")
        }
        const timer = setTimeout(async () => {
            const res = await AuthService.getUserProfile();
                setAvai(res.wallet.available_points)
                setTotal(res.wallet.total_points-100)
            
        }, 1000);
        return () => clearTimeout(timer);
      }, []);
   
    return (
        <>
           <Layout subTitle="Wallet" pageTitle="Wallet Payment Manager">
<ToastContainer/>
<div class="affiliates">
    <div class="container">
        <div class="row">
            <div class="col-xl-4 col-lg-4">
                <div class="credit">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Your Coins Wallet</h4>
                            <div class="credit-content">
                                <div class="earnings d-flex justify-content-between">
                                    <h6>Coins Available</h6>
                                    <h6 class="text-primary">{avai}<img src="./images/svg/gem.svg" alt=""/></h6>
                                </div>
                                <div class="earnings d-flex justify-content-between">
                                    <h6>Member Rank</h6>
                                    <h6 class="text-primary">{wallets}<img src="./images/svg/gem.svg" alt=""/></h6>
                                </div>
                                <div class="earnings d-flex justify-content-between">
                                    <h6>Total Coins Add Fund</h6>
                                    <h6 class="text-primary">{total}<img src="./images/svg/gem.svg" alt=""/></h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-8 col-lg-8">
                <div class="refferal_link">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Order Payment</h4>
                            <p>Your earn 5% of the Coins your referrals earn through an offer ! Give them this
                                link
                                to sign up and you’re good to go</p>

                            <div class="referral_form">
                                <form onSubmit={checkout} >
                                    <div class="form-row align-items-center">
                                        <div class="form-group col-xl-8">
                                            <label for="">Enter the amount</label>
                                            <input type="number" name="amount" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');" class="form-control"
                                                placeholder="Enter the amount " required/>
                                        </div>
                                        <div class="form-social col-xl-4">
                                        <button type="submit" style={{borderRadius: "30px","display": "block","font-size": "16px","padding": "15px","width": "100","font-weight": "500"}} class="btn btn-primary">CHECKOUT</button>
                                        </div>
                                    </div>
                                </form>
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