"use client";
import { useCallback, useState } from "react";
import { Card, Container, Flex, Text } from "./components";
import GroupSearch from "./components/GroupSearch/GroupSearch";
import ProtectedRoute from "./components/ProtectedRoute";
import styles from "./page.module.css";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  const handleClick = useCallback(() => {
    setClicked((prev) => !prev);
  }, []);
  return (
    <ProtectedRoute>
      <Container fullWidth padding={"1rem"}>
        <Text variant="title">Groups</Text>
        <Flex
          direction="column"
          horizontal="center"
          vertical="top"
          fullWidth
          customStyles={{ height: "90vh" }}
        >
          <Card
            customStyles={{
              margin: "1rem 0",
              height: clicked ? "30vh" : "70vh",
            }}
            fullWidth
          >
            You are not part of any group yet
          </Card>
          <Card
            customStyles={{
              margin: "1rem 0",
              height: clicked ? "50vh" : "11vh",
            }}
            fullWidth
            onClick={handleClick}
          >
            <GroupSearch />
          </Card>
        </Flex>
      </Container>
    </ProtectedRoute>
  );
}
