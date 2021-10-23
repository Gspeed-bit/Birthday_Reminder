import React from "react";

function List({ people }) {

  return (
    <div>
      {people.map((celebrant) => {
        const { age, id, name, image } = celebrant;
        return <article key={id} className="person">
            <img src={image} alt={name} />
           <div className ="text">
            <h4>{name}</h4>
            <p> {`${age} years`}</p>
            </div>
            </article>;
      })}
    </div>
  );
}

export default List;
