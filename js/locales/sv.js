(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Välj datum ...",
		        "buttonLabel": "Klicka eller tryck på Enter eller mellanslagstangenten för att öppna kalendern",
		        "prevButtonLabel": "Gå till föregående månad",
		        "nextButtonLabel": "Gå till nästa månad",
		        "closeButtonTitle": "Stänga",
		        "closeButtonLabel": "Stäng kalendern",
		        "prevMonthButtonLabel": "Gå till föregående år",
		        "prevYearButtonLabel": "Gå till föregående tjugo åren",
		        "nextMonthButtonLabel": "Gå till nästa år",
		        "nextYearButtonLabel": "Gå till de kommande tjugo åren",
		        "changeMonthButtonLabel": "Klicka eller tryck på Enter eller mellanslagstangenten för att ändra månad",
		        "changeYearButtonLabel": "Klicka eller tryck på Enter eller mellanslagstangenten för att ändra året",
		        "changeRangeButtonLabel": "Klicka eller tryck på Enter eller mellanslagstangenten för att gå till de kommande tjugo åren",
		        "calendarHelp": "- Uppåtpil och nedåtpil - går till samma veckodag i föregående eller nästa vecka respektive. Om slutet av månaden har nåtts, fortsätter till nästa eller föregående månad så är lämpligt.\r\n- Vänsterpil och högerpil - förskott en dag till nästa, även i ett kontinuum. Visuellt fokus flyttas från dag till dag och sveper från rad till rad i rutnätet dagar.\r\n- Kontroll + Page Up - Flyttar till samma tidpunkt föregående år.\r\n- Kontroll + Page Down - Flyttar till samma datum i nästa år.\r\n- Hem - Flyttar till den första dagen i den aktuella månaden.\r\n- End - Flyttar till den sista dagen i den aktuella månaden.\r\n- Page Up - Flyttar till samma tidpunkt föregående månad.\r\n- Page Down - Flyttar till samma datum i nästa månad.\r\n- Ange eller Espace - stänger kalendern, och det valda datumet visas i den tillhörande textrutan.\r\n- Escape - stänger kalendern utan några åtgärder."
		    },
		    "month_names": [
		        "januari",
		        "februari",
		        "mars",
		        "april",
		        "maj",
		        "juni",
		        "juli",
		        "augusti",
		        "september",
		        "oktober",
		        "november",
		        "december"
		    ],
		    "month_names_abbreviated": [
		        "jan.",
		        "feb.",
		        "mars",
		        "apr.",
		        "maj",
		        "juni",
		        "juli",
		        "aug.",
		        "sep.",
		        "okt.",
		        "nov.",
		        "dec."
		    ],
		    "month_names_narrow": [
		        "J",
		        "F",
		        "M",
		        "A",
		        "M",
		        "J",
		        "J",
		        "A",
		        "S",
		        "O",
		        "N",
		        "D"
		    ],
		    "day_names": [
		        "söndag",
		        "måndag",
		        "tisdag",
		        "onsdag",
		        "torsdag",
		        "fredag",
		        "lördag"
		    ],
		    "day_names_abbreviated": [
		        "sön",
		        "mån",
		        "tis",
		        "ons",
		        "tors",
		        "fre",
		        "lör"
		    ],
		    "day_names_short": [
		        "sö",
		        "må",
		        "ti",
		        "on",
		        "to",
		        "fr",
		        "lö"
		    ],
		    "day_names_narrow": [
		        "S",
		        "M",
		        "T",
		        "O",
		        "T",
		        "F",
		        "L"
		    ],
		    "day_periods": {
		        "am": "fm",
		        "noon": "på dagen",
		        "pm": "em"
		    },
		    "day_periods_abbreviated": {
		        "am": "FM",
		        "noon": "på dagen",
		        "pm": "EM"
		    },
		    "day_periods_narrow": {
		        "am": "f",
		        "noon": "p.d.",
		        "pm": "e"
		    },
		    "quarter_names": [
		        "1:a kvartalet",
		        "2:a kvartalet",
		        "3:e kvartalet",
		        "4:e kvartalet"
		    ],
		    "quarter_names_abbreviated": [
		        "K1",
		        "K2",
		        "K3",
		        "K4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "före Kristus",
		        "efter Kristus"
		    ],
		    "era_names_abbreviated": [
		        "f.Kr.",
		        "e.Kr."
		    ],
		    "era_names_narrow": [
		        "f.Kr.",
		        "e.Kr."
		    ],
		    "full_format": "EEEE d MMMM y",
		    "long_format": "d MMMM y",
		    "medium_format": "d MMM y",
		    "short_format": "y-MM-dd",
		    "firstday_of_week": 0
		};
	}
})();