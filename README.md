# ImageCropper

Stock Market API(Mock)

## Table of contents

- [Overview](#overview)
- [HowToUse](#howtouse)
- [Author](#author)

## Overview
    This is a mock stock market quote api, all data is fake not real.

## How To Use (Query Required)
    Specified Routes:    Return values:
    /stockInformation  | marketCap,volume,avgVolume,weekHigh52,weekLow52,openPrice
    /stockLivePrice    | price,changePrice,changePricePercentage
    /stockDayHistory   | meta{symbol},values{dateTime,open}
    /stockWeekHistory  | meta{symbol},values{dateTime,open,close}
    /stockMonthHistory | meta{symbol},values{dateTime,open,close}

    Note: /~~~?stock=STOCK_SYMBOL

## Author

- Github - [@csmurillo](https://github.com/csmurillo)

