import { Box } from "boemly";

export const WeatherForecast = (): JSX.Element => {
  return (
    <Box max-width="full" overflowX="scroll">
      <Box width="md" height="md">
        <iframe
          scrolling="no"
          style={{ border: 0, width: "100%", height: "100%" }}
          src="https://meteo.search.ch/widget/Dornbirn"
        ></iframe>
      </Box>
    </Box>
  );
};
