import { createTheme,  } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";
import React from "react";

const theme = createTheme (
  {
    spacing:4,
    palette:{
      primary:{
        main:'red',
      }
    }
  }

);
export default theme