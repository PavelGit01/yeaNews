export const formatierCityName = (cityName: string) => {
  if (cityName) {
    return cityName[0].toUpperCase() + cityName.slice(1).toLowerCase();
  }

  return "";
};
