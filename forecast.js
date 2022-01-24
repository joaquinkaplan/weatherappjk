const key = 'Aj5CUPrNJ3J88D3B7suFZqdbU9BztCod';




//GET WEATHER INFORMATION
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;


    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];


};


//getWeather("7894");


//GET CITY INFORMATION
const getCity = async (city) => {

const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const query = `?apikey=${key}&q=${city}`; //starts with '?' because it's a query

const response = await fetch(base + query);
const data = await response.json();

//console.log(data[0]);

return data[0];

};

//getCity('buenos aires').then(data => { return getWeather(data.Key);
//}).then(data => { console.log(data);
//}).catch(err => console.log(err));
