import { useState, useEffect } from "react";

export const useComparations = () => {

  const [isLoadingComparisons, setIsLoadingComparisons] = useState(true);
  const [comparisons, setComparisons] = useState([]);

  async function getComparison(url, xToken) {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      headers: {
        "x-token": xToken,
      },
    }).then((res) => res.json());
  }

  async function postComparison(url, xToken) {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: "POST",
      headers: {
        "x-token": xToken,
      },
    }).then((res) => res.json());
  }

  async function getComparations() {
    setIsLoadingComparisons(true);
    const token = JSON.parse(window.localStorage.getItem("userDataEva"))["token"];

    const comparisonsPromises = [
      getComparison("/deaths/aura/get_general_policies_comparator", token),
      postComparison("/deaths/active/get_policies_comparator", token),
      getComparison("/deaths/europea/get_policies_comparator", token),
      // getComparison("/deaths/fiatc/get_general_policies_comparator", token),
    ];

    try {
      const responses = await Promise.allSettled(comparisonsPromises);
      const comparisonsResponses = responses.map((res) => {
        if (res.status === "fulfilled") return res.value;
      });
      setComparisons(comparisonsResponses);
      // console.log(comparisonsResponses);
      setIsLoadingComparisons(false);
    } catch (e) {
      // console.log(`Error -> ${e}`);
    }
  }
  
  useEffect(() => {
    getComparations();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { comparisons, isLoadingComparisons };
}
