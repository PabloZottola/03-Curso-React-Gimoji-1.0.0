import { useState } from "react";
import { useAxios } from "./hook/useAxios";
import { CustomGifcard } from "./components/ui/CustomGifcard";
import { CustomCategory } from "./components/filters/CustomCategory";
import { CustomSearch } from "./components/filters/CustomSearch";
import { CustomBanner } from "./components/customBanner/CustomBanner";

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;

export const Gimoji = () => {
  const [textSearch, setTextSearch] = useState("memes");
  const limit = 32;
  const urlSearch = `search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0`;
  const urlCategories = `categories?api_key=${apiKey}`;
  const { dataApi: dataGifs, isLoading } = useAxios(urlSearch);
  const { dataApi: dataCategories } = useAxios(urlCategories);

  const onChangeData = (event) => {
    console.log(dataGifs[0] !== undefined);
    if (dataGifs[0] === undefined) {
      setTextSearch("all");
    } else {
      if (event.target.value.length === 0) {
        setTextSearch("all");
      } else {
        setTextSearch(event.target.value);
      }
    }
  };

  return (
    <main>
      <CustomBanner />
      <section className="flex items-center p-4 gap-4">
        <CustomCategory
          dataCategories={dataCategories}
          onChangeData={(event) => onChangeData(event)}
        />
        <CustomSearch onChangeData={(event) => onChangeData(event)} />
      </section>
      <section>
        {!isLoading ? (
          <p>Cargando....</p>
        ) : (
          <CustomGifcard dataGifs={dataGifs} />
        )}
      </section>
    </main>
  );
};
