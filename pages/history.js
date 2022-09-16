import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Back to Home" pageTitle="Earning History">
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
                                    <div class="duration-option">
                                        <a class="active" href="#">All time</a>
                                        <a href="#">24 H</a>
                                        <a href="#">7D</a>
                                        <a href="#">14D</a>
                                        <a href="#">30D</a>
                                    </div>
                                </div>

                                <div class="history_table">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Gems</th>
                                                    <th scope="col">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>124412112414</td>
                                                    <td>Offer Toro</td>
                                                    <td>John Pemad</td>
                                                    <td>13.200 <span><img src="./images/svg/gem.svg" alt="" /></span></td>
                                                    <td>02 : 24 am</td>
                                                </tr>
                                                <tr>
                                                    <td>124412112414</td>
                                                    <td>Offer Toro</td>
                                                    <td>John Pemad</td>
                                                    <td>13.200 <span><img src="./images/svg/gem.svg" alt="" /></span></td>
                                                    <td>02 : 24 am</td>
                                                </tr>
                                                <tr>
                                                    <td>124412112414</td>
                                                    <td>Offer Toro</td>
                                                    <td>John Pemad</td>
                                                    <td>13.200 <span><img src="./images/svg/gem.svg" alt="" /></span></td>
                                                    <td>02 : 24 am</td>
                                                </tr>
                                                <tr>
                                                    <td>124412112414</td>
                                                    <td>Offer Toro</td>
                                                    <td>John Pemad</td>
                                                    <td>13.200 <span><img src="./images/svg/gem.svg" alt="" /></span></td>
                                                    <td>02 : 24 am</td>
                                                </tr>
                                                <tr>
                                                    <td>124412112414</td>
                                                    <td>Offer Toro</td>
                                                    <td>John Pemad</td>
                                                    <td>13.200 <span><img src="./images/svg/gem.svg" alt="" /></span></td>
                                                    <td>02 : 24 am</td>
                                                </tr>
                                                <tr>
                                                    <td>124412112414</td>
                                                    <td>Offer Toro</td>
                                                    <td>John Pemad</td>
                                                    <td>13.200 <span><img src="./images/svg/gem.svg" alt="" /></span></td>
                                                    <td>02 : 24 am</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <nav class="history_pagination">
                                    <ul class="pagination justify-content-end">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="#"><span><i class="fa fa-angle-left"></i></span></a>
                                        </li>
                                        <li class="page-item"><a class="page-link active" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#"><span><i class="fa fa-angle-right"></i></span></a>
                                        </li>
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