import { Avatar, Box, Button, Card, CardContent, Grid, TextField, Typography, Link, Stack } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useStyles from './styles';
import { useHistory } from "react-router-dom";

const Login = () => {

    const classes = useStyles;
    let history = useHistory();

    const onLoginClick = () => {
        history.push('/dashboard');
    }
    return(
        <>
            <Grid container
                justifyContent="center"
                alignItems="center"
                sx={classes.root}>
                <Grid item xs={12} sm={6} md={4} >
                    <Card>
                        <CardContent>
                            <Box display="flex" flexDirection="column"
                            justifyContent="center"
                            alignItems="center">
                                <Avatar>
                                    <AccountCircleIcon fontSize="large"></AccountCircleIcon>
                                </Avatar>
                                <Typography variant="h5">
                                    User Login
                                </Typography>
                            </Box>
                            <Box display="flex" flexDirection="column"
                            justifyContent="center"
                            alignItems="center">
                                <form>
                                    <TextField 
                                        variant="outlined" 
                                        label="Username"
                                        sx={classes.field}
                                        fullWidth ></TextField>
                                    <TextField 
                                        variant="outlined" 
                                        label="Password"
                                        type="password"
                                        sx={classes.field}
                                        fullWidth ></TextField>
                                    <Box sx={classes.footer}>
                                        <Button
                                            color="primary"
                                            fullWidth
                                            variant="contained"
                                            onClick={onLoginClick}>Login</Button>
                                        <Stack 
                                            direction="row"
                                            alignItems="center"
                                            justifyContent="space-between"
                                            sx={classes.footerbuttons}>
                                            <Link underline="always">
                                                Forgot password?
                                            </Link>
                                            <Button 
                                                color="secondary"
                                                variant="outlined">Create new account.</Button>
                                        </Stack>
                                    </Box>
                                    
                                </form>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
};

export default Login;