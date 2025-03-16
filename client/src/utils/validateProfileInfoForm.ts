export const validateProfileInfoForm = (values: {
  name: string;
  currency: string;
  sumToAdd: string;
}) => {
  const errors: Partial<{ name: string; currency: string; sumToAdd: string }> =
    {};

  // Name validation
  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  // Currency validation
  if (!values.currency) {
    errors.currency = "Currency is required";
  }

  // Amout to add to balance validation
  const sum = parseFloat(values.sumToAdd);
  if (isNaN(sum) || sum < 0 || Object.is(sum, -0)) {
    errors.sumToAdd = "The amount must be a positive number";
  }

  return errors;
};
