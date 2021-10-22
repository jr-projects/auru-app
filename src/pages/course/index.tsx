import { AppBar, Button, Fab, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from "react";
import IframeResizer from 'iframe-resizer-react'
import { useHistory } from "react-router-dom";

const Course = () => {
    const history = useHistory();
    useEffect(()=>{
        window.screen.orientation.lock('landscape');
        return(()=>{
            window.screen.orientation.unlock();
        })
    },[]);
    const onBackBtnClick = () => {
        history.goBack();
    };
    return(
        <Box>
            <Fab size="medium" color="secondary" aria-label="add"
                onClick={onBackBtnClick}
                sx={{position:'fixed', left: (theme)=> theme.spacing(2), top: (theme)=> theme.spacing(2)}}>
              <ArrowBackIcon />
            </Fab>
            <Box sx={{height:1}}>
                {/*<iframe src="https://www.gmtconline.com/story.html"
                    width="100%"
                    height="100%"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    frameBorder='none'></iframe>*/}
                <IframeResizer
                    heightCalculationMethod="lowestElement"
                    inPageLinks
                    src="https://www.gmtconline.com/story.html"                    
                    style={{ width: '1px', minWidth: '100%', minHeight:'100vh'}}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    frameBorder='none'
    >
                    
                </IframeResizer>
            </Box>

        </Box>
    );
}

export default Course;