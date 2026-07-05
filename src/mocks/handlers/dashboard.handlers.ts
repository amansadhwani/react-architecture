import { http, HttpResponse } from "msw";

export const dashboardHandlers = [
  http.get("/api/dashboard", async () => {
    return HttpResponse.json({
      data: {
        stats: {
          total_users: 1245,
          active_users: 1180,
          pending_approvals: 34,
          monthly_revenue: 189450.75,
        },
        recent_activities: [
          {
            activity_id: "ACT-1001",
            activity_type: "USER_CREATED",
            performed_by: "John Doe",
            created_at: "2026-07-04T09:30:00Z",
          },
          {
            activity_id: "ACT-1002",
            activity_type: "ORDER_APPROVED",
            performed_by: "Alice Smith",
            created_at: "2026-07-04T08:15:00Z",
          },
        ],
        recent_orders: [
          {
            order_id: "ORD-1001",
            customer_name: "Amazon",
            amount: 5400.5,
            status: "COMPLETED",
            created_at: "2026-07-04T09:00:00Z",
          },
        ],
        system_status: {
          api: "UP",
          database: "NEUTRAL",
          cache: "DOWN",
          last_updated: "2026-07-04T09:35:00Z",
        },
      },
    });
  }),
];
