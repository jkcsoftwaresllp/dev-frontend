import React from 'react';

const UserItem = ({ user }) => {
  return (
    <tr className="user-row">
      <td className="user-name">
        {user.name}
      </td>
      <td className="user-username">
        {user.username}
      </td>
      <td className="user-email">
        {user.email}
      </td>
    </tr>
  );
};

export default UserItem;