import Button from "../../../components/button/Button.tsx";
import { Form, Input, FormContainer, Message } from "../Forms.styles.ts";
import { AnimatePresence } from "framer-motion";
import { useForm } from "../../../hooks/useForm.tsx";
import { useRegister } from "../../../hooks/useRegister.tsx";
import Spinner from "../../../components/spinner/Spinner.tsx";

const Register = () => {
  const { formData, handleChange, resetForm } = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const { mutation, message } = useRegister(); // Destructure message and mutation

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData, {
      onSuccess: () => resetForm(),
    });
  };

  return (
    <AnimatePresence>
      <FormContainer
        key="form-container"
        layout
        initial={{ height: "auto" }}
        animate={{ height: message ? "auto" : "auto" }}
        exit={{ height: "auto" }}
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
                {message.text.split(". ").map((line, index) => (
                  <div key={index}>{line}.</div> // This will render each error on a new line
                ))}
              </Message>
            )}
          </AnimatePresence>

          {mutation.isPending ? (
            <Spinner />
          ) : (
            <Button type="submit">Register</Button>
          )}
        </Form>
      </FormContainer>
    </AnimatePresence>
  );
};

export default Register;
