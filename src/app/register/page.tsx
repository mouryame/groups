"use client";
import { register } from "@/utils/auth";
import { Button, Card, Flex, TextField } from "../components";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    const response = await register(name, email, password);
    if (response.error) {
      alert(response.error);
    } else {
      router.push("/");
    }
  }
  return (
    <Flex fullscreen customStyles={{ height: "100vh" }}>
      <Card fullWidth>
        <form onSubmit={handleRegister}>
          <TextField label="Name" type="text" name="name" />
          <TextField label="Email" type="email" name="email" />
          <TextField label="Password" type="password" name="password" />
          <Button fullWidth>Register</Button>
        </form>

        <Flex
          horizontal="center"
          vertical="center"
          customStyles={{ marginTop: "1rem" }}
        >
          <a href="/login">{`Already have an account?`}</a>
        </Flex>
      </Card>
    </Flex>
  );
}
