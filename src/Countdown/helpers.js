import spacetime from 'spacetime';
import { supportedCities } from './supportedCities';

export function whereIsIt4pm() {

    const s = spacetime();
    const names = spacetime.whereIts("5:00pm");

    const listOfCities = supportedCities.map(city => city.name);

    const cityname = listOfCities.filter(value => names.includes(value))[0];
    const zone = s.goto(cityname);
    
    const zoneInformation = supportedCities.filter(value => value.name === cityname)[0];
    

    var {city, country, drink, note} = zoneInformation;
    
    var minutes = zone.minute();
    minutes = minutes === 0 ? '59' : 59 - minutes

    var seconds = zone.second();
    seconds = seconds === 0 ? '59' : 60 - seconds;
    // add padding to seconds
    seconds = seconds.toString()
    if(seconds.length == 1) 
        seconds = seconds.padStart(2,'0');

    return {
        city,
        country,
        drink,
        note,
        time: zone.time(),
        offset: zone.timezone().current.offset,
        countdowm: {
            'minutes': minutes,
            'seconds': seconds,
        }
    }
}