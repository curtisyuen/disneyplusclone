import disney from ".././assets/images/disney.png";
import marvel from ".././assets/images/marvel.png";
import nationalIG from ".././assets/images/nationalG.png";
import pixar from ".././assets/images/pixar.png";
import starwar from ".././assets/images/starwar.png";

import starwarV from ".././assets/videos/star-wars.mp4";
import disneyV from ".././assets/videos/disney.mp4";
import marvelV from ".././assets/videos/marvel.mp4";
import nationalIGeographicV from ".././assets/videos/national-geographic.mp4";
import pixarV from ".././assets/videos/pixar.mp4";

function ProductionHouse() {
  type ProductionHouseType = {
    id: number;
    image: string;
    video: string;
  };

  const productionHouseList: ProductionHouseType[] = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalIG,
      video: nationalIGeographicV,
    },
  ];

  return (
    <div className="flex overflow-x-auto gap-2 md:gap-5 p-2 px-5 md:px-16">
      {productionHouseList.map((item) => (
        <div
          key={item.id}
          className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer shadow-xl shadow-black"
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
          />
          <img src={item.image} className="w-full z-[1]" alt={item.image} />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
