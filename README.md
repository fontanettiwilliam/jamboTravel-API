# Jambo Travel - API

<h3>Hello jambo team ;)</h3>
<p>Welcome to the jambo travel API project</p>

## Getting Started

First, run the development server:

```bash
npm install
# After the installation is finished run
npm run dev
```

Server will be launched on port 3333!🚀

## This project uses

- [Wikipedia API](https://en.wikipedia.org/api/rest_v1/)
- [Open Weather Map API](https://openweathermap.org/api)
- [date-fns](https://date-fns.org/)
- [axios](https://axios-http.com/)
- [Express JS](https://expressjs.com/)
- [dotenv](https://github.com/motdotla/dotenv#readme)

## Deploy on Heroku

This project was deployed on [Heroku](https://www.heroku.com/)

## Examples of Request and Response

### getCities

<h1 align="center">
<img src="https://github.com/fontanettiwilliam/jamboTravel-API/blob/main/src/assets/responseExamples/getCities.png?raw=true" />
</h1>

### getWeather

You will need to send a lat and long of the desired region (City)

```TS
{
  lat: number;
  long: number;
}
```

<h1 align="center">
<img src="https://github.com/fontanettiwilliam/jamboTravel-API/blob/main/src/assets/responseExamples/getWeather.png?raw=true" />
</h1>
