import React from 'react';
import MenuListItem from './MenuListItem';

function MenuList() {
    const breakfastItems = [
        {
            name: 'Scrambled Eggs',
            price: 5.99,
            image: 'https://via.placeholder.com/150?text=Scrambled+Eggs'
        },
        {
            name: 'Pancakes',
            price: 7.99,
            image: 'https://via.placeholder.com/150?text=Pancakes'
        },
        {
            name: 'Omelette',
            price: 6.49,
            image: 'https://via.placeholder.com/150?text=Omelette'
        },
        {
            name: 'French Toast',
            price: 6.99,
            image: 'https://via.placeholder.com/150?text=French+Toast'
        },
        {
            name: 'Bagel with Cream Cheese',
            price: 4.99,
            image: 'https://via.placeholder.com/150?text=Bagel+with+Cream+Cheese'
        },
        {
            name: 'Coffee',
            price: 2.99,
            image: 'https://via.placeholder.com/150?text=Coffee'
        }
    ];

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4"></h2>
            <div className="row">
                {breakfastItems.map((item, index) => (
                    <MenuListItem
                        key={index}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default MenuList;
