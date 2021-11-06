import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const SoloNewsItem = ({ ele, id }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div key={id} className={`col ${darkTheme ? "bg-secondary" : "bg-light"}`}>
      <div className="card h-100">
        <img src={ele.urlToImage} className="card-img-top" alt={ele.content} />
        <div className={`card-body ${darkTheme ? "bg-secondary" : "bg-light"}`}>
          <h5 className="card-title">{ele.title}</h5>
          <p className="card-text my-1">{ele.description}</p>
          <p className="card-text my-1 footer-desc">
            Author: {ele.source.name || ele.author || "unknown"}
          </p>
          <p className="card-text my-1 footer-desc">
            Date: {new Date(ele.publishedAt).toGMTString()}
          </p>{" "}
        </div>
        <a className="btn btn-primary" href={ele.url} role="button">
          Read More...
        </a>
      </div>
    </div>
  );
};
