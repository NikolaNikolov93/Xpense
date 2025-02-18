import { useState } from "react";
import Button from "../../../components/button/Button.tsx";
import { Form, Input, FormContainer } from "../Forms.styles.ts";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../../services/authService.ts";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const mutation = useMutation({
    mutationFn: (data: { name: string; email: string; password: string }) =>
      register(data.email, data.password),
    onSuccess: (data) => {
      console.log("Registered successfully:", data);
      // Handle success (e.g., redirect to login page)
    },
    onError: (error: any) => {
      setError("Registration failed. Please try again.");
    },
  });

  const handleRegister = () => {
    mutation.mutate({ name, email, password });
  };

  return (
    <FormContainer>
      <h2>Register</h2>
      <Form>
        <Input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClickCapture={handleRegister}>Register</Button>
      </Form>
    </FormContainer>
  );
};

export default Register;
