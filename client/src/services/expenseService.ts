import { BASE_URL } from "../constants";

export const fetchReport = async (query: any, token: string | null) => {
  try {
    const queryParams = new URLSearchParams(query).toString(); // Convert query object to query string

    const response = await fetch(
      `${BASE_URL}/expenses/getCustomRerport?${queryParams}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching report data");
    }

    const data = await response.json(); // Parse JSON response
    return data;
  } catch (error: any) {
    throw new Error("Error fetching report data: " + error.message);
  }
};
