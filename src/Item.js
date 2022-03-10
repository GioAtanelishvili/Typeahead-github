import React from "react";

function Item({ avatar_url, login, html_url }) {
  return (
    <article className="item">
      <img src={avatar_url} alt={login} />
      <div>
        <h4>{login}</h4>
        <p>
          <a href={html_url} target="_blank" rel="noreferrer">
            Profile
          </a>
        </p>
      </div>
    </article>
  );
}

export default Item;
