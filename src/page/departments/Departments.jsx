import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import Card from "../../components/card/Card";
import { dataDepartment, dataBreadCrumbs } from "../../constant";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
const StyleSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  h5 {
    margin: 0;
  }
  input {
    border: 1px solid black;
    border-radius: 100px;
    outline: none;
    padding: 6px 20px;
  }
  input:focus {
    border: 1px solid blue;
  }
`;

function Departments(props) {
  const path = useLocation();
  const [search, setSearch] = useState("");
  const [data, setData] = useState(dataDepartment);
  const typingRef = useRef(null);
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }
    typingRef.current = setTimeout(() => {
      handleFilter(value);
    }, 300);
  };
  const handleFilter = (value) => {
    if(value){
      const newData = [...data].filter((item) =>
        item.title.toLocaleLowerCase().includes(value)
      );
      setData(newData);
    }else{
      setData(dataDepartment)
    }
  };

  const getBreadCrumbs = () => {
    if (dataBreadCrumbs.find((item) => item.path === path.pathname)) {
      return dataBreadCrumbs.find((item) => item.path === path.pathname).title;
    } else {
      return "sai";
    }
  };

  return (
    <div className="container">
      <BreadCrumbs getBreadCrumbs={getBreadCrumbs} />
      <StyleSearch className="mt-4 mb-5">
        <h5>Search</h5>
        <input
          type="text"
          placeholder="Tìm chuyên khoa"
          onChange={handleSearch}
          value={search}
        />
      </StyleSearch>
      <StyleGrid>
        {data.map((item) => (
          <div key={item.id} style={{ cursor: "pointer" }}>
            <Card
              img={item.img}
              title={item.title}
              width={240}
              link={item.path}
            />
          </div>
        ))}
      </StyleGrid>
    </div>
  );
}

export default Departments;
