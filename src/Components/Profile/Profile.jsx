import { CircularProgress } from '@mui/material'
import React from 'react'
import "./Profile.scss"

const Profile = (props) => {

    console.log("masiler account detail is", props.account)
    return (
        <>
           {
           props.account == null ?
           <div className="loading" ><CircularProgress /></div>:
           <div className="pfile__container">
                <div className="pfile__heading">Profile</div>

                <div className="pfile__inputs">
                    <div className="input1">
                        <div className="input1__heading">CUSTOMER ID</div>
                        <input type="text" className="enter__input" value={props.account.customerId} />
                    </div>
                    <div className="input1">
                        <div className="input1__heading">Username</div>
                        <input type="text" className="enter__input" value={props.account.emailAddress} />
                    </div>
                    <div className="input1">
                        <div className="input1__heading">First Name</div>
                        <input type="text" className="enter__input" value={props.account.firstName} />
                    </div>
                    <div className="input1">
                        <div className="input1__heading">Last Name</div>
                        <input type="text" className="enter__input" value={props.account.lastName}/>
                    </div>
                    <div className="input1">
                        <div className="input1__heading">Date of Birth</div>
                        <input type="text" className="enter__input" value={props.account.dateOfBirth} />
                    </div>
                    <div className="input1">
                        <div className="input1__heading">Place of Birth</div>
                        <input type="text" className="enter__input" value={props.account.placeofBirth} />
                    </div>
                    <div className="input1">
                        <div className="input1__heading">Email Address</div>
                        <input type="text" className="enter__input" value={props.account.emailAddress}  />
                    </div>
                    <div className="input1">
                        <div className="input1__heading">Post Code</div>
                        <input type="text" className="enter__input" value={props.account.postCode}/>
                    </div>
                    <div className="input1">
                        <div className="input1__heading">Street & Street Number</div>
                        <input type="text" className="enter__input" value={props.account.street} />
                    </div>
                    <div className="input1">
                        <div className="input1__heading">City</div>
                        <input type="text" className="enter__input" value={props.account.city} />
                    </div>
                    <div className="input1">
                        <div className="input1__heading">Password</div>
                        <input type="text" className="enter__input" value="******************" />
                    </div>
                    <div className="input1">
                        <div className="input1__heading">Change Password</div>
                        <input type="text" className="enter__input" value="******************" />
                    </div>
                    <div className="input1">
                        <div className="input1__heading">IBAN</div>
                        <input type="text" className="enter__input" value="DE23 4324 5256 6524  6256 5425" />
                    </div>
                    <div className="input1">
                        <div className="input1__heading">Gurubook Admin Since</div>
                        <input type="text" className="enter__input" value="10.12.2021" />
                    </div>
                    <div className="input1">
                        <div className="input1__heading">Driving School Name</div>
                        <input type="text" className="enter__input" value="Fahrschule Mentor" />
                    </div>
                    <div className="input1">
                        <div className="input1__heading">Driving School City</div>
                        <input type="text" className="enter__input" value="Punjabi" />
                    </div>
                    <div className="input1">
                        <div className="input1__heading">Version</div>
                        <input type="text" className="enter__input" value="1.2.3 Beta" />
                    </div>
                    <div className="input1">
                        <div className="input1__heading">Last Update</div>
                        <input type="text" className="enter__input" value="15.02.2021" />
                    </div>
                </div>

                <div className="pfile__bottom__btn">
                    <div className="footer__btn">
                        UPDATE PROFILE
                    </div>
                </div>


            </div>}
        </>
    )
}

export default Profile
