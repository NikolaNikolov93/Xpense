export const validateLoginForm = (values: {
  email: string;
  password: string;
}) => {
  const errors: Partial<{ email: string; password: string }> = {};
  if (!values.email) errors.email = "Email is required";
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Invalid email";

  if (!values.password) errors.password = "Password is required";

  return errors;
};
