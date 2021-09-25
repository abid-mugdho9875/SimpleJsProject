const loadCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(json => displayCountries(json))
        .catch(err => console.log(err))

}
const displayCountries = (countries) => {
    console.log('ok')
    const countriesHtml = countries.map(country => getCountyHtml(country))
    console.log(countriesHtml)

}
const getCountyHtml = country => {
    return `
    <div>
    <h1>${country.name}</h1>
    <h3>${country.capital}</h3>
    <img src="${country.flag}">
    </div>
    `
}