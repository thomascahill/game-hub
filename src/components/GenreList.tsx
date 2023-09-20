import useGenres from "../hooks/useGenres";

export default function GenreList() {
  const { genres } = useGenres();

  let genresList = genres.map((genre) => {
    return <li key={genre.id}>{genre.name}</li>;
  });

  return (
    <>
      <ul>{genresList}</ul>
    </>
  );
}
