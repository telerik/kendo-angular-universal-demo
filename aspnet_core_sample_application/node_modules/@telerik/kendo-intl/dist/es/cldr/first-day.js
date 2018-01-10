import { cldr, getLocaleInfo } from './info';
import localeTerritory from './territory';

import { errors } from '../errors';

var NoWeekData = errors.NoWeekData;
var NoFirstDay = errors.NoFirstDay;

var DAYS = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];
var DEFAULT = '001';

export default function firstDay(locale) {
    var info = getLocaleInfo(locale);

    if (!isNaN(info.firstDay)) {
        return info.firstDay;
    }

    var weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw NoWeekData.error();
    }

    var firstDay = weekData.firstDay[localeTerritory(info)] || weekData.firstDay[DEFAULT];

    if (!firstDay) {
        throw NoFirstDay.error();
    }

    info.firstDay = DAYS.indexOf(firstDay);

    return info.firstDay;
}

//# sourceMappingURL=first-day.js.map
