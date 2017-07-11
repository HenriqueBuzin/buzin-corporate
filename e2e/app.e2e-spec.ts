import { BuzinCorporatePage } from './app.po';

describe('buzin-corporate App', () => {
  let page: BuzinCorporatePage;

  beforeEach(() => {
    page = new BuzinCorporatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
