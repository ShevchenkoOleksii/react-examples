import React, {useEffect, useState} from 'react';
// import axios from 'axios'
import UserData from './UserData'
import LoadingPersonsData from './LoadingPersonsData'
import VovaService from "./VovaService";


const Something = () => {
    const DataLoading =  LoadingPersonsData(UserData);
    // const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

    const [appState, setAppState] = useState(
        {
            loading: false,
            persons: null,
        }
    )

    useEffect(() => {
        setAppState({loading: true})
        VovaService.getProjects().then((resp) => {
            const allPersons = resp.data;
            setAppState({
                loading: false,
                persons: allPersons
            });
            console.log(resp)
            console.log(allPersons)
        });

    }, [setAppState]);


    return (
        <div className="app">
            <DataLoading isLoading={appState.loading} persons={appState.persons} />
        </div>
    );
};

export default Something;