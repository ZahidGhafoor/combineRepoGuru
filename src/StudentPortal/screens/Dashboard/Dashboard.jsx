import React, { useEffect } from 'react'
import Drawer from './components/Drawer/Drawer'
import Overview from './components/Overview/Overview'
import RightBar from './components/RightBar/RightBar'
import "./Dashboard.css"
import { Switch, Route, useHistory } from "react-router-dom"
import Chapters from './components/Chapters/Chapters'
import Chapter from './components/Chapter/Chapter'
import Questions from './components/Questions/Questions'
import PracticeSheets from './components/PracticeSheets/PracticeSheets'
import SuperQuestion from './components/SuperQuestion/SuperQuestion'
import MockTest from './components/MockTest/MockTest'
import Settings from './components/Settings/Settings'

const Dashboard = () => {
    const history = useHistory();
    useEffect(() => {
        if (history.location.pathname === "/dashboard") {
            history.push("/dashboard/overview")
        }
    }, [history.location.pathname])
    return (
        <Drawer>
            <Switch>
                <div className="dashboard__wrapper">
                    <div className="dashboard__main">

                        <Route exact path="/student/dashboard/overview" component={Overview} />
                        <Route exact path="/student/dashboard/chapters" component={Chapters} />
                        <Route exact path="/student/dashboard/chapters/:id" component={Chapter} />
                        <Route exact path="/student/dashboard/practice-sheets" component={PracticeSheets} />
                        <Route exact path="/student/dashboard/question-table" component={Questions} />
                        <Route exact path="/student/dashboard/mock-test" component={MockTest} />
                        <Route exact path="/student/dashboard/super-questions" component={SuperQuestion} />
                        <Route exact path="/student/dashboard/settings" component={Settings} />


                    </div>
                    <Route path="/dashboard/overview" component={RightBar} />


                </div>
            </Switch>
        </Drawer>
    )
}

export default Dashboard
