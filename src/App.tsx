import { gql, useQuery } from "@apollo/client";
import React from "react";
import "./App.css";
import { GetBooks } from "./__generated__/GetBooks";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery<GetBooks>(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log("data", data);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
