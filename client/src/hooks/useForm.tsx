import { useState } from "react";

type UseFormProps<T> = {
  initialValues: T;
};

export const useForm = <T,>({ initialValues }: UseFormProps<T>) => {
  const [formData, setFormData] = useState<T>(initialValues);

  // Generic handler for form inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Reset form to initial values
  const resetForm = () => {
    setFormData(initialValues);
  };

  return {
    formData,
    handleChange,
    resetForm,
  };
};
