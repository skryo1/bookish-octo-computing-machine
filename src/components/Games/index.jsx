import React, { useEffect, useState } from "react";
import GamesData from "../../data/games.json";
import Item from "./Item";
import Modal from "./Modal";

const Games = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const [universeData, setUniverseData] = useState();
  const getUniverseInfo = async (id) => {
    try {
      const response = await fetch(`https://games.roblox.com/v1/games?universeIds=4967899845`);
      const data = await response.json();
      setUniverseData(data[0]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getUniverseInfo(GamesData.universeId);
  }, []);

  return (
    <section
      id="games"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1500"
      className="pt-[280px] max-sm:pt-[320px] container2 pb-40 px-10"
    >
      <h2 className="flex [text-shadow:_1px_2px_2px_rgb(0_0_0_/_50%)] items-center justify-center text-4xl max-sm:text-2xl mt-4">
        OUR GAMES (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          fontSize="15"
          color="#2ca344"
          height="1em"
          width="1em"
          className="mr-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
        </svg>
        {"70M+ Visits"})
      </h2>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-8 mt-10">
        {GamesData?.games.map((game) => (
          <div key={game.id} className="group relative z-[1]">
            <Item
              game={game}
              setIsOpen={setIsOpen}
              setModalData={setModalData}
            />
          </div>
        ))}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalData={modalData} />
    </section>
  );
};

export default Games;
