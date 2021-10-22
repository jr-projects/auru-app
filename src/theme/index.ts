import { createTheme } from "@mui/material";
import { blue, green } from "@mui/material/colors";

const AuruTheme = createTheme({
    palette: {
        primary: {
            main: blue[500]
        },
        secondary: {
            main: green[600]
        }
    },
    typography: {
        fontFamily: 'Montserrat',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700
    }
});

export default AuruTheme;