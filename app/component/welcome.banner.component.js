export class WelcomeBanner {
  constructor(page) {
    this.page = page;
  }

  get closeWelcomeBannerButton() {
    return this.page.locator('button[aria-label="Close Welcome Banner"]');
  }

  async clickCloseWelcomeBannerButton() {
    await this.closeWelcomeBannerButton.click();
  }
}

