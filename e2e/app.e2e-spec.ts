import { ElmsSupervisorPage } from './app.po';

describe('elms-supervisor App', () => {
  let page: ElmsSupervisorPage;

  beforeEach(() => {
    page = new ElmsSupervisorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
