import axios from "axios";
import { useEffect, useState } from "react";

const urlApi = import.meta.env.VITE_URL_API;

const reqAxios = axios.create({
  baseURL: urlApi,
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const useAxios = (url) => {
  const [dataApi, setDataApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getFetch();
  }, [url]);

  const getFetch = async () => {
    setIsLoading(false);
    const resp = await reqAxios.get(url);
    const { data } = await resp.data;
    setIsLoading(true);
    setDataApi(data);
  };

  return {
    dataApi,
    isLoading,
  };
};
