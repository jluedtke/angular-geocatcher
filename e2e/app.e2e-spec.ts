import { GeocatcherPage } from './app.po';

describe('geocatcher App', () => {
  let page: GeocatcherPage;

  beforeEach(() => {
    page = new GeocatcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
