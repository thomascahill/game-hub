import useGenres from "../hooks/useGenres";

export default function GenreList() {
  const { data } = useGenres();

  let genresList = data.map((genre) => {
    return <li key={genre.id}>{genre.name}</li>;
  });

  return (
    <>
      <ul>{genresList}</ul>
    </>
  );
}
