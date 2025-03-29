import Button from "../../../components/button/Button.tsx";
import { useForm } from "../../../hooks/useForm.tsx";
import { Form, Input, FormContainer, Message, Error } from "../Forms.styles.ts";
import { useLogin } from "../../../hooks/useLogin.tsx";
import { AnimatePresence } from "framer-motion";
import Spinner from "../../../components/spinner/Spinner.tsx";
import { useNavigate } from "react-router-dom";
import { validateLoginForm } from "../../../utils/validateLoginFrom.ts";
import { shakeAnimation } from "../../../constants.ts";

const Login = () => {
  const { formData, handleChange, resetForm, errors, validateForm } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateLoginForm,
  });

  const { mutation, message } = useLogin(); // Use the login hook

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      mutation.mutate(formData, {
        onSuccess: () => {
          resetForm();
          navigate("/dashboard");
        },
      });
    }
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
          <h6>
            ⚠️ Note: Initial loading times are slower due to backend hosting
            settings.
          </h6>

          <Input
            animate={errors.email ? shakeAnimation : {}}
            type="email"
            placeholder="Email"
            required
            name="email"
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
            required
            name="password"
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
                {message.text}
              </Message>
            )}
          </AnimatePresence>
          {mutation.isPending ? (
            <Spinner />
          ) : (
            <Button type="submit">Log in</Button>
          )}
        </Form>
      </FormContainer>
    </AnimatePresence>
  );
};

export default Login;
