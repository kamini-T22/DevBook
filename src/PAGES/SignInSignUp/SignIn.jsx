
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { bgGradient } from './css';
import Iconify from '../newspage/iconify';

// ----------------------------------------------------------------------

export default function SignInView() {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
<br></br>
    <Link to="/home">
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
      >
        Sign In
      </LoadingButton></Link>
    </>
       
  );

  return (
    <Box
   sx={{
      ...bgGradient({
         color: alpha(theme.palette.background.default, 0.5),
         imgUrl: 'https://images.unsplash.com/photo-1559938534-b67c7e2d038a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }),
      minHeight: '100vh', // Set a minimum height to occupy the full viewport height
   }}
>
<br></br>
<br></br><br></br><br></br>

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
      <Card sx={{ p: 5, width: 1, maxWidth: 420 }}>
          <Typography variant="h4" alignContent={'center'}>Sign In</Typography>
          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:facebook-fill" color="#1877F2" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider>

          {renderForm}
          
          <Grid container>
          <Grid item>
          <Link to="/signup" variant="body2">
           {"Don't have an account? Sign Up"}
          </Link>
          </Grid>
          </Grid>
        </Card>
      </Stack>
    </Box>
  );
}
