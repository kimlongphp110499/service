import React from 'react'
import Layout from '../components/layout/Layout'

function Blank() {
    return (
        <>
            <Layout subTitle="Support System" pageTitle="Create Ticket">
                <div class="create_ticket-default">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="create_ticket-form card">
                                    <div class="card-header">
                                        <h4 class="card-title">Create</h4>
                                        <span>Cancel</span>
                                    </div>
                                    <div class="card-body">
                                        <form action="#">
                                            <div class="form-group">
                                                <label>What the type question do you want?</label>
                                                <select class="drop-menu form-control">

                                                    <option> <i class="checkbox"></i> Earning</option>
                                                    <option> <i class="checkbox"></i> Withdrawals</option>
                                                    <option> <i class="checkbox"></i> Profile</option>
                                                    <option> <i class="checkbox"></i> General</option>
                                                    <option> <i class="checkbox"></i> Others</option>

                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="">Employe Respond</label>
                                                <select class="drop-menu form-control">

                                                    <option> <i class="checkbox"></i> Earning</option>
                                                    <option> <i class="checkbox"></i> Withdrawals</option>
                                                    <option> <i class="checkbox"></i> Profile</option>
                                                    <option> <i class="checkbox"></i> General</option>
                                                    <option> <i class="checkbox"></i> Others</option>

                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="">What language do you prefer to be answered?</label>
                                                <select class="drop-menu form-control">

                                                    <option> <i class="checkbox"></i> Earning</option>
                                                    <option> <i class="checkbox"></i> Withdrawals</option>
                                                    <option> <i class="checkbox"></i> Profile</option>
                                                    <option> <i class="checkbox"></i> General</option>
                                                    <option> <i class="checkbox"></i> Others</option>

                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="">Please provide a description of the problem you are
                                                    encountering</label>
                                                <textarea name="" id="" rows="5" class="form-control"></textarea>
                                            </div>
                                            <div class="text-center">
                                                <button class="btn btn-primary">Create</button>
                                            </div>
                                        </form>
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