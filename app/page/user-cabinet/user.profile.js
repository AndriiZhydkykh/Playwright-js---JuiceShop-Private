import { PageHolder } from '../../page.holder';

export default class UserProfilePage extends PageHolder {
  constructor(page) {
    super(page);
  }

  get emailField() { 
    return this.page.locator('input#email'); 
  }

  async getEmailField() {
    return this.emailField;
  }

  async open() {
    await super.open('/profile');
  }
}


