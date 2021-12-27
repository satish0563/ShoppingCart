import React from "react";
import AppBarAndDrawer from "./AppBarAndDrawer/AppBarAndDrawer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { useTheme } from "./theme";
import { DataProvider } from "./Providers/DataProvider";
import Inbox from "./ReduxTable/inbox";
import ShopCart from "./ShopCart/Shop";
import Dashboardnew from "./Dashboard/Dashboard";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./ReduxTable/inboxSlice";
import { Provider } from "react-redux";
import Profile from "./Profile/Profile";

export default function App() {
  const store = configureStore({
    reducer: {
      people: peopleReducer,
    },
  });
  const [currentTheme, setCurrentTheme] = useTheme();
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={currentTheme}>
          <Provider store={store}>
            <DataProvider>
              <Router>
                <div>
                  <AppBarAndDrawer
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme}
                  />
                  
                  <Switch>
                   
                    <Route path="/profile">
                    <Profile />
                    </Route>
                    <Route path="/Dashboard">
                    <Dashboardnew
                     />
                   
                    </Route>
                    <Route exact path="/Shop">
                    <ShopCart/>
                    </Route>
                    
                   <Route path="/Inbox">
                   <Inbox />
                   </Route>
                    <Route path="/">
                      <ShopCart />
                    </Route>
                  </Switch>
                </div>
              </Router>
            </DataProvider>
          </Provider>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </>
  );
}
