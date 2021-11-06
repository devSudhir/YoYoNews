import { SoloNewsItem } from "./SoloNewsItem";
import { v4 as uuid } from "uuid";
import { useEffect, useState, useContext } from "react";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { ThemeContext } from "./ThemeContext";

export const News = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const { darkTheme } = useContext(ThemeContext);

  if (darkTheme) {
    document.body.style.backgroundColor = "#333";
  } else {
    document.body.style.backgroundColor = "#eee";
  }

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let apiData = await axios.get(url);
    setData(apiData.data.articles);
    setTotalResults(apiData.totalResults);
    setLoading(false);
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let apiData = await axios.get(url);
    setData(data.concat(apiData.data.articles));
    setTotalResults(apiData.totalResults);
  };

  return (
    <div className="container marginTop80">
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={data.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          {data.map((ele) => (
            <SoloNewsItem ele={ele} id={uuid()} key={uuid()} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
