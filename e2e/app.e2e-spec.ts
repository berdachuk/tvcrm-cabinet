import { CabinetPage } from './app.po';

describe('cabinet App', () => {
  let page: CabinetPage;

  beforeEach(() => {
    page = new CabinetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
