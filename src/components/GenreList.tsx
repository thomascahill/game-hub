import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/images-url";

export default function GenreList() {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

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
