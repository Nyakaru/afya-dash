import React from 'react';
import { Avatar } from 'antd';

export const getUsernameAvatar = (username, size = 'large') => {
  return (
    <div>
      <Avatar
        style={{
          backgroundColor: '#4e1ed4',
          verticalAlign: 'middle',
        }}
        size={size}
      >
        {username ? username.charAt(0).toUpperCase() : ''}
      </Avatar>
    </div>
  );
};
