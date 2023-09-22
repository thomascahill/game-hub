import { Heading } from "@chakra-ui/react";

import { GameQuery } from "../App";
import { useState, useEffect } from "react";

interface Props {
  gameQuery: GameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeTextColor = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  useEffect(() => {
    const timer = setInterval(changeTextColor, 2000);
    return () => clearInterval(timer);
  }, [currentColorIndex]);

  return (
    <>
      <Heading
        id="changingText"
        as="h1"
        fontSize="50px"
        color={colors[currentColorIndex]}
      >
        {heading}
      </Heading>
    </>
  );
}
