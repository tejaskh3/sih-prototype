import React, { useState } from 'react';
import authImageProviders from '../assets/left-bg-service-auth.png';

import {
  Box,
  Grid,
  Input,
  Typography,
  TextField,
  MenuItem,
  Button
} from '@mui/material';
import {
  signInWithGooglePopup,
  createServiceProviderDocumentFromAuth,
  createProviderFromEmailAndPassword,
  createUserFromEmailAndPassword
} from '../utils/firebase/firebase.utils';

const serviceProviders = [
  {
    value: 'advocate',
    label: 'Advocate'
  },
  {
    value: 'mediator',
    label: 'Mediator'
  },
  {
    value: 'notery',
    label: 'Notery'
  },
  {
    value: 'LegalFirm',
    label: 'Legal Frim'
  }
];

const defaultCredentials = {
  displayName: '',
  email: '',
  password: '',
  role: '',
  barCouncilId: ''
};
const ServiceProviderRegisterForm = () => {
  const [registerCredentials, setRegisterCredentials] =
    useState(defaultCredentials);
  const { displayName, email, password, role, barCouncilId } =
    registerCredentials;

  const handleChange = e => {
    const { name, value } = e.target;
    setRegisterCredentials({ ...registerCredentials, [name]: value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    try {
      let res = await createUserFromEmailAndPassword(email, password);
      console.log(res);
      res = { ...res, displayName };
      let ref = await createServiceProviderDocumentFromAuth(
        res.user,
        registerCredentials
      );
      console.log(ref);
      setRegisterCredentials(defaultCredentials);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('email already in use');
        return;
      }
      if (error.code === 'auth/weak-password') {
        alert('password is too weak keep at least 6 words');
        return;
      }
      console.log('error registering the service provider', error.message);
    }
  };
  const handleGooglePopup = async () => {
    const res = await signInWithGooglePopup();
    console.log(res.user);
    const ref = await createServiceProviderDocumentFromAuth(
      res.user,
      registerCredentials
    );
    console.log('service-provider ref', ref);
  };
  return (
    <Grid container spacing={1} color={'black'} x>
      <Grid item xs={6} md={7}>
        <Box
          component="div"
          sx={{
            backgroundImage: `url(${authImageProviders})`,
            backgroundRepeat: 'no-repeat',
            marginTop: '0',
            backgroundPosition: 'top',
            height: '100px',
            width: '100%',
            backgroundSize: 'contain',
            background: 'red'
          }}
        >
          {/* <img
            src={authImageProviders}
            alt=""
            styles={{ marginTop: '0', innerHeight: '80px' }}
          /> */}
        </Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Typography variant="h1" fontSize={'42px'} color={'rgba(18,17,39,.75)'}>
          Signing Up
        </Typography>
        <Typography variant="p" color={'rgba(18,17,39,.75)'}>
          Welcome to out legal duniya.
        </Typography>
        <Box
          component={'form'}
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '30px',
            textAlign: 'center'
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            name="displayName"
            value={displayName}
            required
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            type="email"
            label="Email"
            variant="outlined"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            value={password}
            onChange={handleChange}
            required
            type="password"
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your role"
            name="role"
            value={role}
            required
            onChange={handleChange}
          >
            {serviceProviders.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-basic"
            label="Bar Council Id"
            variant="outlined"
            name="barCouncilId"
            value={barCouncilId}
            required
            onChange={handleChange}
          />
          <Box
            component={'div'}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20%'
            }}
          >
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              Register
            </Button>
          </Box>
          <Box
            component={'div'}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: '5px'
            }}
          >
            <Typography variant="span">Didn't have account yet? </Typography>
            <Typography
              // variant="h6"
              // textAlign={'center'}
              sx={{
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'ease all 1.3s',
                  backgroundColor: '#3f43c8',
                  borderRadius: '5px',
                  color: '#fff'
                }
              }}
            >
              Create Account
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ServiceProviderRegisterForm;
