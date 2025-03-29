import Button from "../../../components/button/Button.tsx";
import { Form, Input, FormContainer, Message, Error } from "../Forms.styles.ts";
import { AnimatePresence } from "framer-motion";
import { useForm } from "../../../hooks/useForm.tsx";
import { useRegister } from "../../../hooks/useRegister.tsx";
import Spinner from "../../../components/spinner/Spinner.tsx";
import { validateRegisterForm } from "../../../utils/validateRegisterForm.ts";
import { shakeAnimation } from "../../../constants.ts";

const Register = () => {
  const { formData, handleChange, resetForm, errors, validateForm } = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: validateRegisterForm,
  });
  const { mutation, message } = useRegister(); // Destructure message and mutation

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      mutation.mutate(formData, {
        onSuccess: () => resetForm(),
      });
    }
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
          <h6>❗ Do NOT use real email addresses or sensitive data.</h6>

          <Input
            animate={errors.name ? shakeAnimation : {}}
            type="text"
            placeholder="Name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <AnimatePresence>
            {errors.name && (
              <Error
                key="name-error"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {errors.name}
              </Error>
            )}
          </AnimatePresence>
          <Input
            animate={errors.email ? shakeAnimation : {}}
            type="email"
            placeholder="Email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <AnimatePresence>
            {errors.email && (
              <Error
                key="email-error"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {errors.email}
              </Error>
            )}
          </AnimatePresence>
          <Input
            animate={errors.password ? shakeAnimation : {}}
            type="password"
            placeholder="Password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <AnimatePresence>
            {errors.password && (
              <Error
                key="password-error"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {errors.password}
              </Error>
            )}
          </AnimatePresence>

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
