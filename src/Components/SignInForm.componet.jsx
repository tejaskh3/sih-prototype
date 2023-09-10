import React from 'react';
import authImageProvidres from '../assets/left-bg-service-auth.png';
import styles from './SignInForm.module.css'
import {
  Box,
  Grid,
  Input,
  Typography,
  TextField,
  MenuItem,
  Button
} from '@mui/material';

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

const SignInForm = () => {
  return (
    <Grid container spacing={1} color={'black'} x>
      <Grid item xs={6} md={7} >
        <Box
          component="div"
          className={styles.image}
          sx={{
            backgroundImage: `url(${authImageProvidres})`,
            backgroundRepeat: 'no-repeat',
            marginTop: '0',
            backgroundPosition: 'top',
            height:'100px',
            width:'100%',
            backgroundSize: 'contain',
            background:"red",

          }}
        >
          {/* <img
            src={authImageProvidres}
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
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '30px'
          }}
        >
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your role"
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
          />
          <Button type="submit" variant="contained">
            Sign In
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignInForm;
{
  /* <Grid
      color={'black'}
      container
      // direction="column"
      justifyContent="space-between"
      height={'90vh'}
    >
      <Grid
        xs={12}
        sm={6}
        sx={{
          backgroundImage: `url(${authImageProvidres})`,
          backgroundRepeat: 'no-repeat',
          // justifyContent: 'center',
          backgroundPossition: 'top',
          backgroundSize: 'cover'
        }}
      ></Grid>

      <Grid xs={12} sm={6} direction="row">
        <Typography variant="h1" fontSize={'48px'}>
          Login to you account
        </Typography>
        <Typography variant="p">
          See what is going on with your business.
        </Typography>
        <Box
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '10px'
          }}
        >

            <Input placeholder="Enter your mail" />
            <Input placeholder="Enter your mail" />
            <Input placeholder="Enter your mail" />

        </Box>
      </Grid>
    </Grid> */
}
