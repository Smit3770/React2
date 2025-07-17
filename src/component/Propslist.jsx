import React from 'react';

const Propslist = (props) => {
  return (
    <div>
      <ul>
        {props.list.map((item, i) => (
          <li key={i}>
            Name: {item.name}, Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Propslist;
