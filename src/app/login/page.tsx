"use client";
import { login } from "@/utils/auth";
import { Button, Card, Flex, TextField } from "../components";

function handleLogin(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = new FormData(e.target as HTMLFormElement);
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  if (!email || !password) {
    alert("Please fill in all fields");
    return;
  }
  login(email, password);
}

export default function Page() {
  return (
    <Flex fullscreen customStyles={{ height: "100vh" }}>
      <Card fullWidth>
        <form onSubmit={handleLogin}>
          <TextField label="Email" type="email" name="email" />
          <TextField label="Password" type="password" name="password" />
          <Button fullWidth>Login</Button>
        </form>
      </Card>
    </Flex>
  );
}
