import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontsource-roboto';
import React, { createContext, useState } from 'react';
import LeftDrawer from './components/leftdrawer';
import MainContent from './components/maincontent';
import PrimaryAppBar from './components/primaryappbar';

export const ClienteContext = createContext(null)
export const PageContentContext = createContext(null)

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  offset: theme.mixins.toolbar,
}));

const App = () => {

  const classes = useStyles();
  const [clientecontext, setClienteContext] = useState()
  const [pagecontentcontext, setPageContentContext] = useState()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ClienteContext.Provider value={{ clientecontext: clientecontext, setClienteContext: setClienteContext }} >
        <PageContentContext.Provider value={{ pagecontentcontext: pagecontentcontext, setPageContentContext: setPageContentContext }} >
          {/* não remover essas marcações div */}
          <div>
            <PrimaryAppBar />
          </div>
          <LeftDrawer />
          <div className={classes.content}>
            <div className={classes.offset} />
            <MainContent />
          </div>
        </PageContentContext.Provider>
      </ClienteContext.Provider>
    </div>
  );
}

export default App