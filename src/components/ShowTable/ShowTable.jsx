import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ShowTable.css";

const ShowTable = ({ articles = [] }) => {
  const [sortedArticles, setSortedArticles] = useState(articles);

  const sortValueOnTime = () => {
    let sortedOnTime = sortedArticles.sort((a, b) => {
      let date1 = a.date.split("/");
      let f1 = new Date(date1[2], date1[0] - 1, date1[1]);
      let date2 = b.date.split("/");
      let f2 = new Date(date2[2], date2[0] - 1, date2[1]);
      return f1 - f2;
    });
    setSortedArticles([...sortedOnTime]);
  };

  const sortValueOnRating = () => {
    let sortedOnUpvote = sortedArticles.sort((a, b) => a.upvotes - b.upvotes);
    console.log(sortedOnUpvote);
    setSortedArticles([...sortedOnUpvote]);
  };

  return (
    <div>
      <table className="wp-table">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Dates</th>
          </tr>
          {sortedArticles.map((val, i) => (
            <tr key={i}>
              <th>
                <Link to="/description">{val.title}</Link>
              </th>
              <th>{val.upvotes}</th>
              <th>{val.date}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <input type="submit" value="Newest" onClick={sortValueOnTime} />
      <input type="submit" value="Top" onClick={sortValueOnRating} />
    </div>
  );
};
export default ShowTable;
