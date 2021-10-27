import { useState, useEffect } from "react";
import { InitialUI, ShowTable } from "../../components";
import "./Home.css";
import Routes from "../../Routes";

function Home() {
  const [nameOfMovie, setNameNameOfMovie] = useState("");
  const [articles, setArticles] = useState();

  return (
    <div className="App">
      {!articles && (
        <InitialUI
          name={nameOfMovie}
          setName={setNameNameOfMovie}
          setArticles={setArticles}
        />
      )}
      {articles &&
        (articles.length > 0 ? (
          <ShowTable articles={articles} />
        ) : (
          <div> No Results</div>
        ))}
    </div>
  );
}

export default Home;
