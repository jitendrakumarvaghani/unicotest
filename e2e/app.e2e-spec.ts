import { UnicoPage } from './app.po';

describe('unico App', () => {
  let page: UnicoPage;

  beforeEach(() => {
    page = new UnicoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
