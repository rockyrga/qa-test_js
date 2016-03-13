describe('property details page', function() {

  beforeEach(function() {
    browser.driver.manage().window().maximize();
    browser.get('/property-details');

  });

  describe('drop down list validation', function() {

    it('number of bedrooms should have 7 options', function() {

      var dropdownlist = element(by.model('bedroomNumber'));
      var options = dropdownlist.all(by.tagName('option'));

      expect(options.count()).toEqual(7);
      
    });

    it('number of bedrooms should include "Please Select", "1", "2", "3", "4", "5" and "over 5" options', function() {


    });

    it('number of bedrooms options should be in "Please Select", "1", "2", "3", "4", "5" and "over 5" order', function() {


    });
    
  });

  describe('form validation', function() {

    it('should show "Please provide bedroom number" error message when the choose nothing with the number of bedrroms', function() {

      var errorMessageOfNumberOfBedrooms = element(by.xpath('/html/body/div/section/div/div/div/div/form/div[1]/div[2]/div/div/div/div[1]/div/div/span'));
      var submitBtn = element(by.css('button[type=submit]'));
      submitBtn.click();

      expect(errorMessageOfNumberOfBedrooms.getText()).toBe('Please provide bedroom number');
    });
  });


});

