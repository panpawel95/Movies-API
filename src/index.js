import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        color="blue"
        size={69}
        maxRaiting={10}
        onSetRating={setMovieRating}
      />
      ;<h1>This movie was rated {movieRating} stars</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRaiting={5}
      messages={["Terrible", "Bad", "OK!", "Good", "Amazing"]}
    />
    <StarRating maxRaiting={10} />
    <StarRating size={80} color="red" className="test" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
