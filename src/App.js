import React, { useEffect } from 'react'
import "./App.css"
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

// Super Admin 1st phase
import SignIn from './Components/Login/Signin/SignIn';
import Home from './Components/Admin/Home/Home';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import Invoice from './Components/Invoices/Invoice1/Invoice';
import Filtre from './Components/Fitler/Filtre';
import PopUp from './Components/Popup/PopUp';

//  Student 2nd phase
import Dashboard from './StudentPortal/screens/Dashboard/Dashboard';
import Payment from './StudentPortal/screens/Payment/Payment';
import StudentSignIn from "./StudentPortal/screens/Login/Signin/StudentSignIn"
import Forgot from './Components/Login/forgot/Forgot';
import StudentForgot from './StudentPortal/screens/Login/forgot/StudentForgot';


// Admin(Reseller) 3rd phase
import AdminSignIn from "./Admin(Reseller)/Components/Login/Signin/AdminSignIn"
import AdminForgot from './Admin(Reseller)/Components/Login/forgot/AdminForgot';
import AddStudent from './StudentPortal/screens/Register/AddStudent';
import Slick from './StudentPortal/components/slick/Slick';
import JustQuestion from './StudentPortal/components/just_Question/JustQuestion';

const Protected = () => {
  let history = useHistory()
  useEffect(() => {
    let token = localStorage.getItem("guruToken")
    if (token) {

    } else {
      history.push("/signin")
    }
  }, [])

  return (
    <>
      <Route path='/invoice' component={Invoice} />
      <Route path='/filter' component={Filtre} />
      <Route path='/popup' component={PopUp} />
      <Route path='/' component={Home} />

    </>
  )
}

const App = () => {
  return (
    <div className="main__app">
      <Router>
        <Switch>

          <Route path='/signin' component={SignIn} />
          <Route exact path='/signup' component={AddAdmin} />
          <Route path='/forgot-password' component={Forgot} />
          <Route path='/popup' component={PopUp} />

          {/* Student 2nd phase */}
          <Route exact path="/student/payment" component={Payment} />
          <Route path="/student/dashboard" component={Dashboard} />
          <Route path="/student/signin" component={StudentSignIn} />
          <Route path="/student/forgot-password" component={StudentForgot} />
          <Route path="/student/register" component={AddStudent} />
          <Route path="/just" component={JustQuestion} />
          <Route path="/Slick" component={Slick} />

          {/* Admin(Reseller) 3rd phase */}
          <Route path="/admin/signin" component={AdminSignIn} />
          <Route path="/admin/forgot-password" component={AdminForgot} />



          <Protected />



        </Switch>

      </Router>

    </div>
  )
}

export default App
