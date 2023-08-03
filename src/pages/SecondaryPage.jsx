import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "./Main";

export default function SecondaryPage() {
  const location = useLocation();
  const joke = location?.state?.joke;
  // location?.state?.joke ||
  // "stop  clicking left and right.. website is under construction..   "; /*|| operator is used in this context as a fallback or default value. It's called the "logical OR" operator in JavaScript, and its behavior is as follows:

  // If the value on the left side of the || operator is "truthy" (i.e., not falsy, like null, undefined, 0, empty string, NaN, or false), it will be returned. Otherwise, the value on the right side of the || operator will be returned.*/

  //Check if joke is available
  const jokeAvailable = !!joke;

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const previousVisitorsCount = localStorage.getItem("visitorCount");
    console.log(previousVisitorsCount);
    if (previousVisitorsCount) {
      setVisitorCount(parseInt(previousVisitorsCount));
    }
  }, []);
  const handleLike = () => {
    if (clicked) {
      alert("Dislike option is already selected, click on Refresh");
    } else {
      setLikeCount((prevCount) => prevCount + 1);
      setClicked((prevClick) => !prevClick);
    }
  };

  const handleDislike = () => {
    if (clicked) {
      alert("Lke option is already selected, click on Refresh");
    } else {
      setDislikeCount((prevCount) => prevCount + 1);
      setClicked((prevClick) => !prevClick);
    }
  };
  useEffect(() => {
    setVisitorCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    localStorage.setItem("visitorCount", visitorCount);
  }, [visitorCount]);

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="w-4/5 md:w-3/5 bg-white rounded-lg shadow-lg p-8">
        {jokeAvailable ? (
          <>
            <h3 className="text-3xl font-semibold mb-4">
              We are working to meet your expectations!
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              But for now, just read the Joke and click the button:
            </p>
            <h2 className="text2 text-2xl uppercase mb-6">{joke}</h2>
            <div className="flex items-center mb-4">
              <span
                role="img"
                aria-label="Thumbs-up"
                className="thumbs-up-emoji cursor-pointer text-2xl mr-2"
                onClick={handleLike}
              >
                👍
              </span>
              <span className="text-lg">Like Count: {likeCount}</span>
            </div>
            <div className="flex items-center">
              <span
                role="img"
                aria-label="Thumbs Down"
                className="thumbs-down-emoji cursor-pointer text-2xl mr-2"
                onClick={handleDislike}
              >
                👎
              </span>
              <span className="text-lg">Dislike Count: {dislikeCount}</span>
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-2xl uppercase">
              Stop clicking left and right... website is under construction..
            </h2>
          </div>
        )}
        {/* Visitors Counter */}
        <div
          style={{
            position: "fixed",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "lightgrey",
            padding: "10px 20px",
            borderRadius: 5,
            fontWeight: "bold",
          }}
        >
          Visitors: {visitorCount}
        </div>
      </div>
    </div>
  );
}

/**
 * Understanding localStorage: localStorage is a web storage API in JavaScript that allows you to store key-value pairs in a web browser. Unlike session storage, localStorage persists even after the browser is closed and reopened. It provides a way to store data on the user's browser without any expiration date. This makes it a good option for maintaining data between sessions or for storing preferences, settings, or user-related data.

Using localStorage: To use localStorage, you can access the localStorage object provided by the browser. It has methods like setItem, getItem, removeItem, and clear to manage the data.

Storing Data in localStorage: To store data, use the setItem method, providing a key and its corresponding value as arguments.

localStorage.setItem("key", "value");

Retrieving Data from localStorage: To retrieve data, use the getItem method and provide the key for the value you want to retrieve.

const value = localStorage.getItem("key");

Removing Data from localStorage: To remove data, use the removeItem method and provide the key you want to remove.

localStorage.removeItem("key");

Clearing All Data from localStorage: To clear all data stored in localStorage, use the clear method.

localStorage.clear();






*/
