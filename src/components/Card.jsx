import React from "react";

function Card() {
  const data = [
    {
      name: "Amazon basics",
      price: 100,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbMQeuWEv13Skg6_4z2VCWA8Vmztsqxo25g&s",
      stock: true,
    },
    {
      name: "Daily needs",
      price: 500,
      img: "https://www.shutterstock.com/image-photo/kota-kinabalu-malaysia-november-25-600nw-1240734247.jpg",
      stock: false,
    },
    {
      name: "Apple ",
      price: 500,
      img: "https://images.everydayhealth.com/images/diet-nutrition/apples-101-about-1440x810.jpg",
      stock: true,
    },
  ];
  return (
    <div className="card w-full h-screen bg-zinc-700 flex justify-center items-center gap-5">
      {data.map((item, index) => {
        return (
          <div key={index} className="w-52 px-1 py-1 bg-zinc-100 rounded-md ">
            <div className="w-full h-32 bg-zinc-400">
              <img
                className="w-full h-full object-cover object-center"
                src={item.img}
                alt=""
              />
            </div>
            <div className="px-3 py-4 ">
              <h1 className="font-bold py-3"> {item.name} </h1>
              <p className="text-sm"> {item.price} </p>
              <button
                className={`mt-3 w-full ${
                  item.stock ? "bg-blue-500" : "bg-red-500"
                } ${
                  item.stock ? "hover:bg-blue-700" : "hover:bg-red-700"
                } text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg`}
              >
                {item.stock ? "Add to cart" : "Out of stock"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
