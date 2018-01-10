import { cldr } from './info';
import loadNumbersInfo from './load-numbers';
import loadCalendarInfo from './load-dates';
import localeTerritory from './territory';

function loadLocale(locale, info) {
    for (var field in info) {
        if (field === "numbers") {
            loadNumbersInfo(locale, info[field]);
        } else if (field === "dates") {
            loadCalendarInfo(locale, info[field]);
        }
    }
}

export default function load() {
    var arguments$1 = arguments;

    var length = arguments.length;
    for (var idx = 0; idx < length; idx++) {
        var entry = arguments$1[idx];
        if (entry.main) {
            var locale = Object.keys(entry.main)[0];
            var info = entry.main[locale];
            var localeInfo = cldr[locale] = cldr[locale] || {};

            localeInfo.name = localeInfo.name || locale;
            localeInfo.identity = localeInfo.identity || info.identity;

            localeTerritory(localeInfo);
            loadLocale(locale, info);
        } else if (entry.supplemental) {
            if (entry.supplemental.weekData) {
                cldr.supplemental.weekData = {
                    firstDay: entry.supplemental.weekData.firstDay
                };
            } else {
                Object.assign(cldr.supplemental, entry.supplemental);
            }
        }
    }
}
//# sourceMappingURL=load.js.map
