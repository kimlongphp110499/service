import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Back to Shop" pageTitle="Withdraw to Game - Skin">
        <div class="game_skin">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3">
                        <div class="game_skin-category card">
                            <div class="card-header">
                                <h4 class="card-title">Category</h4>
                            </div>
                            <div class=" card-body game_skin-category-list">
                                <ul class="nav nav-tabs">
                                    <li class="active">
                                        <a data-bs-toggle="tab" href="#csgo" class="active">
                                            <span class="checkbox"></span>
                                            <div class="d-flex csga">
                                                <img src="./images/game/csgo.png" alt="" class="me-3"/>
                                                <div class="flex-grow-1">
                                                    <p>CSGo Skin </p>
                                                </div>
                                                <span>(123)</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="tab" href="#dota">
                                            <span class="checkbox"></span>
                                            <div class="d-flex dota mb-0">
                                                <img src="./images/game/dota.png" alt="" class="me-3"/>
                                                <div class="flex-grow-1">
                                                    <p>Dota Skin </p>
                                                </div>
                                                <span>(123)</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9">

                        <div class="game_skin-header">
                            <div class="search_box">
                                <form action="#">
                                    <div class="form-group">
                                        <input type="text" class="form-control"
                                            placeholder="Search items by keywords, price, etc"/>
                                        <span><i class="la la-search"></i></span>
                                    </div>
                                </form>
                            </div>
                            <div class="sort_by">
                                <div class="drop-menu form-control">
                                    <div class="select">
                                        <span>Sort By</span>
                                        <i class="fa fa-angle-right"></i>
                                    </div>
                                    <input type="hidden" name="gender"/>
                                    <ul class="dropeddown">
                                        <li> Featured</li>
                                        <li> Price : High - Low</li>
                                        <li> Price : Low - High</li>
                                        <li> A - Z</li>
                                        <li> Z - A</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="game_skin-content">
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="csgo">
                                    <div class="row">
                                        <div class="col-xl-3">
                                            <div class="game_skin-card active">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img">
                                                    <img src="./images/game/knife.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Karambit</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img">
                                                    <img src="./images/game/knife.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Karambit</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img">
                                                    <img src="./images/game/knife.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Karambit</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img">
                                                    <img src="./images/game/knife.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Karambit</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img">
                                                    <img src="./images/game/knife.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Karambit</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img">
                                                    <img src="./images/game/knife.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Karambit</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img">
                                                    <img src="./images/game/knife.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Karambit</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img">
                                                    <img src="./images/game/knife.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Karambit</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img">
                                                    <img src="./images/game/knife.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Karambit</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img">
                                                    <img src="./images/game/knife.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Karambit</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img">
                                                    <img src="./images/game/knife.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Karambit</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img">
                                                    <img src="./images/game/knife.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Karambit</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="tab-pane fade" id="dota">
                                    <div class="row">
                                        <div class="col-xl-3">
                                            <div class="game_skin-card active">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img dota_skin">
                                                    <img src="./images/game/dota_skin.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Dota Skin</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img dota_skin">
                                                    <img src="./images/game/dota_skin.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Dota Skin</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img dota_skin">
                                                    <img src="./images/game/dota_skin.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Dota Skin</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img dota_skin">
                                                    <img src="./images/game/dota_skin.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Dota Skin</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img dota_skin">
                                                    <img src="./images/game/dota_skin.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Dota Skin</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img dota_skin">
                                                    <img src="./images/game/dota_skin.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Dota Skin</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img dota_skin">
                                                    <img src="./images/game/dota_skin.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Dota Skin</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img dota_skin">
                                                    <img src="./images/game/dota_skin.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Dota Skin</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img dota_skin">
                                                    <img src="./images/game/dota_skin.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Dota Skin</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img dota_skin">
                                                    <img src="./images/game/dota_skin.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Dota Skin</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img dota_skin">
                                                    <img src="./images/game/dota_skin.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Dota Skin</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3">
                                            <div class="game_skin-card">
                                                <h5>421.300 <img src="./images/svg/gem.svg" alt=""/> </h5>
                                                <div class="game_skin-img dota_skin">
                                                    <img src="./images/game/dota_skin.png" alt="" class="img-fluid"/>
                                                </div>
                                                <div class="game_skin-info">
                                                    <div class="game_skin-text">
                                                        <span>FV:0.1</span>
                                                        <h6>Dota Skin</h6>
                                                        <p>Fade (Factory New)</p>
                                                    </div>
                                                    <a href="#">
                                                        <span><i class="fa fa-angle-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="text-center">
                                <a href="#" class="load_more">LOAD MORE</a>
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