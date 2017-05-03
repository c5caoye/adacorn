import { AngularPlaygroundPage } from './app.po';

describe('angular-playground App', () => {
  let page: AngularPlaygroundPage;

  beforeEach(() => {
    page = new AngularPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
