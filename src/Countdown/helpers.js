import spacetime from 'spacetime';
import { supportedCities } from './supportedCities';

/*
 * There was an issue where where its 5pm would give me zones off by 1 hour.
 * This will take out invalid city from the
 */
function validateZoneNames (names) {
    var validZones = []  
    for (const property in names) {
        const s = spacetime();
        const zone = s.goto(names[property]);
        var hours = zone.hour()

        var AmOrPm = hours >= 12 ? 'PM' : 'AM';
        hours = (hours % 12) || 12;

        try {
            let options = {
                timeZone: names[property],
                hour: 'numeric',
            },
            formatter = new Intl.DateTimeFormat([], options);    

            if(formatter.format(new Date()) === hours+" "+AmOrPm)
                validZones.push(names[property])

        } catch (err) {
            continue;
        }
    }

    return validZones
}

export function whereIsIt4pm() {

    var defaultInfo = {
        city : "N/A",
        country: "N/A",
        drink: "N/A",
        note: "N/A",
    }

    const s = spacetime();

    var names = spacetime.whereIts("5:00pm");
    var validNames = validateZoneNames(names)

    const listOfCities = supportedCities.map(city => city.name);
    const cityname = listOfCities.filter(value => validNames.includes(value))[0];
    
    const zone = s.goto(cityname);
    
    var zoneInformation = supportedCities.filter(value => value.name === cityname)[0];

    var { city, country, drink, note } = { ...defaultInfo, ...zoneInformation };
    
    var minutes = zone.minute();
    minutes = minutes === 0 ? '59' : 59 - minutes;

    var seconds = zone.second();
    seconds = seconds === 0 ? '59' : 60 - seconds;
    
    // add padding to seconds
    seconds = seconds.toString()
    if(seconds.length === 1) seconds = seconds.padStart(2,'0');

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