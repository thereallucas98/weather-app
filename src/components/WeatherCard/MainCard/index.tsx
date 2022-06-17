import {
  LocationCity,
  LocationCountry,
  LocationIcon,
  LocationLabelWrapper,
  TemperatureValue,
  WeatherCardWrapper,
  WeatherImageContent,
  WeatherImageDescription,
  WeatherImageStatus,
  WeatherLocationContent,
} from "../styles";

interface MainCardProps {
  icon: {
    name: string;
    label: string;
  };
  name: string;
  country: string;
  temperature: number;
}

function MainCard({ icon, name, country, temperature }: MainCardProps) {
  return (
    <WeatherCardWrapper>
      <WeatherImageContent>
        <WeatherImageStatus name={icon.name} size={100} color="#FFF" />
        <WeatherImageDescription>{icon.label}</WeatherImageDescription>
      </WeatherImageContent>
      <WeatherLocationContent>
        <TemperatureValue>{temperature}°C</TemperatureValue>
        <LocationLabelWrapper>
          <LocationIcon name="location-pin" size={20} color="#FFF" />
          <LocationCity>{name},</LocationCity>
          <LocationCountry>{country}</LocationCountry>
        </LocationLabelWrapper>
      </WeatherLocationContent>
    </WeatherCardWrapper>
  );
}

export { MainCard };
