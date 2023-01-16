# Jambo Travel - API

<h3>Hello jambo team ;)</h3>
<p>Welcome to the jambo travel API project</p>

## Getting Started

Before starting to run, please go to the [OpenWeatherApi](https://openweathermap.org/api) website, create an account, generate an API key and then replace it in the .env file

Now you are ready to run the development server:

```bash
# First, install
npm install
# After the installation is finished run
npm run dev
```

Server will be launched on port 3333!🚀

## FrontEnd

For the FrontEnd see: [Jambo Travel Web](https://github.com/fontanettiwilliam/jamboTravel-Web)

### How the project looks

<h1 align="center">
<img src="https://github.com/fontanettiwilliam/jamboTravel-API/blob/main/src/assets/jamboTravel.gif?raw=true" />
</h1>

## This project uses

- [Wikipedia API](https://en.wikipedia.org/api/rest_v1/)
- [Open Weather Map API](https://openweathermap.org/api)
- [date-fns](https://date-fns.org/)
- [axios](https://axios-http.com/)
- [Express JS](https://expressjs.com/)
- [dotenv](https://github.com/motdotla/dotenv#readme)
- [cors](https://www.npmjs.com/package/cors)

## Cities List

For the list of cities, this [article](https://www.cnn.com/travel/article/tripadvisor-travelers-choice-awards-2022/index.html) was consulted.
In the future, a register of cities could be created, or taken from an api that has the most visited cities.

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
