import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";
const bookDB = {
  webDev: [
    { name: "Frontend Masters", link: "https://frontendmasters.com/" },
    { name: "FreeCodeCamp", link: "https://www.freecodecamp.org/" },
  ],

  dataSciene: [
    {
      name: "datacamp",
      link: "https://www.datacamp.com/",
    },
    {
      name: "Data Analysis with Python",
      link: "https://www.freecodecamp.org/learn/data-analysis-with-python/",
    },
  ],
  competitiveCoding: [
    {
      name: "CodeChef",
      link: "https://www.codechef.com/",
    },
    {
      name: "codeForces",
      link: "https://www.codeForces.com/",
    },
  ],
};
const App = () => {
  const [categories, setCategories] = useState("webDev");

  return (
    <div className='App'>
      <Header />
      <div className='categories'>
        {Object.keys(bookDB).map((category) => (
          <button
            onClick={() => setCategories(category)}
            key={category}
            className='btn'>
            {category}
          </button>
        ))}
      </div>
      <hr style={{ color: "red" }} />
      <div className='data'></div>
      <ul
        style={{
          listStyle: "none",
        }}>
        {bookDB[categories].map((data) => (
          <li
            key={data.name}
            style={{
              listStyle: "none",
              padding: "1rem",
              border: "1px solid black",
              width: "70%",
              margin: "1rem 0rem",
              borderRadius: "0.5rem",
            }}>
            <div>{data.name}</div>
            <div
              style={{
                margin: "1rem auto",
                textDecoration: "none",
              }}>
              <a
                href={data.link}
                rel='noreferrer'
                target='_blank'
                style={{
                  color: "black",
                  margin: "1rem auto",
                  textDecoration: "none",
                  border: "1px solid black",
                  padding: "0.5rem",
                  borderRadius: "4px",
                }}>
                link
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
