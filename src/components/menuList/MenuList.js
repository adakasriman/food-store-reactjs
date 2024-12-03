import React, { useEffect, useState } from "react";
import MenuListItem from "./MenuListItem";
import { useParams } from "react-router-dom";

const breakfastItems = [
  {
    name: "Idly",
    price: 30,
    image: "https://media.istockphoto.com/id/1620129740/photo/selective-focus-of-south-indian-famous-food-idli-vada-with-sambar-and-chatney.jpg?s=612x612&w=0&k=20&c=sUepsZL9VXtY-J46o8pX0B06tXm-cgGGS-N5JIlaKUY=",
  },
  {
    name: "dosa",
    price: 40,
    image: "https://media.istockphoto.com/id/1367508718/photo/crispy-crepes-made-of-little-millets-and-lentils-commonly-known-as-little-millet-dosa-plated.jpg?s=612x612&w=0&k=20&c=h1OLjk3vrWAMpf11n04j7-ElsO3-SufhKitjt7LKXzk=",
  },
  {
    name: "Omelette",
    price: 6.49,
    image: "https://www.sweetashoney.co/wp-content/uploads/Omelette-2.jpg",
  },
  {
    name: "French Toast",
    price: 6.99,
    image: "https://bing.com/th?id=OSK.1943867ab5a26687f7c32ac21e3f1b38",
  },
  {
    name: "Bagel with Cream Cheese",
    price: 4.99,
    image: "https://az-wa-pr-rdb-cdn.azurewebsites.net/files/puckarabia-en/2744671471/5a76add8-e999-4d65-ac7b-fad4d9fad59e.jpg?preset=MobileLarge",
  },
  {
    name: "Coffee",
    price: 2.99,
    image: "https://th.bing.com/th/id/R.3c67e53d682589dcb8ce02dd3ac1e20c?rik=LeUqj%2bnBd3%2f0WA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f11%2f17%2f239445-coffee-coffee_beans-cup.jpg&ehk=%2bEd%2bhMjaHGMrExklwM9MNbALfkaDNqvDmS67gs%2bf2OA%3d&risl=&pid=ImgRaw&r=0",
  },
];
const lunchItems = [
  {
    name: "Chapathi",
    price: 30,
    image: "https://media.istockphoto.com/id/1134821325/photo/home-made-paneer-butter-masala-with-chapathi.jpg?s=612x612&w=0&k=20&c=iibDA5FZEUCyrF6AMfYq1Pjx4iFPw0qPgw78_-d1NR0=",
  },
  {
    name: "Meals",
    price: 80,
    image: "https://saihomefood.in/cdn/shop/products/meals.jpg?v=1571216142",
  },
  {
    name: "Lemon Rice;",
    price: 35,
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/lemon-rice-recipe.jpg",
  },
  {
    name: "Veg Biryani",
    price: 70,
    image: "https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot.jpg",
  },
  {
    name: "Zeera rice",
    price: 40,
    image: "https://www.whiskaffair.com/wp-content/uploads/2021/06/Jeera-Rice-2-1-1.jpg",
  },
  {
    name: "Curd Rice",
    price: 30,
    image: "https://www.chefkunalkapur.com/wp-content/uploads/2023/05/DSC09411-1300x731.jpg?v=1684031938",
  },
];
const dinnerItems = [
  {
    name: "Meals",
    price: 100,
    image: "https://saihomefood.in/cdn/shop/products/meals.jpg?v=1571216142",
  },
  {
    name: "Pulka",
    price: 40,
    image: "https://www.munatycooking.com/wp-content/uploads/2024/05/Phulka-Indian-flat-bread-4.jpg",
  },
  {
    name: "parota",
    price: 50,
    image: "https://media.istockphoto.com/id/1205482203/photo/kerala-parotta-popularly-known-as-paratha-or-porotta-is-a-delicacy-from-the-state-of-kerala.jpg?s=612x612&w=0&k=20&c=Yv6GQkzNErLM7NUA4q6S27FnFMT7yuC6RSCij5e2m0Y=",
  },
  {
    name: "rasam rice",
    price: 25,
    image: "https://moonrice.net/wp-content/uploads/2021/01/MilaguJeeraTomatoRasam.jpg",
  },
//   {
//     name: "",
//     price: 4.99,
//     image: "https://via.placeholder.com/150?text=Bagel+with+Cream+Cheese",
//   },
//   {
//     name: "Coffee",
//     price: 2.99,
//     image: "https://via.placeholder.com/150?text=Coffee",
//   },
];
const dessertsItems = [
  {
    name: "Cakes",
    price: 30 ,
    image: "https://media.istockphoto.com/id/1339241159/photo/set-of-different-delicious-cakes-isolated-on-white.jpg?s=612x612&w=0&k=20&c=i_OmAnqVaTFODI2f7DlCj45gKTSg01RfRrLY8_FC6E4=",
  },
  {
    name: "cookies",
    price: 20,
    image: "https://media.istockphoto.com/id/1334833946/photo/warm-cup-of-tea-with-tea-cookies-and-biscuits-on-a-plate.jpg?s=612x612&w=0&k=20&c=LpVbKa29DsUACYyXsewY6KRGTY5sEh5KQbd9F0zyrHE=",
  },
  {
    name: "pudding",
    price: 70,
    image: "https://media.istockphoto.com/id/878728270/photo/sweet-homemade-banana-pudding.jpg?s=612x612&w=0&k=20&c=jrTr7ISBebXy5vZYIvsvUh3WWo18Vr69ihAB3wTc0IM=",
  },
  {
    name: "chocolate mousse",
    price: 60,
    image: "https://media.istockphoto.com/id/180811737/photo/chocolate-mousse.jpg?s=612x612&w=0&k=20&c=X5oGiop0rBzSNhHPvlXESrAE9IR2dStJqRH9LiQ5xbc=",
  },
  {
    name: "Falooda",
    price: 70,
    image: "https://media.istockphoto.com/id/1067317950/photo/falooda.jpg?s=2048x2048&w=is&k=20&c=Vhk3vWGnhTAuWSjOF7QjNez9d6tHuNqVZt7TIuY225U=",
  },
  {
    name: "Rasmalai",
    price: 50,
    image: "https://media.istockphoto.com/id/2020580736/photo/rasmali-bengoli-sweet.jpg?s=1024x1024&w=is&k=20&c=qLjemHOCNP3Ei0Tt8cGH2XOuBbrRuXNbC7E5mpHbCxk=",
  },
];

const chineseItems = [
  {
    name: "Noodles",
    price: 80,
    image: "https://media.istockphoto.com/id/926663774/photo/pad-thai-vegetarian-vegetables-udon-noodles-in-a-dark-background-top-view-vegetarian-food-in.jpg?s=612x612&w=0&k=20&c=OYjE5_Z9_ZCpG0yNW9aVfVFp7l9n2AquesjHJWyZOq0=",
  },
  {
    name: "Gobi Manchuria",
    price: 50,
    image: "https://media.istockphoto.com/id/1957892968/photo/gobi-manchurian-served-in-dish-isolated-on-wooden-table-top-view-of-indian-spicy-food.jpg?s=612x612&w=0&k=20&c=BJwV1Rcnpt9nBNhmHGaDV-bghep8SGt-t8XY1XiG_1I=",
  },
  {
    name: "Egg rice",
    price: 70,
    image: "https://media.istockphoto.com/id/1397479529/photo/asian-chicken-fried-rice-with-chopsticks-directly-above-photo.jpg?s=612x612&w=0&k=20&c=xP1JCh1iiLGd5LiuDn2MQQ5iABiur6O_d2NMJkf3oPo=",
  },
  {
    name: "spring rolls",
    price: 50,
    image: "https://media.istockphoto.com/id/1313085999/photo/fried-vegetable-spring-rolls-with-sweet-chili-and-soya-sauce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=OM1OfrBS7D4666h9eZtztqFmQW0Ch15bcMcNbYhUBIo=",
  },
  {
    name: "chilli chicken",
    price: 130,
    image: "https://media.istockphoto.com/id/1072951288/photo/indian-chilli-chicken-dry-served-in-a-plate-over-moody-background-selective-focus.jpg?s=612x612&w=0&k=20&c=WkAg8lRGsRa4XLt90XdPKIdo5qGe_SfnGzqrNi8sp9g=",
  },
  {
    name: "Fried Rice",
    price: 45,
    image: "https://media.istockphoto.com/id/1390969031/photo/close-up-asian-chicken-fried-rice-popular-take-out-food.jpg?s=612x612&w=0&k=20&c=e0PX2y2kAXYKGiayVeQzjlr7jWzvYzdZw36uvIukdHI=",
  },
];
function MenuList() {
  const [menuDataList, setMenuDataList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    switch (id) {
      case "breakfast":
        setMenuDataList(breakfastItems);
        break;
      case "lunch":
        setMenuDataList(lunchItems);
        break;
      case "dinner":
        setMenuDataList(dinnerItems);
        break;
      case "desserts":
        setMenuDataList(dessertsItems);
        break;
      case "chinese":
        setMenuDataList(chineseItems);
        break;
      default:

        break;
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {menuDataList.length && menuDataList.map((item, index) => (
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
