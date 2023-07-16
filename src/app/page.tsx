"use client";
import styles from "./page.module.css";
import { Center, Heading, Text } from "boemly";

export default function Home() {
  return (
    <main>
      <Center height="xl" flexDir="column" gap="4">
        <Heading size="4xl">Easy Pace</Heading>
        <Text size="mdRegularNormal">
          Radeln macht gemeinsam am meisten Spasssssss
        </Text>
      </Center>
    </main>
  );
}
