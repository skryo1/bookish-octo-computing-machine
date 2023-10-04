import React, { useState, useEffect } from "react";
import { Truncate } from "../../utils/TruncateText";
import PlaceholderImage from '../../assets/placeholder.jpg';

const Item = ({ game }) => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Define the URL for the API request
    const apiUrl = "https://games.roblox.com/v1/games?universeIds=4967899845";

    // Make the API request
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Extract the data you need from the API response here
        // For example, if you want to set the text as the game name
        const gameName = data.data[0]?.name || "Default Game Name";

        // Set the extracted data as the text
        setApiData(gameName);
      })
      .catch((error) => {
        console.error("Error fetching API data:", error);
      });
  }, []);

  return (
    <div className="h-72 w-full">
      {/* Your image rendering code here */}
      <div className="transition-all ease-in duration-200 w-full h-full bg-[#000] rounded-lg bg-opacity-70 absolute top-0 left-0 z-[5] opacity-0 group-hover:opacity-100">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <p className="px-4 select-none text-white">
            {Truncate(game.details, 200)}
          </p>
          <a
            href={game.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-white bg-[#2ca344] hover:bg-[#18882e] py-2 px-4 rounded-lg font-normal ease-in duration-200"
          >
            {apiData || "Loading..."} Play
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;