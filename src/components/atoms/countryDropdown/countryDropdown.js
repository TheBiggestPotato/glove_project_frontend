import React, {useState} from 'react';
import Select from 'react-select';

import './countryDropdown.scss'
import axios from 'axios';

export default function CountryDropdown ({ selectedOptionCountry, setSelectedOptionCountry}) {
    const [myData, setMyData] = useState([]);
    
    // Get the country list
    React.useEffect(() => {
        axios.get('https://countriesnow.space/api/v0.1/countries')
                .then((resp) => {
                    const countries = [];
                    for (let i = 0; i < resp.data.data.length; i++) {
                        const country = resp.data.data[i];
                        countries.push({ value: country.iso2, label: country.country  });
                    }
                    setMyData(countries);
                }).catch((err)=> console.log(err))   
    }, []);

    const customStyles = {
      control: (provided, state) => ({
          ...provided,
          backgroundColor: 'white',
          color: 'white',
          borderRadius: '60px',
          border: '1px solid #0683B9',
          '&:hover': { borderColor: '#0683B9' },
      }),
  };

    return (
        <div>
          {selectedOptionCountry.value && (
            <Select
              styles={customStyles}
              required
              name='countryDropdown'
              className="react-select-container"
              classNamePrefix="react-select"
              menuPosition="fixed"
              defaultValue={selectedOptionCountry}
              onChange={setSelectedOptionCountry}
              options={myData}
              formatOptionLabel={(country) => (
                <div className='country-option'>
                  <img
                    src={`https://countryflagsapi.com/svg/${country.value}`}
                    alt='country-image'
                    crossOrigin='anonymous'
                  />
                  <span>{country.label}</span>
                </div>
              )}
            />
          )}
        </div>
      );
}