import { browser, by, element, protractor } from 'protractor';

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

  getButtonLogin() {
    return element(by.buttonText('Log in'));
  }

  getFormLogin() {
      return element(by.id('loginForm'));
  }

  getTitleText() {
      return browser.getCurrentUrl();
  }
}
