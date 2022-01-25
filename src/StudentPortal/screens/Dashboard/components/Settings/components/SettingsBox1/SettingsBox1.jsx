import React from 'react'
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import ReactLanguageSelect from 'react-languages-select';
import "./SettingsBox1.css"

const SettingsBox1 = () => {
    return (
        <div className="settings__box1">
            <h2 className="sb1__primary__heading">Change Language</h2>
            <div className="sb1__subheading">Exam Language</div>
            <div className="sb1__langinfo_desc">This is the language you will take your exam in. These are the only languages
                approved by the Federal ministry of  transport and digital infrastructure.</div>
            <div className="settings__box1_label">Country</div>
            <CountryDropdown id="UNIQUE_ID" className='sb1__phoneinfo_inputleft' preferredCountries={['gb', 'us']} value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>
            <br />
            <div className="sb1__subheading">Study Language</div>
            <div className="sb1__langinfo_desc">This is your primary language. You will prepare theory exam in this language. This
                language will run alongside the language that
                you have chosen above.</div>
            <div className="settings__box1_label">Language</div>
            <ReactLanguageSelect
                className="sb1__language_selector"
                defaultLanguage="en"
            />
            <div className="sb1__subheading">System Language</div>
            <div className="sb1__langinfo_desc">This is your system language. The Navigation will be shown in the language that you have chosen here.</div>
            <div className="settings__box1_label">Language</div>
            <ReactLanguageSelect
                className="sb1__language_selector"
                defaultLanguage="en"
            />
        </div>
    )
}

export default SettingsBox1
