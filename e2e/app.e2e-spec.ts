import { TomcatPage } from './app.po';

describe('tomcat App', () => {
  let page: TomcatPage;

  beforeEach(() => {
    page = new TomcatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
