# Clock

Part of "Display Series"

View Demo: [GitHub (Staging)](https://reinhart1010.github.io/display-clock/) | [GitLab (Production/Stable)](https://reinhart1010.gitlab.io/display-clock/)

Here, the GitHub Pages (https://reinhart1010.github.io/display-clock/) version is used for staging, as GitLab's built-in CI is slower to apply Git changes to GitLab Pages compared with that of GitHub.

## Plans
### Display Basics
- [x] Dynamic navbar (here it's called `cpanel`)

### Simple Clock
- [x] **Build Simple Clock Layout**
- [ ] Insert Alarm, Stopwatch and Timer icon to Simple Clock
- [ ] Enable basic clock color customization
- [ ] Enable multiple timezones

### Clock Backend
- [x] Integrate real-time clock service (provided by [Moment.js](https://momentjs.com))
- [x] Set clock layout to respect time format (12h or 24h) settings
- [ ] Provide alert API for Alarm and Timer

### Alarm, Stopwatch, Timer
- [ ] **Add Alarm section**
- [ ] Integrate Alarm icon to Simple Clock
- [ ] Add support for multiple alarms
- [ ] **Add Stopwatch section**
- [ ] Integrate Stopwatch icon to Simple Clock
- [ ] Add Lap Stopwatch
- [ ] Add Split Stopwatch
- [ ] **Add Timer section**
- [ ] Integrate Timer icon to Simple Clock
- [ ] Add support for multiple timers

### Weather and Weather Service
- [x] **Enable Weather Service support** (by [OpenWeatherMap](https://www.openweathermap.org))
- [x] Integrate Weather icon and status to Simple Clock
- [ ] Enable location-based city detection (Geolocation)
- [x] Set weather service to respect default unit settings (Celcius, Fahrenheit, Kelvin)
- [ ] **Add Weather section**
- [ ] Show current and next 6 days weather of the given id

### Settings
- [x] **Implement Settings page**
- [ ] Load settings based on saved cookies
- [x] Save settings as cookies

## Permissions

+ Cookies
