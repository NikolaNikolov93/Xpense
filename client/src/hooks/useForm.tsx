import { useState } from "react";
import { UseFormProps } from "../types/types";

export const useForm = <T,>({ initialValues, validate }: UseFormProps<T>) => {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  // Generic handler for form inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (validate) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validate({ ...formData, [name]: value })[name as keyof T],
      }));
    }
  };

  // Reset form to initial values
  const resetForm = () => {
    setFormData(initialValues);
  };

  //Validates the form on submit
  const validateForm = () => {
    if (!validate) return true;
    const newErrors = validate(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  return {
    formData,
    handleChange,
    resetForm,
    errors,
    validateForm,
  };
};
