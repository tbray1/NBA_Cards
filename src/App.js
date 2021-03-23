import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import "./App.css";
import axios from "axios";
import Teams from "./components/Teams";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA`
      );

      setItems(result.data.teams);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Teams isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
