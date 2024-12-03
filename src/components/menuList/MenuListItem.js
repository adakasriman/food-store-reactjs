import React from 'react'

function MenuListItem({ name, price, image }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text bold">Price: ₹ {price}</p>
                </div>
            </div>
        </div>
    );
}

export default MenuListItem;
