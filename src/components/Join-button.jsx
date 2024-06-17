import React from "react";

/*
function JoinButton() {
  return (
    <div className="questions">
      <button onClick={GenerateDIV} className="join-button">
        Join us!
      </button>
    </div>
  );
}
*/

function JoinButton() {
  return (
    <div className="questions">
      <button className="join-button">
        <a
          href="https://apply.wowaudit.com/eu/ragnaros/dirty-zuk-and-the-boyz/main?preview"
          target="_blank"
        >
          Join us!
        </a>
      </button>
    </div>
  );
}

export default JoinButton;