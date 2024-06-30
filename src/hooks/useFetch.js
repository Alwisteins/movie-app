import { useState, useEffect } from "react";

const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Fetching error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};
