import { WeatherDashbordPage } from './app.po';

describe('weather-dashbord App', () => {
  let page: WeatherDashbordPage;

  beforeEach(() => {
    page = new WeatherDashbordPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
