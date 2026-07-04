import { Dashboard } from "../components/Dashboard";
import { useDashboard } from "../hooks/useDashboard";

export function DashboardContainer() {
  const { data, isLoading, isError } = useDashboard();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong.</div>;
  }

  return (
    <pre>
      {JSON.stringify(data, null, 2)} <Dashboard />
    </pre>
  );
}
