import React, { useEffect, useState } from "react";
import Heroes from "../objeto/Heroes";
import axios from "axios";
export const Index = () => {
  const [data, setData] = useState(Heroes);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Headers);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [filter]);
  return (
    <div>
      <h2>concento de react</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="filter"
      />
      <ul className=" container border d-flex flex-wrap justify-content-between">
        {Heroes.map((item) => (
          <li className="border">
            {item.title}
            <img
              src={item.img}
              alt="imagen"
              className="d-flex "
              width="300"
              height={300}
            />
            {item.descript}
          </li>
        ))}
        <p>{2 + 7}</p>
      </ul>
    </div>
  );
};
