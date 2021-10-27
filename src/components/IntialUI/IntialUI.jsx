import React from "react";

const getArticles = (writer) => {
  if (writer.toLowerCase() === "jk rowling") {
    return [
      {
        articleId: 1,
        title: "Harry Potter and the Sorcerer’s Stone Review",
        upvotes: 56,
        date: "12 / 23 / 2016",
      },

      {
        articleId: 2,
        title: "Harry Potter and the Half Blood Prince Review",
        upvotes: 2,
        date: "12 / 2 / 2016",
      },
      {
        articleId: 3,
        title: "Harry Potter and the Goblet of Fire Review",
        upvotes: 23,
        date: "11 / 2 / 2017",
      },
    ];
  } else return [];
};

const InitialUI = ({ name = "", setName, setArticles }) => {
  const onSubmitName = () => {
    let articles = getArticles(name);
    setArticles(articles);
  };
  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={(val) => {
            setName(val.target.value);
          }}
        />
      </label>
      <input
        type="submit"
        value="submit"
        onClick={onSubmitName}
        disabled={name.length === 0 ? true : false}
      />
    </div>
  );
};
export default InitialUI;
