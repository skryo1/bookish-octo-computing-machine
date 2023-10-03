import React from "react";
import GamesData from "../../data/games.json";
import Item from "./Item";

const Games = () => {
  return (
    <section id="games" className="pt-[200px] container2 pb-40 px-10">
      <h2 className="flex items-center justify-center text-4xl mt-4">OUR GAMES</h2>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-8 mt-10">
        {GamesData?.games.map((game) => (
          <div key={game.id} className="group relative z-[1]">
            <Item game={game} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
