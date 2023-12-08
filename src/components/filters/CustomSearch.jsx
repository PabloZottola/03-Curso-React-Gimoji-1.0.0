export const CustomSearch = ({ onChangeData }) => {
  return (
    <article>
      <input
        className="h-8 pl-2"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={onChangeData}
      />
    </article>
  );
};
