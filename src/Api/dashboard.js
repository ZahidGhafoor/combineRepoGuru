import axios from "../axiosInstance";

const dashboardControl = async () => {

    let token = localStorage.getItem("guruToken")

    let resolved = {
        data: null,
        error: null
    }

    try {
        let res = await axios({
            url: `dashboard-stats`,
            method: "GET",
            headers: {
                Authorization: `Bearer Bearer ${token}`
            },
        })
        resolved.data = res.data
    } catch (error) {
        if (error.response) {
            resolved.error = error.response.data.message;
        } else {
            resolved.error = "Something went wrong";
        }


    }
    return resolved
}

export { dashboardControl }



// 1=>Encapsulation:

// Encapsulation means Encapsulate the data means if define "a" varible in top and we again decalre varible named with "a" now this time code gives error but with the help of Encapsulation we make the varible private then and they are responsible for only that funciton and we are not able to call them outside of funciton and they behave loically means they are private

// ======================================================OR=====================================================================

// Encapsulation is used to hide the values or state of object inside a class, preventing unauthorized parties' direct access to them.

// 1= Reduce Complexity
// 2= Increase Reusability


// 2=>Abstraction:

// Abstraction is the concept of OOP that “shows” only essential attributes and “hides” unnecessary information. The main purpose of abstraction is hiding the unnecessary details from the usersz


// 1= Simpler Interface
// 2= Reduce the impact of Change

// 3=>Inheritence

// Inheritance is the procedure in which one class inherits the attributes and methods of another class. ... And the class that inherits the properties from the parent class is the Child class
// 1= Eliminate Redundant Code

// 4=>Polymorphism

// It describes the concept that different classes can be used with the same interface. Each of these classes can provide its own implementation of the interface.
// 1= Many Forms
// 2= Remove ugly switch/case or if/else statements