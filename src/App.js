import React from "react";
import { useEffect, useState } from "react";
import Item from "./Item";
import { ErrorMessage, NoUserMessage } from "./error-messages";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [isError, setIsError] = useState(false);

  const url = "https://api.github.com/search/users?q=";

  const getDataItems = async () => {
    if (inputValue.length > 0) {
      const response = await fetch(url + inputValue);
      if (response.ok) {
        const data = await response.json();
        setMatchedUsers(
          data.items.filter((user) => {
            const regex = new RegExp(inputValue, "gi");
            return user.login.match(regex);
          })
        );

        setIsError(false);

        // console.log(data.items);
      } else {
        setIsError(true);
      }

      console.log(matchedUsers);
    }
  };

  useEffect(() => {
    getDataItems();
  }, [inputValue]);

  return (
    <React.Fragment>
      <h1>Github Typeahead</h1>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>

      {inputValue && matchedUsers.length !== 0 && !isError && (
        <section className="container">
          {matchedUsers.map((user) => {
            return <Item key={user.id} {...user} />;
          })}
        </section>
      )}

      {inputValue && !matchedUsers.length && !isError && <NoUserMessage />}

      {isError && <ErrorMessage />}
    </React.Fragment>
  );
}

export default App;
