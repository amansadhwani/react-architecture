export interface DashboardResponse {
  data: Dashboard;
}

export interface Dashboard {
  stats: DashboardStats;
  recent_activities: Activity[];
  recent_orders: Order[];
  system_status: SystemStatus;
}

export interface DashboardStats {
  total_users: number;
  active_users: number;
  pending_approvals: number;
  monthly_revenue: number;
}

export interface Activity {
  activity_id: string;
  activity_type: string;
  performed_by: string;
  created_at: string;
}

export interface Order {
  order_id: string;
  customer_name: string;
  amount: number;
  status: OrderStatus;
  created_at: string;
}

export interface SystemStatus {
  api: ServiceStatus;
  database: ServiceStatus;
  cache: ServiceStatus;
  last_updated: string;
}

export type OrderStatus = "COMPLETED" | "PENDING" | "PROCESSING" | "CANCELLED";

export type ServiceStatus = "UP" | "DOWN";
