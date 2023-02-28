import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { name, hp, sprites } = pokemon
  const [ isFront, setIsFront ] = useState(true)

  const front = <img src={sprites.front} alt="oh no!" />
  const back = <img src={sprites.back} alt="oh no!" />

  const toggleImage = () => {
    setIsFront(isFront => !isFront)
  }

  return (
    <Card onClick={toggleImage}>
      <div>
        <div className="image">
          { isFront? front : back}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            HP {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
