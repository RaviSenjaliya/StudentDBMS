import { Helmet } from 'react-helmet-async';
import { Container, Stack, Typography } from '@mui/material';
import AdmissionForm from './Admission/AdmissionForm';

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <AdmissionForm />
      </Container>
    </>
  );
}
