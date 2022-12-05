import React from 'react';
import { nanoid } from 'nanoid';

// const id = nanoid();
// console.log(id);

const User = ({ events }) => {
  //   console.log(events);
  return (
    <ul>
      {events.map(({ name, number }) => (
        <li key={nanoid()}>
          {name}:{number}
        </li>
      ))}
    </ul>
  );
};

export default User;
