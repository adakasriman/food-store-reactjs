import React from 'react';
import { Link } from 'react-router-dom';

function MenuCards() {
    return (
        <div className="container mt-5 menu-cards">
            <h2 className="text-center mb-4">WelCome to Food Store</h2>
            <div className="row">
                <div className="col-md-4">
                    <Link to={'/dashboard/breakfast'}>
                        <div className="card cursor-pointer">
                            <div className="card-header bg-warning text-white">
                                <h4 className="card-title">Breakfast</h4>
                            </div>
                            <div className="card-body">
                                <h6>Time: 8:00 AM - 10:00 AM</h6>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-md-4">
                    <Link to={'/dashboard/lunch'}>
                        <div className="card cursor-pointer">
                            <div className="card-header bg-success text-white">
                                <h4 className="card-title">Lunch</h4>
                            </div>
                            <div className="card-body">
                                <h6>Time: 12:00 PM - 2:00 PM</h6>
                            </div>
                        </div>
                    </Link>

                </div>

                <div className="col-md-4">
                    <Link to={'/dashboard/dinner'}>
                        <div className="card cursor-pointer">
                            <div className="card-header bg-danger text-white">
                                <h4 className="card-title">Dinner</h4>
                            </div>
                            <div className="card-body">
                                <h6>Time: 7:00 PM - 9:00 PM</h6>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-md-4 mt-4">
                    <Link to={'/dashboard/desserts'}>
                        <div className="card cursor-pointer">
                            <div className="card-header bg-info text-white">
                                <h4 className="card-title">Desserts</h4>
                            </div>
                            <div className="card-body">
                                <h6>Time: Available all day</h6>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-md-4 mt-4">
                    <Link to={'/dashboard/chinese'}>
                        <div className="card cursor-pointer">
                            <div className="card-header bg-primary text-white">
                                <h4 className="card-title">Chinese Specials</h4>
                            </div>
                            <div className="card-body">
                                <h6>Time: 5:00 PM - 9:00 PM</h6>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default MenuCards;
