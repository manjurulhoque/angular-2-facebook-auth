import { FbauthPage } from './app.po';

describe('fbauth App', () => {
  let page: FbauthPage;

  beforeEach(() => {
    page = new FbauthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
