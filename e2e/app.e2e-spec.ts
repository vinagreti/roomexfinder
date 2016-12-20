import { RoomexfinderPage } from './app.po';

describe('roomexfinder App', function() {
  let page: RoomexfinderPage;

  beforeEach(() => {
    page = new RoomexfinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
