const API_KEY = "c7bf86fc3bfe4bb2b8953431263001";

const loc = document.getElementById("locationInput");
const btn = document.getElementById("getWeatherBtn");

btn.addEventListener("click", async () => {
  const city = loc.value.trim();
  if (!city) return alert("Enter a city name");

  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
      alert(data.error.message);
      return;
    }

    document.getElementById("temp").innerText =
      `${data.current.temp_c}°C`;

    document.getElementById("city").innerText =
      data.location.name;

    document.getElementById("condition").innerText =
      data.current.condition.text;

    document.getElementById("icon").src =
      "https:" + data.current.condition.icon;

    document.getElementById("time").innerText =
      data.location.localtime.split(" ")[1];

    const localDate = new Date(data.location.localtime);
    document.getElementById("day").innerText =
      localDate.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("date").innerText =
      localDate.toLocaleDateString("en-US", { day: "numeric", month: "short" });

  } catch (err) {
    console.error("Fetch error:", err);
    alert("Failed to fetch weather data");
  }
});
