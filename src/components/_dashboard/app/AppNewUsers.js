import { Link as RouterLink } from 'react-router-dom';

import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';

import Scrollbar from '../../Scrollbar';


function UsersItem({ user }) {
  const { address, company, email, id, name, phone, username, website } = user;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ minWidth: 240 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {website}
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {/* {formatDistance(postedAt, new Date())} */}
      </Typography>
    </Stack>
  );
}

export default function AppNewsUpdate({ users }) {

  console.log(users)

  return (
    <Card>
      <CardHeader title="Lista de usuarios" />
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          { users && users.map((user) => (
            <UsersItem key={user.id} user={user} />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}
