import React from "react";

function Card() {
  const data = [
    {
      name: "Amazon basics",
      price: 100,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbMQeuWEv13Skg6_4z2VCWA8Vmztsqxo25g&s",
    },
    {
      name: "Daily needs",
      price: 500,
      img: "https://www.shutterstock.com/image-photo/kota-kinabalu-malaysia-november-25-600nw-1240734247.jpg",
    },
    {
      name: "Apple ",
      price: 500,
      img: "https://images.everydayhealth.com/images/diet-nutrition/apples-101-about-1440x810.jpg",
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
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
