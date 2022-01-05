import React from 'react';

const Filter = ({
    searchInput,
    setSearchInput,
    countries,
    setFiltered,
    setCountries,
}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
      }

      const searchCountries = (searchValue) => {
        setSearchInput(searchValue)
    
        if (searchInput) {
          const filteredCountries = countries.filter((country) =>
            Object.values(country)
              .join("")
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          )
          setFiltered(filteredCountries)
        } else {
          setFiltered(countries)
        }
      }

    return (
       <>
           <section className='filter'>
               <form className='form-control' onSubmit={handleSubmit}>
               <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search Country"
          onChange={(e) => searchCountries(e.target.value)}
        />
               </form>
           </section>
       </>
    )
}

export default Filter
