import { Helmet } from 'react-helmet-async';
import { Container, Stack, Typography } from '@mui/material';

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          User
        </Typography>
      </Container>
    </>
  );
}
