import Button from "../../../components/button/Button.tsx";
import { Form, Input, FormContainer } from "../Forms.styles.ts";

const Login = () => {
  return (
    <FormContainer>
      <h2>Login</h2>
      <Form>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button>Login</Button>
      </Form>
    </FormContainer>
  );
};

export default Login;
