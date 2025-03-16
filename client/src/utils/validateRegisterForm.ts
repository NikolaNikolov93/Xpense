export const validateRegisterForm = (values: {
  name: string;
  email: string;
  password: string;
}) => {
  const errors: Partial<{ name: string; email: string; password: string }> = {};

  // Name validation
  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  // Email validation
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email format";
  }

  // Password validation
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  } else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(values.password)) {
    errors.password =
      "Password must include at least one letter and one number";
  }

  return errors;
};
