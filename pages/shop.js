import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import Layout from '../components/layout/Layout'
import PackageService from '../service/package.service';
import axios from 'axios';
import Welcome from "./shop-detail";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

function Blank() {
    const router = useRouter();
    const [datas, setDatas] = useState([])
    const BASE_URL = process.env.API_ENDPOINT;
    useEffect(async () => {
        if(router.query.message_checkout)
        {
            toast.success("Payment success!")
        }
        try {
            const res = await axios.get( 
                BASE_URL+'/api/list-shop',
              )
              const datapush = []
              for (let obj of res.data.result) {
                datapush.push(obj)
            }
            if(datas.length == 0){
                setDatas(datapush)
            }
            return datas
        } catch (err) {
            console.log(err);
        }
    }, [router.isReady]);
   
    return (
        <>
            <Layout subTitle="Software & Services" pageTitle="Software License">
            <ToastContainer/>
        <div class="gift_card">
            <div class="container">
                <div class="row">
                {datas.map((data, key) => {
          return (
            <div class="col-xl-3">
                        <div class="gift_card-content">
                            <div class="icon paypal">
                                <span><img src={data.image} alt=""/></span>
                            </div>
                            <h4>{data.name}</h4>
                            <p>{data.desc}</p>
                            <Link href={{ pathname: '/shop-detail', query: { id: data.id } }}><a class="paypal-btn wave-effect">SELECT</a></Link>
                        </div>
                    </div>
          );
        })}
                </div>
            </div>
        </div>

        </Layout>
        </>
    )
}

export default Blank