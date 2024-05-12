import React from "react";
import RaidsPicture from "./assets/raiding_2.png";
import MythicPlus from "./assets/mythicplus.png";
import PvP from "./assets/pvp.png";
import Mounts from "./assets/mounts.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h1>Who are we?</h1>
        <p>
          We are a group of gaming enthusiasts who enjoy spending quality time
          together in the World of Warcraft universe. While our guild primarily
          focuses on mythic raiding, we also engage in legacy content,
          achievement runs, Mythic+ challenges, PvP combat, and mount farming.
          The more challenging the task, the more we enjoy it. What sets our
          guild apart is its diverse core beyond just the mythic raiding team.
        </p>
        <div className="pictures">
          <img src={RaidsPicture}></img>
          <img src={MythicPlus}></img>
          <img src={PvP}></img>
          <img src={Mounts}></img>
        </div>
      </div>
    </section>
  );
}

export default About;
