import { Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Layout from "./components/Layout";

//! the color
// the diffrent between the primary like this and the secondary is that the primary if we check the palette in the docs will find that there is light main and dark so when we implement it like this will change it to main and that set but in the secondary when we use the material ui colors it will change everything

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  // to change the font after importing in the index.css
  // check the docs in the Default Theme
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout>
          <Switch>
            <Route component={Notes} exact path="/" />
            <Route component={Create} exact path="/create" />
          </Switch>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
