import { BASE_URL } from "../constants";

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    // Extract response data
    const data = await response.json();

    if (!response.ok) {
      // Ensure the backend message is passed correctly
      throw new Error(data.message || "Registration failed");
    }

    return data; // Return success response
  } catch (error: any) {
    console.error("Registration Error:", error.message);

    // Explicitly return or rethrow the error message
    throw new Error(error.message || "Something went wrong. Please try again.");
  }
};
