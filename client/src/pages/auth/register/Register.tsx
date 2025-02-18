import { useState } from "react";
import Button from "../../../components/button/Button.tsx";
import { Form, Input, FormContainer, Message } from "../Forms.styles.ts";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../../services/authService.ts";
import { AnimatePresence } from "framer-motion";
import { useForm } from "../../../hooks/useForm.tsx";

const Register = () => {
  const { formData, handleChange, resetForm } = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const mutation = useMutation({
    mutationFn: (data: { name: string; email: string; password: string }) =>
      register(data.name, data.email, data.password),
    onSuccess: (data) => {
      setMessage({ text: data.message, type: "success" });
      resetForm();
    },
    onError: (error: any) => {
      setMessage({
        text: error.message || "Something went wrong. Please try again.",
        type: "error",
      });
    },
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <AnimatePresence>
      <FormContainer
        key="form-container"
        layout // Enable layout animation
        initial={{ height: "auto" }} // initial height before message appears
        animate={{ height: message ? "auto" : "auto" }} // animate expansion when message appears
        exit={{ height: "auto" }} // animate exit on form removal (if necessary)
        transition={{ duration: 0.2 }}
      >
        <h2>Register</h2>
        <Form onSubmit={handleRegister}>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />

          <AnimatePresence>
            {message && (
              <Message
                key="message"
                type={message.type}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {message.text}
              </Message>
            )}
          </AnimatePresence>

          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Loading.." : "Register"}
          </Button>
        </Form>
      </FormContainer>
    </AnimatePresence>
  );
};

export default Register;
