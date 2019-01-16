import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { LoginPage } from '../pages/login.po';
import { async } from '@angular/core/testing';

let page: LoginPage;

Before(() => {
  page = new LoginPage();
});

Given(/^I am on the login page$/, {timeout: 60 * 1000}, async () => {
  await page.navigateTo();
});

When(/^I do nothing$/, () => {});

Then(/^I should see username field$/, async () => {
  expect(await page.getUsernameField()).to.equal('username');
});

Then(/^I should see password field$/, async () => {
    expect(await page.getPasswordField()).to.equal('password');
  });

When('I fill username with {string}', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    page.getUsernameElement().sendKeys('admin');
    expect(await page.getUsernameElement().getAttribute('value')).to.equal(string);
  });

When('I fill password with {string}', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    page.getPasswordElement().sendKeys('123456');
    expect(await page.getPasswordElement().getAttribute('value')).to.equal(string);
  });

  When('I click on the button login', async () => {
    await page.getFormLogin().submit();
  });

  Then('I should be redirected on {string}', async (string) => {
    console.log(page.getTitleText());
    //expect(await page.getTitleText()).to.equal(string);
  });