import { useEffect, useRef, useState } from "react";
import Layout from '../components/layout/Layout'
import { useRouter } from 'next/router';
import PackageService from '../service/package.service';
import axios from 'axios';

function Welcome() {
    const router = useRouter();
    const [name, setName] = useState(
        []
     )
    //  const [desc, setDesc] = useState(
    //     ''
    //  )
    //  const [image, setImage] = useState(
    //     ''
    //  )
    //  const [key, setKey] = useState(
    //     []
    //  )
    const BASE_URL = 'http://127.0.0.1:8000';
     const resp = []
     useEffect(async () => {
         
              resp = await PackageService.getDetail(router.query.id);
             
              try {
                const res = await axios.get( 
                    BASE_URL+'/api/detail-shop/'+router.query.id,
                  )
                  const datapush = []
                  for (let obj of res.data.result) {
                    datapush.push( res.data.result)
                }
                setName(datapush)
            } catch (err) {
                console.log(err);
            }
     });
    return <h1>Hello, {name}</h1>;
  }
 export default Welcome
// function Blank() {
//     return (
//         <>
//             <Layout subTitle="Back to Shop" pageTitle="Withdraw to PayPal">

//     <div class="shop_withdraw">
//         <div class="container">
//             <div class="row">
//                 <div class="col-xl-3">
//                     <div class="shop_card_desc">
//                         <div class="card">
//                             <div class="card-header">
//                                 <div class="icon paypal">
//                                     <span><img src="./images/svg/paypal.svg" alt=""/></span>
//                                 </div>
//                                 <h4 class="card-title">Paypal</h4>
//                             </div>
//                             <div class="card-body">
//                                 <h5>Description :</h5>
//                                 <p>PayPal is accepted where you shop - on over 75% of online merchants, from big
//                                     brands
//                                     to boutique sites. We send USD balance to your PayPal account. Start shopping
//                                     now!
//                                 </p>
//                             </div>
//                             <div class="card-footer">
//                                 <div class="website">
//                                     <span><img src="./images/svg/plane.svg" alt=""/></span>
//                                     <a href="#">
//                                         <p>Website</p>
//                                     </a>
//                                 </div>
//                                 <div class="help">
//                                     <span><img src="./images/svg/help.svg" alt=""/></span>
//                                     <a href="#">
//                                         <p>Help</p>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-xl-9">
//                     <div class="shop_card_content">
//                         <div class="card">
//                             <div class="card-header">
//                                 <h4 class="card-title">Paypal</h4>
//                             </div>
//                             <div class="card-body">
//                                 <form>
//                                     <div class="form-group">
//                                         <label>Choose Package License</label>
//                                         <ul class="choose_amount">
//                                             <li class="wave-effect active">Personals</li>
//                                             <li class="wave-effect">Business & Team</li>
//                                             <li class="wave-effect">Developer DDL</li>
//                                         </ul>
//                                     </div>
//                                     <div class="form-group">
//                                         <label>Choose Max Device</label>
//                                         <ul class="choose_amount">
//                                             <li class="wave-effect ">1 Device</li>
//                                             <li class="wave-effect active">5 Device</li>
//                                             <li class="wave-effect ">10 Device</li>
//                                             <li class="wave-effect ">15 Device</li>
//                                             <li class="wave-effect ">30 Device</li>
//                                             <li class="wave-effect ">50 Device</li>
//                                         </ul>
//                                     </div>
//                                     <div class="form-group">
//                                         <label>Exp Time License</label>
//                                         <ul class="choose_amount">
//                                             <li class="wave-effect ">3 Days</li>
//                                             <li class="wave-effect ">7 Days</li>
//                                             <li class="wave-effect ">30 Days</li>
//                                             <li class="wave-effect active">180 Days</li>
//                                             <li class="wave-effect ">365 Days</li>
//                                             <li class="wave-effect ">2000 Days</li>
//                                         </ul>
//                                     </div>
//                                     <div class="form-group">
//                                         <label for="">Set PayPal address</label>
//                                         <input type="text" class="form-control" placeholder="Enter paypal address"/>
//                                     </div>
//                                     <div class="form-button">
//                                         <p>USD account balance will be sent to your PayPal account. PayPal charges
//                                             you a
//                                             transaction fee of 2.9% + $0.30.</p>
//                                         <button type="button" class="btn btn-primary" data-bs-toggle="modal"
//                                             data-bs-target="#popup_claim">Withdraw</button>
//                                     </div>
//                                 </form>
//                                 <div class="alert alert-warning alert-dismissible fade show" role="alert">
//                                     Payment of 30,000G will be equivalent to $2.50 withdrawals
//                                     <div class="close" data-bs-dismiss="alert" aria-label="Close">
//                                         <span><i class="la la-close"></i></span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//     </Layout>
//         </>
//     )
// }

// export default Blank