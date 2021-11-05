import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { stringAvatar } from '../utils/stringUtils';

export default function GroupAvatars({ users }) {
  return (
    users.length > 0 && (
      <AvatarGroup max={4}>
        {users.map((user) => (
          <Avatar alt={user.alias} {...stringAvatar(user.alias)} />
        ))}
        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" /> */}
      </AvatarGroup>
    )
  );
}
