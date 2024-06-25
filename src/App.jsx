import { Table } from "./components";
import { useState } from "react";
import { sortByDateThenViews, sortByViewsThenDate } from "./utils/helper";

function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const sortHandler = (sortBy) => {
    switch (sortBy) {
      case "sort by date": {
        let result = sortByDateThenViews(data);
        setData(result);
        break;
      }

      case "sort by views": {
        let result = sortByViewsThenDate(data);
        setData(result);
        break;
      }

      default:
        console.log("default");
    }
  };

  return (
    <>
      <h1>Date and Views Table</h1>
      <button onClick={() => sortHandler("sort by date")}>Sort by Date</button>
      <button onClick={() => sortHandler("sort by views")}>
        Sort by Views
      </button>
      <Table data={data} />
    </>
  );
}

export default App;
