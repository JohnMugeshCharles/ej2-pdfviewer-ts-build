define(["require", "exports", "./cldr-data/supplemental/numberingSystems.json", "./cldr-data/supplemental/currencyData.json", "./cldr-data/main/de/all.json", "./cldr-data/main/ar/all.json", "./cldr-data/main/fr-CH/all.json", "./cldr-data/main/en/all.json", "./cldr-data/main/zh/all.json", "@syncfusion/ej2-base", "./locale-string"], function (require, exports, numberingSystems, currencyData, deCultureData, arCultureData, swissCultureDate, enCultureData, chinaCultureData, ej2_base_1, locale_string_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadCultureFiles = void 0;
    var matchedCurrency = {
        'en': 'USD',
        'de': 'EUR',
        'ar': 'AED',
        'zh': 'CNY',
        'fr-CH': 'CHF'
    };
    function loadCultureFiles(stats) {
        (0, ej2_base_1.loadCldr)(numberingSystems, chinaCultureData, enCultureData, swissCultureDate, currencyData, deCultureData, arCultureData);
        ej2_base_1.L10n.load(locale_string_1.Locale);
        var cultureDropdown = document.getElementById('cultureID');
        var currencyDropdown = document.getElementById('currencyID');
        (0, ej2_base_1.setCulture)(cultureDropdown.value);
        (0, ej2_base_1.setCurrencyCode)(currencyDropdown.value);
        cultureDropdown.oninput = function () {
            (0, ej2_base_1.setCulture)(cultureDropdown.value);
            (0, ej2_base_1.setCurrencyCode)(matchedCurrency[cultureDropdown.value]);
        };
        currencyDropdown.oninput = function () {
            (0, ej2_base_1.setCurrencyCode)(currencyDropdown.value);
        };
    }
    exports.loadCultureFiles = loadCultureFiles;
});
