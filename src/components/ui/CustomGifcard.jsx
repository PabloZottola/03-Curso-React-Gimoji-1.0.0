export const CustomGifcard = ({ dataGifs }) => {
  return (
    <ul className="cardGif grid gap-3 p-4 justify-items-center items-center border-t-2 border-gray-600">
      {dataGifs.map((gif) => (
        <li key={gif.id}>
          <img src={gif.images.fixed_width.url} alt="" />
        </li>
      ))}
    </ul>
  );
};
