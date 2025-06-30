export default async function Page() {
  const cityResponse = await fetch(
    'https://geocoding-api.open-meteo.com/v1/search?name=Moscow&format=json',
    { cache: 'no-store' }
  );
  const city = (await cityResponse.json()).results[0];

  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&temperature_unit=celsius&current=temperature_2m,weathercode`,
    { cache: 'no-store' }
  );

  const weatherData = await weatherResponse.json();

  const weather = {
    temperature: weatherData.current.temperature_2m,
    weathercode: weatherData.current.weathercode,
  };

  console.log(weather);

  return (
    <div className="mx-auto max-w-sm rounded-lg bg-white p-4 shadow-md">
      Hello Surfer!
    </div>
  );
}
