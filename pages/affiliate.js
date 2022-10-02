import { useEffect, useRef, useState } from "react";
import Layout from '../components/layout/Layout';
import axios from 'axios';
import { useRouter } from 'next/router';

function Blank() {
    const router = useRouter();
    const [datas, setDatas] = useState([])
    const BASE_URL = process.env.API_ENDPOINT_1;
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    useEffect(async () => {
        const timer = setTimeout(async () => {
        try {
            const res = await axios.get(
                BASE_URL+'/api/affiliate',config
              )
            //   const datapush = []
            //   for (let obj of res.data) {
                // datapush.push(obj)
            // }
            if(datas.length == 0){
                setDatas(res.data)
            }
            return datas
        } catch (err) {
            console.log(err);
        }
    }, 1000);
        return () => clearTimeout(timer);
    }, [router.isReady]);
    return (
        <>
            <Layout subTitle="Affiliates" pageTitle="Affiliate Commission Manager">
        
                <div class="affiliates">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3">
                                <div class="credit">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Your Coins Credit</h4>
                                            <div class="credit-content">
                                            <div class="invited d-flex justify-content-between">
                                                <h6>Date Joins</h6>
                                                <h6 class="text-primary">{datas.day_created}</h6>
                                            </div>
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
                                                        <div class="form-social col-xl-6">
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
                                                               <a href="#" class="email">
                                                                    <span><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg></span>
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

export default Blank;