import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/images-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export default function GenreList({ selectedGenre, onSelectGenre }: Props) {
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
            objectFit="cover"
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Button
            whiteSpace="normal"
            textAlign="left"
            fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            onClick={() => onSelectGenre(genre)}
            fontSize="lg"
            variant="link"
            marginLeft={1}
          >
            <Text fontSize="lg">{genre.name}</Text>
          </Button>
        </HStack>
      </ListItem>
    );
  });

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>{genresList}</List>
    </>
  );
}
