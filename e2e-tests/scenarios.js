'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /currency-quotes when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/currency-quotes");
  });


  describe('currency-quotes', function() {

    beforeEach(function() {
      browser.get('index.html#!/currency-quotes');
    });


    it('should render currency-quotes when user navigates to /currency-quotes', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


});
