import { MyAngularCliPage } from './app.po';

describe('my-angular-cli App', () => {
  let page: MyAngularCliPage;

  beforeEach(() => {
    page = new MyAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
