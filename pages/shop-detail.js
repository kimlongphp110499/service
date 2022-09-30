import { useEffect, useRef, useState } from "react";
import Layout from '../components/layout/Layout'
import { useRouter } from 'next/router';
import PackageService from '../service/package.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Route from 'next/router';

function Welcome() {
    const router = useRouter();
    const [names, setNames] = useState([])
    const [packages, setPackages] = useState([])
    const [firstpackages, setFirstpackages] = useState([])
    const [activep, setActivep] = useState(1)
    const [activedevice, setActivedevice] = useState(0)
    const [activeday, setActiveday] = useState(0)
    const [price, setPrice] = useState(0)
    const [total, setTotal] = useState(0)
    const [sendPackageId, setSendPackageId] = useState(0)
    const resp =[]
    const resp1 =[]
    const resp2 =[]
     async function getDetailPackage(id){
        setPrice(0)
        setActiveday(0)
        setActivedevice(0)
        setTotal(0)
        setActivep(id)
        try {
            const data = await PackageService.getDetailById(id);
            const detailId = []
            detailId = (JSON.stringify(data.result))
              if(data.result.length > 0 ){
                setFirstpackages(JSON.parse(detailId))
              }
            
        } catch (err) {
            console.log(err);
        }
    }
    async function checkout(){
        if(total == 0)
        {
            toast.error("Payment Error!")
        }
        else{
            const resp = await PackageService.checkout(sendPackageId, total, activedevice, activeday);
            if(resp ==  false){
                toast.error("Checkout Error!")
            }
            else {
                Route.push('/shop',{query: { message_checkout: true }});
            }
        }
    }
    function renderTotalDay(num, money)
    {
        
        setPrice(money)
        setActiveday(num)
        const total_price = money*activedevice
        setTotal(total_price)

    }
    function renderTotalDevice(num, packageId)
    {
        setSendPackageId(packageId)
        setActivedevice(num)
        const total_price = num*price
        setTotal(total_price)
    }
     useEffect( async () => {   
        const timer = setTimeout(async () => {
            try {
                const queryid = router.query.id
                const data = await PackageService.getDetail(queryid);
                resp = (JSON.stringify(data.result))
                resp1 = (JSON.stringify(data.package_list))
                resp2 = (JSON.stringify(data.first_package_detail))
                  if(names.length == 0 ){
                    setNames(JSON.parse(resp))
                  }
                  if(packages.length == 0 ){
                    setPackages(JSON.parse(resp1))
                  }
                  if(firstpackages.length == 0 ){
                    setFirstpackages(JSON.parse(resp2))
                  }
                
            } catch (err) {
                console.log(err);
            }
        }, 1000);
        return () => clearTimeout(timer);
      }, [router.isReady]);
       return (
        <>
    <Layout subTitle="Back to Shop" pageTitle={names?.name}>
    <ToastContainer/>
    <div class="shop_withdraw">
        <div class="container">
            <div class="row">
                <div class="col-xl-3">
                    <div class="shop_card_desc">
                        <div class="card">
                            <div class="card-header">
                                <div class="icon paypal">
                                    <span><img src={names?.image} style={{"width":"100%"}} alt=""/></span>
                                </div>
                                <h4 class="card-title">{names?.name}</h4>
                            </div>
                            <div class="card-body">
                                <h5>Description :</h5>
                                <p>{names?.desc}
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
                                {/* <h4 class="card-title">{names?.name}</h4> */}
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label>Choose Package License</label>
                                        <ul class="choose_amount">
                                        {packages?.map((data, key) => {
                                          return (  <li class={activep == data.id? 'wave-effect active': 'wave-effect'} onClick={() => getDetailPackage(data.id)}>{data.name}</li>)})}   
                                        </ul>
                                    </div>
                                    <div class="form-group">
                                        <label>Choose Max Device</label>
                                        <ul class="choose_amount">
                                        {firstpackages?.map((data, key) => {
                                          return (  <li onClick={() => renderTotalDevice(data.max_device, data.package_id)} class={activedevice == data.max_device? 'wave-effect active': 'wave-effect'}>{data.max_device} Device</li>)})} 
                                            
                                        </ul>
                                    </div>
                                    <div class="form-group">
                                        <label>Exp Time License</label>
                                        <ul class="choose_amount">
                                        {firstpackages?.map((data, key) => {
                                          return (  <li onClick={() => renderTotalDay(data.exp_day_time, data.price)} class={activeday == data.exp_day_time? 'wave-effect active': 'wave-effect'}>{data.exp_day_time} Days</li>)})} 
                                        </ul>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Total coin</label>
                                        <input type="text" class="form-control" value={total} placeholder="Enter paypal address"/>
                                    </div>
                                    <div class="form-button">
                                        <p>USD account balance will be sent to your PayPal account. PayPal charges
                                            you a
                                            transaction fee of 2.9% + $0.30.</p>
                                        <button onClick={() => checkout()} type="button" class="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#popup_claim">Checkout</button>
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