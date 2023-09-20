import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

export default function GameGrid() {
  const { games, error } = useGames();

  let gamesList = games.map((game) => {
    return <GameCard key={game.id} game={game} />;
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {gamesList}
      </SimpleGrid>
    </>
  );
}
