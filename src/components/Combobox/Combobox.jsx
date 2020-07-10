import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './Combobox.module.css';
import {getcountries} from '../../FetchData';


const Combobox = ({ handleCountryChange }) => {
    const [countriess, setCountries] = useState([]);

    useEffect(()=>{
        const countriesdata = async () =>{
            setCountries(await getcountries());
        }
        countriesdata();
    },[setCountries]);

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countriess.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default Combobox;