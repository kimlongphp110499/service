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
    const BASE_URL = process.env.API_ENDPOINT;
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
              for (let obj of res.data.result.data) {
                datapush.push(obj)
            }
            if(datas.length == 0 && res.data.result.data.length){
                setDatas(datapush)
                for (const i = 1; i<= res.data.result.last_page; i++) {
                    totalPagePush.push(i)
                }
                setTotalPage(totalPagePush)
            }
            console.log(totalPage);
            return datas
        } catch (err) {
            console.log(err);
        }
    });
    return (
        <>
            <Layout subTitle="Back to Home" pageTitle="Order History">
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
                                                    <th style={{"width": "200px"}}>Order ID</th>
                                                    <th style={{"width": "200px"}}>Package ID</th>
                                                    <th style={{"width": "200px"}}>Max Device</th>
                                                    <th style={{"width": "200px"}}>Total</th>
                                                    <th style={{"width": "200px"}}>Exp Time</th>
                                                    <th style={{"width": "200px"}}>Date</th>
                                                    <th style={{"width": "200px"}}>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {datas.map((data, key) => {
                                                return (
                                                    <tr>
                                                    <td style={{"width": "200px"}}>HD{data.id}</td>
                                                    <td style={{"width": "200px"}}><Link href={{ pathname: '/shop-detail', query: { id: data.package_id } }}><a class="paypal-btn wave-effect">{data.package_id}</a></Link></td>
                                                    <td style={{"width": "200px"}}>{data.max_device} Device</td>
                                                    <td style={{"width": "200px"}}>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data.price)}</td>
                                                    <td style={{"width": "200px"}}>{data.exp_day_time} Days <span><img alt="" /></span></td>
                                                    <td style={{"width": "200px"}}>{data.created_at}</td>
                                                    <td style={{"width": "200px"}}>{data.status == 1 ? 'Paid' : 'Unpaid'}</td>
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
                                                    <li class="page-item "><a class={data == router.query.page ? 'page-link active': 'page-link'} href={'/order-history?page='+data}>{data}</a></li>
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