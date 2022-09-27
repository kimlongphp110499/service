import React from 'react'
import Layout from '../components/layout/Layout'
import { useEffect, useRef, useState } from "react";
import axios from 'axios';

function Blank() {
    const [top1, setTop1] = useState([])
    const [top3, setTop3] = useState([])
    const [top2, setTop2] = useState([])
    const [top10, setTop10] = useState([])
    const BASE_URL = 'http://127.0.0.1:8000';

    useEffect(async () => {
        try {
            const res = await axios.get( 
                BASE_URL+'/api/list-leader-board')
                if(top1.length == 0){
                    setTop1(res.data.top1)
                }
                if(top2.length == 0){
                    setTop2(res.data.top2)
                }
                if(top3.length == 0){
                    setTop3(res.data.top3)
                }
              const datapush = []
              for (let obj of res.data.top10) {
                datapush.push(obj)
            }
            if(top10.length == 0){
                setTop10(datapush)
            }
        } catch (err) {
            console.log(err);
        }
    });
    return (
        <>
            <Layout subTitle="Leaderboard" pageTitle="CoinGain Top Ranking">
    <div class="leaderboard">
        <div class="container">
            <div class="row">
                   <div class="leaderboard_tab_link">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-bs-toggle="tab" href="#alltime">All Time</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#week">Week</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#month">Month</a>
                            </li>
                        </ul>
                    </div>
                <div class="col-xl-6">
                    <div class="leaderboard_top_rank">
                        <div class="ani-17">
                            <img src="./images/svg/ani-17.png" alt=""/>
                        </div>
                        <div class="ani-18">
                            <img src="./images/svg/ani-18.png" alt=""/>
                        </div>
                        <div class="top_rank">
                        {top1 !== null && (
                            <div class="d-flex crown rank_ani1">
                                <div class="rank_icon">
                                    <img src="./images/svg/crown.svg" alt=""/>
                                </div>
                                <div class="flex-grow-1">
                                    <span class="circle"></span>
                                    <h6>First 1</h6>
                                    <h5>{top1.name}</h5>
                                    <p>19.280G</p>
                                </div>
                                <div class="prize">
                                    <h4> {top1.total}</h4>
                                    <div class="prize_gem">
                                        <span>Prize</span>
                                        <img src="./images/svg/gem.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        )}
                            {top2 !== null && (
                            <div class="d-flex cup rank_ani2">
                                <div class="rank_icon">
                                    <img src="./images/svg/cup.svg" alt=""/>
                                </div>
                                <div class="flex-grow-1">
                                    <span class="circle"></span>
                                    <h6>Second 2</h6>
                                    <h5>Peter Jay Smith Was</h5>
                                    <p>19.280G</p>
                                </div>
                                <div class="prize">
                                    <h4> 9.800</h4>
                                    <div class="prize_gem">
                                        <span>Prize</span>
                                        <img src="./images/svg/gem.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            )}
                            {top3 !== null && (
                                  <div class="d-flex medal rank_ani1">
                                  <div class="rank_icon">
                                      <img src="./images/svg/medal.svg" alt=""/>
                                  </div>
                                  <div class="flex-grow-1">
                                      <span class="circle"></span>
                                      <h6>Third 3</h6>
                                      <h5>Peter Jay Smith Was</h5>
                                      <p>19.280G</p>
                                  </div>
                                  <div class="prize">
                                      <h4> 9.800</h4>
                                      <div class="prize_gem">
                                          <span>Prize</span>
                                          <img src="./images/svg/gem.svg" alt=""/>
                                      </div>
                                  </div>
                              </div>
                            )}
                          
                        </div>
                    </div>



                </div>
                <div class="col-xl-6">

                    <div class="leaderboard_content">
                        <div class="leaderboard_tab">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="alltime">
                                    <div class="table-responsive">
                                    {top10.length > 0 && (
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Place</th>
                                                    <th scope="col">User </th>
                                                    <th scope="col">Credit <img src="./images/svg/gem.svg" alt=""/>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {(top10.map((data, key) => {
                                                return (
                                                    <tr>
                                                    <th scope="row">{key+4}</th>
                                                    <td class="user_circle"> <span class={'circle user'+(key+1)}></span>
                                                        <span>{data.name}</span>
                                                    </td>
                                                    <td>{data.total} <img src="./images/svg/gem.svg" alt=""/></td>
                                                </tr>
                                                );
                                                }))}                                               
                                                {/* <tr>
                                                    <th scope="row">05</th>
                                                    <td class="user_circle"> <span class="circle user2"></span> John
                                                        Pentol</td>
                                                    <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">06</th>
                                                    <td class="user_circle"> <span class="circle user3"></span>
                                                        Magda
                                                        Hera</td>
                                                    <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">07</th>
                                                    <td class="user_circle"> <span class="circle user4"></span>
                                                        Danielad
                                                        Dan</td>
                                                    <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">08</th>
                                                    <td class="user_circle"> <span class="circle user5"></span>
                                                        Henry
                                                    </td>
                                                    <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">09</th>
                                                    <td class="user_circle"> <span class="circle user6"></span>
                                                        Thomas C
                                                    </td>
                                                    <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">10</th>
                                                    <td class="user_circle"> <span class="circle user7"></span>
                                                        Paijoo
                                                    </td>
                                                    <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                </tr> */}
                                            </tbody>
                                        </table>
                                        )}
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="week">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Place</th>
                                                    <th scope="col">User </th>
                                                    <th scope="col">Credit <img src="./images/svg/gem.svg" alt=""/>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">04</th>
                                                    <td class="user_circle"> <span class="circle user1"></span>
                                                        Yeremias
                                                        NJ</td>
                                                    <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">05</th>
                                                    <td class="user_circle"> <span class="circle user2"></span> John
                                                        Pentol</td>
                                                    <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">06</th>
                                                    <td class="user_circle"> <span class="circle user3"></span>
                                                        Magda
                                                        Hera</td>
                                                    <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">07</th>
                                                    <td class="user_circle"> <span class="circle user3"></span>
                                                        Danielad
                                                        Dan</td>
                                                    <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">08</th>
                                                    <td class="user_circle"> <span class="circle user3"></span>
                                                        Henry
                                                    </td>
                                                    <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">09</th>
                                                    <td class="user_circle"> <span class="circle user3"></span>
                                                        Thomas C
                                                    </td>
                                                    <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">10</th>
                                                    <td class="user_circle"> <span class="circle user3"></span>
                                                        Paijoo
                                                    </td>
                                                    <td>13.200 <img src="./images/svg/gem.svg" alt=""/></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <div class="load_more">
                            <a href="#">Load More</a>
                        </div> */}
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