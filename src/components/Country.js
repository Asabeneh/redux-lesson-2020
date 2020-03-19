import React from 'react'
import PropTypes from 'prop-types'

const Country = ({
  country: { name, capital, population, flag, languages }
}) => {
  console.log(languages)
  const langs = languages.map(lang => lang.name).join(', ')
  return (
    <div class='country'>
      <p className='country__name'>{name.toUpperCase()}</p>
      <p>Capital: {capital}</p>
      <p>Population: {population.toLocaleString()}</p>
      <p>Languages: {langs}</p>
      <img className='flag' src={flag} />
    </div>
  )
}

Country.propTypes = {}

export default Country
