import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import { SnackBarProvider } from './context/useSnackbarContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import './App.css';
import Calender from './pages/Calender/Calender';
import AppLayout from './components/AppLayout/AppLayout';
import { KanbanProvider } from './context/useKanbanContext';
import { AuthProvider } from './context/useAuthContext';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <SnackBarProvider>
            <KanbanProvider>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route
                  render={(props: RouteComponentProps) => (
                    <AppLayout {...props}>
                      <ProtectedRoute exact path="/" component={Dashboard} />
                      <ProtectedRoute path="/calender" component={Calender} />
                    </AppLayout>
                  )}
                />
                <Route path="*">
                  <Redirect to="/login" />
                </Route>
              </Switch>
            </KanbanProvider>
          </SnackBarProvider>
        </AuthProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
