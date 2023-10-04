import React from "react";
import { Truncate } from "../../utils/TruncateText";
import PlaceholderImage from '../../assets/placeholder.jpg'

const Item = ({ game, setIsOpen, setModalData }) => {
  return (
    <div className="h-72 w-full">
      {game?.image !== undefined && game?.image !== "" ? (
        <img
          src={game.image}
          alt={game.buttonLink}
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <img
          src={PlaceholderImage}
          alt={game.buttonLink}
          className="w-full h-full object-cover rounded-lg"
        />
      )}
      <div className="transition-all ease-in duration-200 w-full h-full bg-[#000] rounded-lg bg-opacity-70 absolute top-0 left-0 z-[5] opacity-0 group-hover:opacity-100">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <p className="px-4 select-none text-white">
            {Truncate(game.details, 200)}
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setModalData(game);
            }}
            className="mt-2 text-white bg-[#2ca344] hover:bg-[#18882e] py-2 px-4 rounded-lg font-normal ease-in duration-200"
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
