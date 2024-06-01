"use client";
import { register } from "@/utils/auth";
import { Button, Card, Flex, TextField } from "../components";

function handleRegister(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = new FormData(e.target as HTMLFormElement);
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  if (!name || !email || !password) {
    alert("Please fill in all fields");
    return;
  }
  register(name, email, password);
}
export default function Page() {
  return (
    <Flex fullscreen customStyles={{ height: "100vh" }}>
      <Card fullWidth>
        <form onSubmit={handleRegister}>
          <TextField label="Name" type="text" name="name" />
          <TextField label="Email" type="email" name="email" />
          <TextField label="Password" type="password" name="password" />
          <Button fullWidth>Register</Button>
        </form>
      </Card>
    </Flex>
  );
}
