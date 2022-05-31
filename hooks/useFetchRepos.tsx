import { useState, useEffect } from "react";
export const useFetchRepos = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async (pageNum: number) => {
      const data = await (
        await fetch(
          `https://api.github.com/search/repositories?q=created:>2022-05-01&sort=stars&order=desc&page=${pageNum.toString()}`
        )
      ).json();
      const { items } = data;
      // @ts-ignore
      setRepos([...repos, ...items]);
    };

    fetchData(page);
  }, [page]);

  return { repos, setPage };
};
