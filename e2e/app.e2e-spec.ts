import { MyAngularProPage } from './app.po';

describe('my-angular-pro App', () => {
  let page: MyAngularProPage;

  beforeEach(() => {
    page = new MyAngularProPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
