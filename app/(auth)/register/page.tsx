"use client";
import { useState } from 'react';
import Link from 'next/link'

export default function page() {

// States for registration
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [isCitizen, setIsCitizen] = useState('');
    const [isAdult, setIsAdult] = useState('');
    const [isChangeName, setIsChangeName] = useState('');
    const [isChangeAddress, setIsChangeAddress] = useState('');
    const [isEmployee, setEmployee] = useState('');
    const [birthday, setBirthday] = useState('');
    const [sex, setSex] = useState('');
    const [race, setRace] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [aptNo, setAptNo] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [municipality, setMunicipality] = useState('');
    const [county, setCounty] = useState('');
    const [isPermanentResidence, setIsPermanentResidence] = useState('');
    const [driverLicense, setDriverLicense] = useState('');
    const [socialNumber, setSocialNumber] = useState('');
    const [haveID, setHaveID] = useState('');
    const [isDemocratic, setDemocratic] = useState('');
    const [isRepublican, setRepublican] = useState('');
    const [isGreen, setGreen] = useState('');
    const [isLibertarian, setLibertarian] = useState('');
    const [isNone, setNone] = useState('');
    const [isOther, setIsOther] = useState('');
    const [other, setOther] = useState('');
    const [requireHelp, setRequireHelp] = useState('');
    const [languageHelp, setLanguageHelp] = useState('');
    const [previousName, setPreviousName] = useState('');
    const [previousAddress, setPreviousAddress] = useState('');
    const [voterNo, setVoterNo] = useState('');
    const [permanentBallot, setPermanentBallot] = useState('');
    const [assistantName, setAssistantName] = useState('');
    const [assistantAddress, setAssistantAddress] = useState('');
    const [assistantHp, setAssistantHp] = useState('');

// Handling the form submission
    const handleSubmit = (e:any) => {
        e.preventDefault();
        setSubmitted(true);
        setError(false);
        alert("test");
    };

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleLastName = (e:any) => {
        setLastName(e.target.value);
        setSubmitted(false);
    };

    const handleFirstName = (e:any) => {
        setFirstName(e.target.value);
        setSubmitted(false);
    };

    const handleEmail = (e:any) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handleTitle = (e:any) => {
        setTitle(e.target.value);
        setSubmitted(false);
    };

    const handleMiddleName = (e:any) => {
        setMiddleName(e.target.value);
        setSubmitted(false);
    };

    const handleIsCitizen = (e:any) => {
        setIsCitizen(e.target.value);
        setSubmitted(false);
    };

    const handleIsAdult = (e:any) => {
        setIsAdult(e.target.value);
        setSubmitted(false);
    };

    const handleIsChangeName = (e:any) => {
        setIsChangeName(e.target.value);
        setSubmitted(false);
    };

    const handleIsChangeAddress = (e:any) => {
        setIsChangeAddress(e.target.value);
        setSubmitted(false);
    };

    const handleEmployee = (e:any) => {
        setEmployee(e.target.value);
        setSubmitted(false);
    };

    const handleBirthday = (e:any) => {
        setBirthday(e.target.value);
        setSubmitted(false);
    };

    const handleSex = (e:any) => {
        setSex(e.target.value);
        setSubmitted(false);
    };

    const handleRace = (e:any) => {
        setRace(e.target.value);
        setSubmitted(false);
    };

    const handlePhone = (e:any) => {
        setPhone(e.target.value);
        setSubmitted(false);
    };

    const handleAddress = (e:any) => {
        setAddress(e.target.value);
        setSubmitted(false);
    };

    const handleAptNo = (e:any) => {
        setAptNo(e.target.value);
        setSubmitted(false);
    };

    const handleCity = (e:any) => {
        setCity(e.target.value);
        setSubmitted(false);
    };

    const handleState = (e:any) => {
        setState(e.target.value);
        setSubmitted(false);
    };

    const handleZipcode = (e:any) => {
        setZipcode(e.target.value);
        setSubmitted(false);
    };

    const handleMunicipality = (e:any) => {
        setMunicipality(e.target.value);
        setSubmitted(false);
    };

    const handleIsPermanentResidence = (e:any) => {
        setIsPermanentResidence(e.target.value);
        setSubmitted(false);
    };
    const handleDriverLicense = (e:any) => {
        setDriverLicense(e.target.value);
        setSubmitted(false);
    };
    const handleSocialNumber = (e:any) => {
        setSocialNumber(e.target.value);
        setSubmitted(false);
    };
    const handleHaveID = (e:any) => {
        setHaveID(e.target.value);
        setSubmitted(false);
    };
    const handleCounty = (e:any) => {
        setCounty(e.target.value);
        setSubmitted(false);
    };
    const handleDemocratic = (e:any) => {
        setDemocratic(e.target.value);
        setSubmitted(false);
    };
    const handleRepublican = (e:any) => {
        setRepublican(e.target.value);
        setSubmitted(false);
    };
    const handleGreen = (e:any) => {
        setGreen(e.target.value);
        setSubmitted(false);
    };
    const handleLibertarian = (e:any) => {
        setLibertarian(e.target.value);
        setSubmitted(false);
    };
    const handleNone = (e:any) => {
        setNone(e.target.value);
        setSubmitted(false);
    };
    const handleIsOther = (e:any) => {
        setIsOther(e.target.value);
        setSubmitted(false);
    };
    const handleRequireHelp = (e:any) => {
        setRequireHelp(e.target.value);
        setSubmitted(false);
    };
    const handleLanguageHelp = (e:any) => {
        setLanguageHelp(e.target.value);
        setSubmitted(false);
    };
    const handlePreviousName = (e:any) => {
        setPreviousName(e.target.value);
        setSubmitted(false);
    };
    const handlePreviousAddress = (e:any) => {
        setPreviousAddress(e.target.value);
        setSubmitted(false);
    };
    const handleVoterNo = (e:any) => {
        setVoterNo(e.target.value);
        setSubmitted(false);
    };
    const handlePermanentBallot = (e:any) => {
        setPermanentBallot(e.target.value);
        setSubmitted(false);
    };
    const handleAssistantName = (e:any) => {
        setAssistantName(e.target.value);
        setSubmitted(false);
    };
    const handleAssistantAddress = (e:any) => {
        setAssistantAddress(e.target.value);
        setSubmitted(false);
    };
    const handleAssistantHp = (e:any) => {
        setAssistantHp(e.target.value);
        setSubmitted(false);
    };

    return (
        <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1 mb-4">Voter Registration </h1>
                        <p className="text-xl text-gray-600">It takes an average of two minutes or less to complete.</p>
                    </div>

                    {/* Form */}
                    <div className="max-w-sm mx-auto">
                        <form >
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                                    <input id="email" onChange={handleEmail} value={email} type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="title">Title <span className="text-red-600">*</span></label>
                                    <input id="title" onChange={handleTitle} value={title} type="text" className="form-input w-full text-gray-800" placeholder="Enter your title  " required />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="firstName">First Name <span className="text-red-600">*</span></label>
                                    <input id="firstName" onChange={handleFirstName} value={firstName} type="text" className="form-input w-full text-gray-800" placeholder="Enter your first name  " required />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="middleName">Middle Name <span className="text-red-600">*</span></label>
                                    <input id="middleName" onChange={handleMiddleName} value={middleName} type="text" className="form-input w-full text-gray-800" placeholder="Enter your middle name  " required />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="isCitizen">Are you a citizen of the U.S.? <span className="text-red-600">*</span></label>
                                    <input id="isCitizen" onChange={handleIsCitizen} value={isCitizen} type="checkbox" className="form-input w-full text-gray-800" placeholder="Enter your middle name  " required />
                                </div>
                            </div>





                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="zipcode">Zip Code <span className="text-red-600">*</span></label>
                                    <input id="zipcode" type="text" className="form-input w-full text-gray-800" placeholder="Enter your zip code  " required />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mt-6">
                                <div className="w-full px-3">
                                    <button onClick={handleSubmit}  className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Register!</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
