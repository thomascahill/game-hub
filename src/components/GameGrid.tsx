import React, { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  let gamesList = games.map((game) => {
    return <li key={game.id}>{game.name}</li>;
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>{gamesList}</ul>
    </>
  );
}
