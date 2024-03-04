export function getCurrencySymbol(iso,amount="",precision = 2) {

    const currencySymbols = {
        "AED": {
            symbol: "د.إ",
            format: "en-AE"
        },
        "AFN": {
            symbol: "؋",
            format: "ps-AF"
        },
        "ALL": {
            symbol: "L",
            format: "sq-AL"
        },
        "AMD": {
            symbol: "֏",
            format: "hy-AM"
        },
        "ANG": {
            symbol: "ƒ",
            format: "nl-AW"
        },
        "AOA": {
            symbol: "Kz",
            format: "pt-AO"
        },
        "ARS": {
            symbol: "$",
            format: "es-AR"
        },
        "AUD": {
            symbol: "$",
            format: "en-AU"
        },
        "AWG": {
            symbol: "ƒ",
            format: "nl-AW"
        },
        "AZN": {
            symbol: "₼",
            format: "az-Latn-AZ"
        },
        "BAM": {
            symbol: "КМ",
            format: "bs-Cyrl-BA"
        },
        "BBD": {
            symbol: "$",
            format: "en-BB"
        },
        "BDT": {
            symbol: "৳",
            format: "bn-BD"
        },
        "BGN": {
            symbol: "лв",
            format: "bg-BG"
        },
        "BHD": {
            symbol: "ب.د",
            format: "ar-BH"
        },
        "BIF": {
            symbol: "FBu",
            format: "fr-BI"
        },
        "BMD": {
            symbol: "$",
            format: "en-BM"
        },
        "BND": {
            symbol: "$",
            format: "ms-BN"
        },
        "BOB": {
            symbol: "Bs.",
            format: "es-BO"
        },
        "BRL": {
            symbol: "R$",
            format: "pt-BR"
        },
        "BSD": {
            symbol: "$",
            format: "en-BS"
        },
        "BTN": {
            symbol: "Nu.",
            format: "dz-BT"
        },
        "BWP": {
            symbol: "P",
            format: "en-BW"
        },
        "BYN": {
            symbol: "Br",
            format: "be-BY"
        },
        "BZD": {
            symbol: "BZ$",
            format: "en-BZ"
        },
        "CAD": {
            symbol: "$",
            format: "en-CA"
        },
        "CDF": {
            symbol: "FC",
            format: "fr-CD"
        },
        "CHF": {
            symbol: "CHF",
            format: "de-CH"
        },
        "CLP": {
            symbol: "$",
            format: "es-CL"
        },
        "CNY": {
            symbol: "¥",
            format: "zh-CN"
        },
        "COP": {
            symbol: "$",
            format: "es-CO"
        },
        "CRC": {
            symbol: "₡",
            format: "es-CR"
        },
        "CUC": {
            symbol: "$",
            format: "es-CU"
        },
        "CUP": {
            symbol: "$",
            format: "es-CU"
        },
        "CVE": {
            symbol: "$",
            format: "pt-CV"
        },
        "CZK": {
            symbol: "Kč",
            format: "cs-CZ"
        },
        "DJF": {
            symbol: "Fdj",
            format: "fr-DJ"
        },
        "DKK": {
            symbol: "kr",
            format: "da-DK"
        },
        "DOP": {
            symbol: "RD$",
            format: "es-DO"
        },
        "DZD": {
            symbol: "د.ج",
            format: "ar-DZ"
        },
        "EGP": {
            symbol: "E£",
            format: "ar-EG"
        },
        "ERN": {
            symbol: "Nfk",
            format: "ti-ER"
        },
        "ETB": {
            symbol: "Br",
            format: "am-ET"
        },
        "EUR": {
            symbol: "€",
            format: "de-DE"
        },
        "FJD": {
            symbol: "$",
            format: "en-FJ"
        },
        "FKP": {
            symbol: "£",
            format: "en-FK"
        },
        "FOK": {
            symbol: "kr",
            format: "fo-FO"
        },
        "GBP": {
            symbol: "£",
            format: "en-GB"
        },
        "GEL": {
            symbol: "₾",
            format: "ka-GE"
        },
        "GGP": {
            symbol: "£",
            format: "en-GG"
        },
        "GHS": {
            symbol: "₵",
            format: "en-GH"
        },
        "GIP": {
            symbol: "£",
            format: "en-GI"
        },
        "GMD": {
            symbol: "D",
            format: "en-GM"
        },
        "GNF": {
            symbol: "FG",
            format: "fr-GN"
        },
        "GTQ": {
            symbol: "Q",
            format: "es-GT"
        },
        "GYD": {
            symbol: "$",
            format: "en-GY"
        },
        "HKD": {
            symbol: "$",
            format: "zh-HK"
        },
        "HNL": {
            symbol: "L",
            format: "es-HN"
        },
        "HRK": {
            symbol: "kn",
            format: "hr-HR"
        },
        "HTG": {
            symbol: "G",
            format: "fr-HT"
        },
        "HUF": {
            symbol: "Ft",
            format: "hu-HU"
        },
        "IDR": {
            symbol: "Rp",
            format: "id-ID"
        },
        "ILS": {
            symbol: "₪",
            format: "he-IL"
        },
        "IMP": {
            symbol: "£",
            format: "en-IM"
        },
        "INR": {
            symbol: "₹",
            format: "en-IN"
        },
        "IQD": {
            symbol: "ع.د",
            format: "ar-IQ"
        },
        "IRR": {
            symbol: "﷼",
            format: "fa-IR"
        },
        "ISK": {
            symbol: "kr",
            format: "is-IS"
        },
        "JEP": {
            symbol: "£",
            format: "en-JE"
        },
        "JMD": {
            symbol: "J$",
            format: "en-JM"
        },
        "JOD": {
            symbol: "د.ا",
            format: "ar-JO"
        },
        "JPY": {
            symbol: "¥",
            format: "ja-JP"
        },
        "KES": {
            symbol: "Sh",
            format: "en-KE"
        },
        "KGS": {
            symbol: "с",
            format: "ky-KG"
        },
        "KHR": {
            symbol: "៛",
            format: "km-KH"
        },
        "KID": {
            symbol: "$",
            format: "en-KI"
        },
        "KMF": {
            symbol: "CF",
            format: "ar-KM"
        },
        "KRW": {
            symbol: "₩",
            format: "ko-KR"
        },
        "KWD": {
            symbol: "د.ك",
            format: "ar-KW"
        },
        "KYD": {
            symbol: "$",
            format: "en-KY"
        },
        "KZT": {
            symbol: "₸",
            format: "kk-KZ"
        },
        "LAK": {
            symbol: "₭",
            format: "lo-LA"
        },
        "LBP": {
            symbol: "ل.ل",
            format: "ar-LB"
        },
        "LKR": {
            symbol: "රු",
            format: "si-LK"
        },
        "LRD": {
            symbol: "$",
            format: "en-LR"
        },
        "LSL": {
            symbol: "L",
            format: "st-LS"
        },
        "LYD": {
            symbol: "ل.د",
            format: "ar-LY"
        },
        "MAD": {
            symbol: "د.م.",
            format: "ar-MA"
        },
        "MDL": {
            symbol: "L",
            format: "ro-MD"
        },
        "MGA": {
            symbol: "Ar",
            format: "mg-MG"
        },
        "MKD": {
            symbol: "ден",
            format: "mk-MK"
        },
        "MMK": {
            symbol: "K",
            format: "my-MM"
        },
        "MNT": {
            symbol: "₮",
            format: "mn-MN"
        },
        "MOP": {
            symbol: "P",
            format: "zh-MO"
        },
        "MRU": {
            symbol: "UM",
            format: "ar-MR"
        },
        "MUR": {
            symbol: "₨",
            format: "en-MU"
        },
        "MVR": {
            symbol: "ރ.",
            format: "dv-MV"
        },
        "MWK": {
            symbol: "MK",
            format: "en-MW"
        },
        "MXN": {
            symbol: "$",
            format: "es-MX"
        },
        "MYR": {
            symbol: "RM",
            format: "ms-MY"
        },
        "MZN": {
            symbol: "MT",
            format: "pt-MZ"
        },
        "NAD": {
            symbol: "$",
            format: "en-NA"
        },
        "NGN": {
            symbol: "₦",
            format: "en-NG"
        },
        "NIO": {
            symbol: "C$",
            format: "es-NI"
        },
        "NOK": {
            symbol: "kr",
            format: "nb-NO"
        },
        "NPR": {
            symbol: "₨",
            format: "ne-NP"
        },
        "NZD": {
            symbol: "$",
            format: "en-NZ"
        },
        "OMR": {
            symbol: "ر.ع.",
            format: "ar-OM"
        },
        "PAB": {
            symbol: "B/.",
            format: "es-PA"
        },
        "PEN": {
            symbol: "S/.",
            format: "es-PE"
        },
        "PGK": {
            symbol: "K",
            format: "en-PG"
        },
        "PHP": {
            symbol: "₱",
            format: "en-PH"
        },
        "PKR": {
            symbol: "₨",
            format: "en-PK"
        },
        "PLN": {
            symbol: "zł",
            format: "pl-PL"
        },
        "PYG": {
            symbol: "₲",
            format: "es-PY"
        },
        "QAR": {
            symbol: "ر.ق",
            format: "ar-QA"
        },
        "RON": {
            symbol: "lei",
            format: "ro-RO"
        },
        "RSD": {
            symbol: "дин.",
            format: "sr-Cyrl-RS"
        },
        "RUB": {
            symbol: "₽",
            format: "ru-RU"
        },
        "RWF": {
            symbol: "FRw",
            format: "en-RW"
        },
        "SAR": {
            symbol: "ر.س",
            format: "ar-SA"
        },
        "SBD": {
            symbol: "$",
            format: "en-SB"
        },
        "SCR": {
            symbol: "₨",
            format: "en-SC"
        },
        "SDG": {
            symbol: "ج.س.",
            format: "ar-SD"
        },
        "SEK": {
            symbol: "kr",
            format: "sv-SE"
        },
        "SGD": {
            symbol: "$",
            format: "en-SG"
        },
        "SHP": {
            symbol: "£",
            format: "en-SH"
        },
        "SLL": {
            symbol: "Le",
            format: "en-SL"
        },
        "SOS": {
            symbol: "Sh",
            format: "so-SO"
        },
        "SRD": {
            symbol: "$",
            format: "nl-SR"
        },
        "SSP": {
            symbol: "£",
            format: "en-SS"
        },
        "STN": {
            symbol: "Db",
            format: "pt-ST"
        },
        "SYP": {
            symbol: "£",
            format: "ar-SY"
        },
        "SZL": {
            symbol: "L",
            format: "en-SZ"
        },
        "THB": {
            symbol: "฿",
            format: "th-TH"
        },
        "TJS": {
            symbol: "SM",
            format: "tg-TJ"
        },
        "TMT": {
            symbol: "T",
            format: "tk-TM"
        },
        "TND": {
            symbol: "د.ت",
            format: "ar-TN"
        },
        "TOP": {
            symbol: "T$",
            format: "to-TO"
        },
        "TRY": {
            symbol: "₺",
            format: "tr-TR"
        },
        "TTD": {
            symbol: "TT$",
            format: "en-TT"
        },
        "TVD": {
            symbol: "$",
            format: "en-TV"
        },
        "TWD": {
            symbol: "NT$",
            format: "zh-TW"
        },
        "TZS": {
            symbol: "Sh",
            format: "sw-TZ"
        },
        "UAH": {
            symbol: "₴",
            format: "uk-UA"
        },
        "UGX": {
            symbol: "USh",
            format: "en-UG"
        },
        "USD": {
            symbol: "$",
            format: "en-US"
        },
        "UYU": {
            symbol: "$U",
            format: "es-UY"
        },
        "UZS": {
            symbol: "soʻm",
            format: "uz-Latn-UZ"
        },
        "VES": {
            symbol: "Bs.S",
            format: "es-VE"
        },
        "VND": {
            symbol: "₫",
            format: "vi-VN"
        },
        "VUV": {
            symbol: "VT",
            format: "fr-VU"
        },
        "WST": {
            symbol: "T",
            format: "en-WS"
        },
        "XAF": {
            symbol: "FCFA",
            format: "fr-XA"
        },
        "XCD": {
            symbol: "$",
            format: "en-XC"
        },
        "XDR": {
            symbol: "SDR",
            format: "en-XD"
        },
        "XOF": {
            symbol: "CFA",
            format: "fr-XO"
        },
        "XPF": {
            symbol: "₣",
            format: "fr-PF"
        },
        "YER": {
            symbol: "﷼",
            format: "ar-YE"
        },
        "ZAR": {
            symbol: "R",
            format: "af-ZA"
        },
        "ZMW": {
            symbol: "ZK",
            format: "en-ZM"
        },
        "ZWL": {
            symbol: "$",
            format: "en-ZW"
        }
    };
    

    const currencyData = currencySymbols[iso.toUpperCase()] || "Unknown Currency ISO";

    const { symbol, format } = currencyData;

    if (amount !== "") {
        const formatter = new Intl.NumberFormat(format, {
            minimumFractionDigits: precision,
            maximumFractionDigits: precision
        });
        const formattedAmount = formatter.format(amount);

        return [symbol, formattedAmount, precision];
    }

    return [symbol, "", precision];;
}
