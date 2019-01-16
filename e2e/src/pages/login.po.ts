import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  getUsernameField() {
    return element(by.name('username')).getAttribute('name');
  }

  getPasswordField() {
    return element(by.name('password')).getAttribute('name');
  }

  getUsernameElement() {
    return element(by.name('username'));
  }

  getPasswordElement() {
    return element(by.name('password'));
  }

  getFormLogin() {
      return element(by.id('loginForm'));
  }

  loginSuccess() {
      return browser.get('/home');
  }

  getTitleText() {
      return element(by.tagName('title')).getText();
  }
}
