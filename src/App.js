import './App.css';
import React from 'react'
import Home from './components/Home'
import UniversityInput from './components/UniversityInput';
import AidInput from './components/AidInput';
import Result from './components/Result';
import { AnimatePresence } from "framer-motion"
import { Route, Switch, useLocation } from "react-router-dom";
import { SchoolProvider } from './contexts/SchoolContext'
import {FormProvider} from './contexts/FormContexts'
import Footer from './components/widgets/Footer'
function App() {
  const currentRoute = useLocation();
  return (
      <SchoolProvider>
    <FormProvider>

        <div className="App">

          <AnimatePresence exitBeforeEnter>
            <Switch location={currentRoute} key={currentRoute.key}>
              <Route path="/" component={Home} exact/>
              <Route path="/school" component={UniversityInput} exact/>
              <Route path="/aid" component={AidInput} exact/>
              <Route path="/results" component={Result} exact/>

            </Switch>
          </AnimatePresence>
          <Footer/>
        </div>
    </FormProvider>
      </SchoolProvider>
  );
}

export default App;
