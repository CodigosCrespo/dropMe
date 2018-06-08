import { DropMePage } from './app.po';

describe('drop-me App', function() {
  let page: DropMePage;

  beforeEach(() => {
    page = new DropMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
