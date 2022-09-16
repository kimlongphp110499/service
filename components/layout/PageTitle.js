import React from 'react'

function PageTitle({ pageTitle, subTitle }) {
    return (
        <>

            <div class="page_title section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="page_title-content">
                                <p>{subTitle}</p>
                                <h3>{pageTitle}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ani-3">
                    <img src="./images/svg/brown_circle.svg" alt="" />
                </div>
                <div class="ani-4">
                    <img src="./images/svg/line.svg" alt="" />
                </div>
                <div class="ani-6">
                    <img src="./images/svg/circle2.svg" alt="" />
                </div>
                <div class="ani-7">
                    <img src="./images/svg/circleline.svg" alt="" />
                </div>
                <div class="ani-8">
                    <img src="./images/svg/polygon.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default PageTitle
