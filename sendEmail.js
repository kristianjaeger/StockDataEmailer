var Mailgun = require('mailgun-js');
var api_key = 'YOURAPIKEY';
var domain = 'YOURDOMAIN';
var from_who = 'YOURFROMEMAILADDRESS';

var path = require("path");
var fp = [path.join(__dirname, 'results.html')];
var data = {
    from: from_who,
    to: "TOEMAILADDRESS",
    subject: 'YOURSUBJECT',
    text: 'YOURTEXTCONTENT',
    attachment: fp
};

// submitEmailWithAttachment - sends email with attachment(s)
var submitEmailWithAttachment = function() {
    var mailgun = new Mailgun({apiKey: api_key, domain: domain});

    mailgun.messages().send(data, function (error, body) {
        if (error) {
            console.log('error', {error: error});
        }
        else {
            console.log("attachment sent", fp);
        }
    });
};

// Send email with the query results
submitEmailWithAttachment();