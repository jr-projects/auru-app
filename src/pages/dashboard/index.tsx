import { AppBar, Button, Grid, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu'
import { useHistory } from "react-router-dom";
// import useStyles from "./styles";

const Dashboard = () => {
    const history = useHistory();
    const onLaunchBtnClick = (id: number) => {
        history.push(`/course/${id}`)
    }
    return(
        <Grid>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography 
                            variant="h6" 
                            component="div" 
                            sx={{ flexGrow: 1, textAlign: 'left' }}>
                            Dashboard
                        </Typography>
                            <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Grid container spacing={2} sx={{mt:8}}>
                {[1,2,3,4,5,6,7,8,9,10].map((course)=>(
                    <Grid item xs={12} sm={6} md={3} key={course}>
                        <Paper sx={{p:2}}>
                            <Typography variant="h6">Course {course}</Typography>
                            <Button variant="contained" 
                                sx={{mt:2}}
                                onClick={() => onLaunchBtnClick(course)}>Launch</Button>
                        </Paper>
                    </Grid>
                ))
                } 
            </Grid>
        </Grid>
    )
};

export default Dashboard;