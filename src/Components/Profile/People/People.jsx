import React, { useEffect, useState } from 'react'
import { getAccount } from '../../../Api/accounts'
import Filtre from '../../Fitler/Filtre'
import Header from '../../Header/Header'
import Account from '../Account/Account'
import Profile from '../Profile'

import "./People.scss"




const People = () => {
    const [profile, setProfile] = useState(false)
    const [account , setAccount] = useState()




    useEffect(async () => {
        let res = await getAccount()

           if (res.error != null){
            console.log("account  error======", res.error)
        }
        else{
            setAccount(res.data)
        }

    }, [])
    console.log("account are ==========", account)






    return (
        <>
            <div className="header__component">
                <Header />
            </div>

            <div className="pp__container">
                <div className="pp__header">
                    <div onClick={() => { setProfile(true) }} className={profile == true ? "header__btn1" : "header__btn2"}>
                        PROFILE
                    </div>
                    <div onClick={() => { setProfile(false) }} className={profile == true ? "header__btn2" : "header__btn1"}>
                        ACCOUNTS
                    </div>
                </div>

                <div className="pp__body">
                    {
                        profile == true ?
                            <Profile account={account} /> :
                            <Filtre account={account}  />
                    }
                </div>

            </div>

        </>
    )
}

export default People
