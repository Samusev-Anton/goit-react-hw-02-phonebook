import React from 'react';
import { nanoid } from 'nanoid';
import { UserList, UserName } from './User.styled';
// let id = nanoid();

const User = ({ filter, onDeleteItem }) => {
  console.log(filter);
  return (
    <UserList>
      {filter.map(({ name, number }, id = nanoid()) => (
        <UserName key={id}>
          <span>
            {name}:{number}
          </span>
          <button type="button" onClick={() => onDeleteItem(id)}>
            Delete
          </button>
        </UserName>
      ))}
    </UserList>
  );
};

export default User;
