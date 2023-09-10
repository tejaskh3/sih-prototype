import React, { useState } from 'react';
import authImageProviders from '../assets/left-bg-service-auth.png';
import styles from './SignInForm.module.css';

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
  createServiceProviderDocumentFromAuth
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
  email: '',
  password: '',
  role: '',
  barCouncilId: ''
};
const SignInForm = () => {
  const [loginCredentials, setLoginCredentials] = useState(defaultCredentials);
  const { email, password, role, barCouncilId } = loginCredentials;

  const handleChange = e => {
    const { name, value } = e.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(loginCredentials);
  };
  const handleGooglePopup = async () => {
    const res = await signInWithGooglePopup();
    console.log(res.user);
    const ref = await createServiceProviderDocumentFromAuth(res.user,loginCredentials);
    console.log('service-provider ref', ref);
  };
  return (
    <Grid container spacing={1} color={'black'} x>
      <Grid item xs={6} md={7}>
        <Box
          component="div"
          className={styles.image}
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
          Login to you account
        </Typography>
        <Typography variant="p" color={'rgba(18,17,39,.75)'}>
          See what is going on with your business.
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
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          {/* <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your role"
            name="role"
            value={role}
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
            onChange={handleChange}
          /> */}
          <Box
            component={'div'}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20%'
            }}
          >
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              Sign In
            </Button>
            <Button
              type="button"
              sx={{
                backgroundColor: '#3f43c8',
                color: '#fff',
                fontWeight: 'bold',
                '&:hover': {
                  color: 'blue'
                }
              }}
              onClick={handleGooglePopup}
            >
              Sign In WithGoogle
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

export default SignInForm;
