var assert = require('assert');

describe('webdriver.io page', function() {
    
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        const title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });

    it('should search in google webdriver', function () {
        browser.url('http://google.com');
        $('#lst-ib').setValue('webdriver');
        $('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)').click();
        const title = browser.getTitle();
        assert.equal(title, 'webdriver - Pesquisa Google');    
    });

});
