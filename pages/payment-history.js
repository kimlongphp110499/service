import Layout from '../components/layout/Layout'
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import Link from "next/link"
import { useRouter } from 'next/router';

function Blank() {
    const router = useRouter();
    const [datas, setDatas] = useState([])
    const [totalPage, setTotalPage] = useState([])
    const token = ''
    const ISSERVER = typeof window === "undefined";
    if (!ISSERVER) {
        token = localStorage.getItem("token");
        }
    const BASE_URL = 'http://127.0.0.1:8000';
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    useEffect(async () => {
        try {
            const GETURL = ''
            if(router.query.page)
            {
                GETURL = '/api/list-order-package?page='+router.query.page
            }
            else{
                GETURL ='/api/list-order-package'
            }
            const res = await axios.get( 
                BASE_URL + GETURL,
                config
              )
              const datapush = []
              const totalPagePush = []
              for (let obj of res.data.payments.data) {
                datapush.push(obj)
            }
            if(datas.length == 0 && res.data.payments.data.length){
                setDatas(datapush)
                for (const i = 1; i<= res.data.payments.last_page; i++) {
                    totalPagePush.push(i)
                }
                setTotalPage(totalPagePush)
            }
            console.log( res.data.payments.data.length);
            return datas
        } catch (err) {
            console.log(err);
        }
    });
    return (
        <>
            <Layout subTitle="Back to Home" pageTitle="Payment History">
                <div class="history">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="history_header">
                                    <div class="select_search">
                                        <div class="select_box">
                                            <select class="form-control">
                                                <option> Earnings</option>
                                                <option> Withdrawals</option>
                                                <option> Reversals</option>

                                            </select>
                                        </div>
                                        <div class="search">
                                            <form action="#">
                                                <input type="text" class="form-control" placeholder="Search history" />
                                                <span><i class="fa fa-search"></i></span>
                                            </form>
                                        </div>
                                    </div>
                                    {/* <div class="duration-option">
                                        <a class="active" href="#">All time</a>
                                        <a href="#">24 H</a>
                                        <a href="#">7D</a>
                                        <a href="#">14D</a>
                                        <a href="#">30D</a>
                                    </div> */}
                                </div>

                                <div class="history_table">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th style={{"width": "200px"}}>Payment ID</th>
                                                    <th style={{"width": "200px"}}>Method</th>
                                                    <th style={{"width": "200px"}}>Node</th>
                                                    <th style={{"width": "200px"}}>Bank Name</th>
                                                    <th style={{"width": "200px"}}>Total</th>
                                                    <th style={{"width": "250px"}}>Date</th>
                                                    <th style={{"width": "200px"}}>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {datas.map((data, key) => {
                                                return (
                                                    <tr>
                                                    <td style={{"width": "200px"}}>{data.id}</td>
                                                    <td style={{"width": "200px"}}>VNPAY</td>
                                                    <td style={{"width": "200px"}}>{data.p_node}</td>
                                                    <td style={{"width": "200px"}}>{data.p_code_bank}</td>
                                                    <td style={{"width": "200px"}}>{data.p_money}</td>
                                                    <td style={{"width": "250px"}}>{data.p_time}</td>
                                                    <td style={{"width": "200px"}}>{data.p_vnp_response_code == '00' ? 'Paid' : 'Unpaid'}</td> 
                                                  
                                                </tr>
                                                );
                                                })}
                                        
                                               
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <nav class="history_pagination">
                                    <ul class="pagination justify-content-end">
                                       
                                            
                                        {totalPage.map((data, key) => {
                                                return (
                                                    // <li class="page-item disabled">
                                                    //     <Link href={{ pathname: '/order-history', query: { page: data } }}><a class="paypal-btn wave-effect">{data}</a></Link>
                                                    // </li>
                                                    <li class="page-item "><a class={data == router.query.page ? 'page-link active': 'page-link'} href={'/payment-history?page='+data}>{data}</a></li>
                                                );
                                                })}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

export default Blank