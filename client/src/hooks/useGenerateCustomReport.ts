import { useQuery } from "@tanstack/react-query";
import { fetchReport } from "../services/expenseService";

const useGenerateReport = (query: any) => {
  const token = localStorage.getItem("token");

  return useQuery({
    queryKey: ["generateCustomReport"], // Correctly typed queryKey
    queryFn: () => fetchReport(query, token),
    refetchInterval: 10000,
  });
};

export default useGenerateReport;
