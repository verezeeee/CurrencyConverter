import React from "react";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";

const getQuotation = async () => {
  const response = await axios.get(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL"
  );
  return response.data;
};

const MSelect = () => {
    const optionsSelect = Object.keys(getQuotation()).map((key) => ({
        value: key,
        label: key,
        }));
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getQuotation().then((data) => {
      const options = Object.keys(data).map((key) => ({
        value: key,
        label: key,
      }));
      setOptions(options);
    });
  }, []);
  return (
    <>
      <Select
      styles={{
        control: (provided, state) => ({
            ...provided,
            backgroundColor: '#fff',
            color: '#000',
            width: 303.33,
            height: 48,
            borderRadius: 5,
            border: 'none',
            boxShadow: 'none',
            fontSize: 20,
            fontWeight: 'bold',
            cursor: 'pointer',
            '&:hover': {
                border: 'none',
                boxShadow: 'none',
            },
            '&:focus': {
                border: 'none',
                boxShadow: 'none',
            },
        })
      }} 
      options={optionsSelect}>
        {/* {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))} */}
      </Select>
    </>
  );
};

export default MSelect;
