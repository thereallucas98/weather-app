import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { LocationItem } from "../../screens/WeatherInDetail";
import * as ForecastUI from "./styles";

interface ForecastProps {
  data: LocationItem;
}

function Forecast({ data }: ForecastProps) {
  const formattedDataString = format(data.dt * 1000, "d'/'M E',' 'às' HH:mm", {
    locale: ptBR,
  });
  return (
    <ForecastUI.Container>
      <ForecastUI.DayAndMonthContent>
        <ForecastUI.DayAndMonthValue>
          {formattedDataString}
        </ForecastUI.DayAndMonthValue>
      </ForecastUI.DayAndMonthContent>
      <ForecastUI.ForecastWeatherContent>
        <ForecastUI.ForecastWeatherIcon
          name={data.icon.name}
          size={42}
          color="#FFF"
        />
        <ForecastUI.ForecastWeatherValue>
          {data.icon.label}
        </ForecastUI.ForecastWeatherValue>
      </ForecastUI.ForecastWeatherContent>
      <ForecastUI.TemperatureContent>
        <ForecastUI.MaxTemperature>
          {data.main.temp_max}°C
        </ForecastUI.MaxTemperature>
        <ForecastUI.MinTemperature>
          {data.main.temp_min}°C
        </ForecastUI.MinTemperature>
      </ForecastUI.TemperatureContent>
    </ForecastUI.Container>
  );
}

export { Forecast };
