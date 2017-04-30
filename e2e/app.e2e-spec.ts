import { EffectStuckPage } from './app.po';

describe('effect-stuck App', () => {
  let page: EffectStuckPage;

  beforeEach(() => {
    page = new EffectStuckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
