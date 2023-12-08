export const CustomCategory = ({ dataCategories, onChangeData }) => {
  return (
    <article>
      <select className="h-8" onChange={onChangeData}>
        <option defaultValue={true}>Selecciona una Categoria</option>
        {dataCategories.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </article>
  );
};
