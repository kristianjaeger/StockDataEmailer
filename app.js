// Get query results from Yahoo's YQL service
var request = require('request');
var fs = require('fs');

// TODO: Add your url variables here and then put them in the array urls below

var urls = [/* url variables go here */];

// formatAsHtml - helper for formatting strings as simple HTML
var formatAsHtml = function (inputString, htmlTag) {   
    switch (htmlTag) {
        case "b":
            formattedResult = "<b>" + inputString + "</b>";
            break;
        case "i":
            formattedResult = "<i>" + inputString + "</i>";
            break;
        case "h1":
            formattedResult = "<h1>" + inputString + "</h1>";
            break;
        case "h2":
            formattedResult = "<h2>" + inputString + "</h2>";
            break;
        case "h3":
            formattedResult = "<h3>" + inputString + "</h3>";
            break;
        case "hr":
            formattedResult = inputString + "<hr/>";
            break;
    }
    formattedResult += "<br/>";
    
    return formattedResult;
}

// logOrganizedResults - prep results for html file
var logOrganizedResults =  function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(formatAsHtml("Symbol " + response.body.query.results.quote.symbol,"b"));
        console.log("Name " + response.body.query.results.quote.Name);
        console.log(formatAsHtml("LastTradeWithTime " + response.body.query.results.quote.LastTradeWithTime, "i"));
        console.log(formatAsHtml("Change_PercentChange " + response.body.query.results.quote.Change_PercentChange,"b"));
        console.log("Volume " + response.body.query.results.quote.Volume);
        console.log("YearRange " + response.body.query.results.quote.YearRange);
        console.log("PercebtChangeFromYearHigh " + response.body.query.results.quote.PercebtChangeFromYearHigh);
        console.log("DaysHigh " + response.body.query.results.quote.DaysHigh);
        console.log("DaysLow " + response.body.query.results.quote.DaysLow);
        console.log(formatAsHtml("\r\n","hr"));
    } else {
        console.error(error);
    }
};

// Request data from Yahoo's YQL service
for (var i = 0; i < urls.length; i++) {
    request({url: urls[i], json: true}, logOrganizedResults);
}