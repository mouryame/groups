"use client";
import { login } from "@/utils/auth";
import { Button, Card, Flex, TextField } from "../components";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    const response = await login(email, password);
    if (response.error) {
      alert(response.error);
    } else {
      router.push("/");
    }
  }
  return (
    <Flex direction="column" fullscreen customStyles={{ height: "100vh" }}>
      <Card fullWidth>
        <form onSubmit={handleLogin}>
          <TextField label="Email" type="email" name="email" />
          <TextField label="Password" type="password" name="password" />
          <Button fullWidth>Login</Button>
        </form>

        <Flex
          horizontal="center"
          vertical="center"
          customStyles={{ marginTop: "1rem" }}
        >
          <a href="/register">{`Don't have an account? Register`}</a>
        </Flex>
      </Card>
    </Flex>
  );
}
