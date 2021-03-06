import React from 'react';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import './App.scss';
import NavBar from './components/navbar/NavBar';
import ProfilePage from './pages/profile-page/ProfilePage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ProjectPage from './pages/project-page/ProjectPage';

type StateType = {
    transition?: string;
    timeout?: number;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type IndexProps = RouteComponentProps<{}, {}, StateType>;
const App: React.FC<IndexProps> = function ({ location }) {
    return (
        <>
            <NavBar />
            <TransitionGroup
                id="transition-group"
                childFactory={(child) =>
                    React.cloneElement(child, {
                        classNames: location.state ? location.state.transition : 'default',
                        timeout: location.state ? location.state.timeout : 0,
                    })
                }
            >
                <CSSTransition timeout={1500} key={location.key}>
                    <Switch location={location}>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/home" component={HomePage} />
                        <Route path="/about" component={ProfilePage} />
                        <Route exact path="/projects" component={ProjectPage} />
                        <Route path="/projects/:title" component={ProjectPage} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
};

export default withRouter(App);
