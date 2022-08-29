import {
  Box,
  Grid,
  Container,
  Typography,
  Stack,
  Avatar,
  Button,
  Modal,
  Fade,
  Backdrop,
  TextField
} from '@mui/material';
import { useEffect, useState } from 'react';

import Page from '../components/Page';
import {
  AppNewsUpdate
} from '../components/_dashboard/app';


export default function DashboardApp() {

  const [users, setUsers] = useState([]);
  const [usersAdd, setUsersAdd] = useState(false);



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  }, [])




  return (
    <Page title="Dashboard-users">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              usuários
            </Typography>
            <Button
              variant="contained"
              onClick={() => setUsersAdd(true)}
            >
              Novo usuário
            </Button>
          </Stack>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <AppNewsUpdate users={users} />
          </Grid>
        </Grid>
      </Container>
      <ModalUsers usersAdd={usersAdd} setUsersAdd={setUsersAdd} />
    </Page>
  );
}


const ModalUsers = ({ usersAdd, setUsersAdd }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setUsersAdd(false);

  const [user, setUser] = useState({
    name: '',
    username: "",
    email: "",
    phone: ""
  })

  const newUser = () => {
    var myRequest = new Request('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      body: JSON.stringify(user),
    });

    fetch(myRequest)
      .then(function (response) {
        alert("usuario criado")
        setUsersAdd(false)
      })

  }

  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={!!usersAdd}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={usersAdd}>
        <Box sx={style}>
          <Typography id="spring-modal-title" variant="h6" component="h2">
            Adicionar usuário
          </Typography>
          <Stack mt={2} direction={{ xs: 'column', sm: 'column' }} spacing={2}>
            <TextField
              fullWidth
              label="name"
              onChange={e => setUser({ ...user, name: e.target.value })}

            />

            <TextField
              fullWidth
              label="username"
              onChange={e => setUser({ ...user, username: e.target.value })}

            />
            <TextField
              fullWidth
              type="email"
              label="email"
              onChange={e => setUser({ ...user, email: e.target.value })}

            />
            <TextField
              fullWidth
              type="phone"
              label="telefone"
              onChange={e => setUser({ ...user, phone: e.target.value })}

            />
          </Stack>
          <Button
            sx={{ mt: 2 }}
              variant="contained"
              onClick={newUser}
            >
              Novo usuário
            </Button>
        </Box>
      </Fade>
    </Modal>
  )
}


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '4px',
};