const iconsResume = [
  {
    code: "01d",
    name: "weather-sunny",
    label: "Ensolarado",
  },
  {
    code: "02d",
    name: "weather-partly-cloudy",
    label: "Poucas nuvens",
  },
  {
    code: "02n",
    name: "weather-sunny",
    label: "Ensolarado",
  },
  {
    code: "03d",
    name: "weather-cloudy",
    label: "Parcialmente nublado",
  },
  {
    code: "04d",
    name: "weather-cloudy",
    label: "Nublado",
  },
  {
    code: "09d",
    name: "weather-pouring",
    label: "Chuva moderada",
  },
  {
    code: "10d",
    name: "weather-partly-rainy",
    label: "Chuva"
  },
  {
    code: "11d",
    name: "weather-lightning-rainy",
    label: "Chuva com trovoadas",
  },
  {
    code: "13d",
    name: "weather-snowy",
    label: "Nevando",
  },
  {
    code: "50d",
    name: "weather-windy",
    label: "Nevoeiro",
  },
]

export function whichIconShouldIUSeForMainCard(code: string) {
  const icon = iconsResume.find(icon => icon.code === code);

  const iconFormatted = {
    name: icon.name,
    label: icon.label,
  };

  return iconFormatted;
}