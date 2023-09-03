import Athletes from "@/components/Athletes";
import Club from "@/components/Club";
import Leave from "@/components/Leave";
import Login from "@/components/Login";
import SayHello from "@/components/SayHello";
import WeatherForecast from "@/components/WeatherForecast";
import { Box, Center, Heading, Spacer, Text, Wrapper } from "boemly";
import { useSession } from "next-auth/react";
import Image from "next/image";

const EasyPace = (): JSX.Element => {
  const { data: session } = useSession();

  return (
    <>
      <Spacer height="48" />

      <Box height={["3xs", null, null, "xl"]} position="relative">
        <Image
          src="/cover.jpeg"
          alt="Cover picture"
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>

      <Wrapper>
        <Center width="full" height="sm">
          <SayHello />
        </Center>
      </Wrapper>

      <Box id="about-us">
        <Wrapper>
          <Spacer height="20" />
          <Heading textAlign="right" size="4xl">
            EASYPACE
          </Heading>
          <Spacer height="8" />
          <Text paddingRight={["0", null, null, "80"]} textAlign="justify">
            Easypace (Substantiv): Ein Strava-Club, in dem es definitiv nicht
            ums Rennen geht. Hier stehen gesellige Ausfahrten im Vordergrund –
            weil wir alle wissen, wie wichtig es ist, zwischendurch mal die
            Beine hochzulegen. Ob du ein Radprofi bist oder gerade erst gelernt
            hast, wie man die Pedale tritt, ist uns herzlich egal. Wir machen
            uns keine Gedanken über schicke Outfits oder teure Fahrräder –
            Hauptsache, du bist dabei! Bei uns dreht sich alles um Spaß und
            Entspannung, während wir gemeinsam in die Pedale treten. Also komm
            vorbei und zeig uns, dass du das Radfahren genauso &quot;easy&quot;
            angehst wie wir.
          </Text>
          <Spacer height="8" />
          <Club />
          <Spacer height="20" />
        </Wrapper>
      </Box>

      <Box background="purple.100" id="our-heros">
        <Wrapper>
          <Spacer height="20" />
          <Heading size="4xl">Our Heros</Heading>
          <Spacer height="8" />
          {!session ? (
            <>
              <Text>
                Du kannst unsere Heros nur sehen, wenn du mit Strava eingeloggt
                bist. Also tu es! 🍑 🍆
              </Text>
              <Spacer height="4" />
              <Login />
            </>
          ) : (
            <Athletes />
          )}
          <Spacer height="20" />
        </Wrapper>
      </Box>

      <Box id="weather">
        <Wrapper>
          <Spacer height="20" />
          <Center width="full">
            <WeatherForecast />
          </Center>
          <Spacer height="20" />
        </Wrapper>
      </Box>

      <Wrapper>
        <Center width="full" height="3xs">
          <Leave />
        </Center>
      </Wrapper>

      <Wrapper>
        <Center width="full" height="3xs">
          <Login />
        </Center>
      </Wrapper>
    </>
  );
};

export default EasyPace;
