import { Card, Flex, Text } from "./components";
import ProtectedRoute from "./components/ProtectedRoute";
import styles from "./page.module.css";

export default function Home() {
  console.log("inside Home");
  return (
    <ProtectedRoute>
      <Card>
        <Text>Hello World</Text>
      </Card>
    </ProtectedRoute>
  );
}
