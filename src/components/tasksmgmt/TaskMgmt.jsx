import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import withNavigation from "./WithNavigation";
import withParams from "./WithParams";
import RouteAuthentication from './RouteAuthentication';
// import ServiceAuthentication from "./ServiceAuthentication";
import Header from "./Header";
import Footer from "./Footer";
import SigninPage from "./SigninPage";
import SignOut from "./SignOut";
import Dashboard from "./Dashboard";
import ListOfTasks from "./ListOfTasks";
import TaskactionItem from "./TaskactionItem";

class TaskMgmt extends Component {
    render() {
        const SigninPageWithNavigation = withNavigation(SigninPage);
        const DashboardWithParams = withParams(Dashboard);
        const HeaderWithNavigation = withNavigation(Header);
        const ListOfTasksWithNavigation = withNavigation(ListOfTasks);
        const ListOfTasksWithParamsAndNavigation = withParams(withNavigation(ListOfTasks));
        const TaskMgmtWithParamsandNavigation = withParams(withNavigation(TaskMgmt));
        const TaskactionItemWithParamsAndNavigation = withParams(withNavigation(TaskactionItem));

        return (
            <div className="TaskMgmt">
                {/* //if the route aka path is "" then we use component {} */}
                <Router>
                    <HeaderWithNavigation/>
                        <Routes>
                            <Route path="/" element={<SigninPageWithNavigation />} />
                            <Route path="/login" element={<SigninPageWithNavigation />} />
                            {/* <Route path="/dashboard/:user" element={<DashboardWithParams />} /> */}
                            <Route path="/dashboard/:user" element={
                                <RouteAuthentication>
                                    <DashboardWithParams /> 
                                </RouteAuthentication> } />
                            <Route path="/tasks/:id" element={ 
                                <RouteAuthentication>
                                    <TaskactionItemWithParamsAndNavigation />
                                </RouteAuthentication>
                            } />
                            <Route path="/tasks" element={
                                <RouteAuthentication>
                                    <ListOfTasksWithNavigation /> 
                                </RouteAuthentication> } />
                            {/* <Route path="/tasks/:id" element={ 
                                <RouteAuthentication>
                                    <ListOfTasksWithParamsAndNavigation />
                                </RouteAuthentication>
                            } /> */}
                            {/* might need to look into taking one of these tasks/:id's off if things stop working  */}
                            {/* <Route path="/tasks/:id" element={ 
                                <RouteAuthentication>
                                    <TaskMgmtWithParamsandNavigation />
                                </RouteAuthentication>
                            } /> */}
                            
                            <Route path="/logout" element={
                                <RouteAuthentication>
                                    <SignOut />
                                </RouteAuthentication>} />
                        </Routes>    
                    <Footer />
                </Router>
            </div>
            /* // <SigninPage></SigninPage>
            // <Dashboard></Dashboard> */
        )
    }
}





export default TaskMgmt