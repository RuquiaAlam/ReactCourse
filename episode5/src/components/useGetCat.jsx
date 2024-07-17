import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetCat = () => {
  const {
    data,
    isLoading: isCatLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFunction: () => {
      return axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  const refetchData = () => {
    alert("Data Refetched");
    refetch();
  };

  return { data, isCatLoading, refetchData, error };
};
export default useGetCat;
