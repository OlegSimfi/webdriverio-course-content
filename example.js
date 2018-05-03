var webdriverio = require('webdriverio');

var options = {
    host: 'http://localhost:4444/wd/hub/',
    desiredCapabilities: {
        browserName: 'chrome',
        version: '65.0',
        enableVNC: true
    }
};
var client = webdriverio.remote(options);

client
    .init()
    .url('https://duckduckgo.com/')
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage')
    .pause(10000)
    .getTitle().then(function(title) {
    console.log('Title is: ' + title);
})
    .end();


