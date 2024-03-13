import './App.css';
import React, { Suspense, lazy } from 'react'
import UniversityInput from './components/UniversityInput';
import AidInput from './components/AidInput';
import Result from './components/Result';
import { AnimatePresence } from "framer-motion"
import { Route, Switch, useLocation } from "react-router-dom";
import { SchoolProvider } from './contexts/SchoolContext'
import { FormProvider } from './contexts/FormContexts'
import Footer from './components/widgets/Footer'
const Home = lazy(() => import('./components/Home'));
function App() {

    const currentRoute = useLocation();
    return (
        <SchoolProvider>
            <FormProvider>

                <div className="App">

                    <AnimatePresence exitBeforeEnter>
                        <Suspense fallback={<div>Loading...</div>}>

                            <Switch location={currentRoute} key={currentRoute.key}>
                                <Route path="/" component={Home} exact />
                                <Route path="/school" component={UniversityInput} exact />
                                <Route path="/aid" component={AidInput} exact />
                                <Route path="/results" component={Result} exact />

                            </Switch>
                        </Suspense>
                    </AnimatePresence>
                    <Footer />
                </div>
            </FormProvider>
        </SchoolProvider>
    );
}

export default App;
