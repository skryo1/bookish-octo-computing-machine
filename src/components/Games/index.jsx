import React, { useEffect, useState } from "react";
import GamesData from "../../data/games.json";
import Item from "./Item";
import Modal from "./Modal";

const Games = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const [totalVisits, setTotalVisits] = useState(0);
  const [totalPlayers, setTotalPlayers] = useState(0);

  const getUniverseInfo = async (id) => {
    try {
      const response = await fetch(`https://games.roproxy.com/v1/games?universeIds=${id}`);
      const data = await response.json();
      return data.data[0];
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const fetchStats = async () => {
      let totalVisits = 0;
      let totalPlayers = 0;
      for (const game of GamesData.games) {
        const gameData = await getUniverseInfo(game.universeId);
        if (gameData) {
          totalVisits += gameData.visits;
          totalPlayers += gameData.playing;
        }
      }
      setTotalVisits(totalVisits);
      setTotalPlayers(totalPlayers);
    };

    fetchStats();
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
        {`${totalVisits.toLocaleString()} Visits | ${totalPlayers.toLocaleString()} Players`}
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
