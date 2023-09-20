import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/images-url";

export default function GenreList() {
  const { data } = useGenres();

  let genresList = data.map((genre) => {
    return (
      <ListItem key={genre.id} paddingY="5px">
        <HStack>
          <Image
            boxSize="32px"
            borderRadius={8}
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Text fontSize="lg">{genre.name}</Text>
        </HStack>
      </ListItem>
    );
  });

  return (
    <>
      <List>{genresList}</List>
    </>
  );
}
