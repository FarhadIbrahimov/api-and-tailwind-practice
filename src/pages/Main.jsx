import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Main() {
  const [isClicked, setIsClicked] = useState(0);
  const [joke, setJoke] = useState("");
  const navigate = useNavigate();

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        console.log(response);
        setJoke(response.data.setup + "...   .." + response.data.punchline);
      }
    );
  };

  useEffect(() => {
    getJoke();
  }, [isClicked]);
  console.log(isClicked);

  function handleButton() {
    setIsClicked((previousClick) => previousClick + 1);
    navigate("/second", { state: { joke } }); // Pass the joke as state to the "/second" page
  }

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="w-4/5 md:w-3/5 bg-white rounded-lg shadow-lg p-8">
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full uppercase"
            onClick={handleButton}
          >
            Click Here
          </button>
        </div>
        <h2 className="text-2xl uppercase my-4">
          Sorry, actual website functionality is still under construction,
          meanwhile click for a little positivity
        </h2>
      </div>
    </div>
  );
}
