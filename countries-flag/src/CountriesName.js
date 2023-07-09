

function CountriesNames({props}) {

return props.map((country) => {
   return (
     <div className="card">
      
       <h3>{country.name}</h3>
       <p>Population:{country.population}</p>
       <p>Region:{country.region}</p>
       <p>Capital:{country.capital}</p>
     </div>
   );
});

}
export default CountriesNames;