import timezone from './timezones'
import moment from 'moment';

export function getZoneInformation() {
    for ( var i = -12; i < 12; i++) {

        const m1 = moment().utcOffset(i);
        const hour = parseInt(m1.hour());
        const seconds = parseInt(m1.seconds());
        
        if(hour === 4) {
            return {
                'location': timezone[i],
                'countdowm': {
                    'minutes': hour === 0 ? '0' : 60 - m1.minutes(),
                    'seconds': seconds === 0 ? '0' : 60 - m1.seconds(),
                }
            }
        }    
    }
}