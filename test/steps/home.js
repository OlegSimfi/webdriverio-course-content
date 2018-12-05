const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given('I open the home page', function() {
    browser.url('./');
});

When ('I click on the CTA button', function () {
    browser.click('.shop-callout a');
});

Then ('I expect to be on the home page', function () {
    var title = browser.getTitle();
    expect(title).to.equal('Robot Parts Emporium');
});

Then ('I expect to be on the product page', function () {
    var productTitle = browser.getTitle();
    expect(productTitle).to.equal('Totally Not Evil Sentient Robot - Robot Parts Emporium');

    var url = browser.getUrl();

    expect(url).to.include('product-page.html', 'URL mismatch');
});