import { BASE_URL } from "../constants";
const token = localStorage.getItem("token");

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    // Extract response data
    const data = await response.json();

    if (!response.ok) {
      // Ensure the backend message is passed correctly
      throw new Error(data.message || "Login failed");
    }

    return data; // Return success response (e.g., token)
  } catch (error: any) {
    console.error("Login Error:", error.message);

    // Explicitly return or rethrow the error message
    throw new Error(error.message || "Something went wrong. Please try again.");
  }
};

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

export const logout = async () => {
  try {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Logout failed");
    }

    const data = await response.json();
    return data; // Return success message
  } catch (error: any) {
    console.error("Logout Error:", error.message);
    throw new Error(error.message || "Something went wrong. Please try again.");
  }
};

export const updateUser = async (userData: {
  name?: string;
  currency?: string;
  totalBalance?: number;
}): Promise<any> => {
  // Ensure the return type is Promise<any>
  try {
    const response = await fetch(`${BASE_URL}/auth/updateUser`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Update failed");
    }

    return data; // Return updated user data
  } catch (error: any) {
    console.error("Update Error:", error.message);
    throw new Error(error.message || "Something went wrong. Please try again.");
  }
};
