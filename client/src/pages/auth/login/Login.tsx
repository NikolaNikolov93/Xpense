import Button from "../../../components/button/Button.tsx";
import { useForm } from "../../../hooks/useForm.tsx";
import { Form, Input, FormContainer, Message } from "../Forms.styles.ts";
import { useLogin } from "../../../hooks/useLogin.tsx";
import { AnimatePresence } from "framer-motion";

const Login = () => {
  const { formData, handleChange, resetForm } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });
  const { mutation, message } = useLogin(); // Use the login hook

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData, {
      onSuccess: () => resetForm(),
    });
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
        <h2>Login</h2>
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            name="password"
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
            {mutation.isPending ? "Loading.." : "Login"}
          </Button>
        </Form>
      </FormContainer>
    </AnimatePresence>
  );
};

export default Login;
