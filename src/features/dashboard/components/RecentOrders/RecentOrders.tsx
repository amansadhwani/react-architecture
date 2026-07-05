import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { formatCurrency } from "@/shared/utils";

import type { RecentOrdersProps } from "./RecentOrders.types";

export function RecentOrders({ orders }: Readonly<RecentOrdersProps>) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent Orders
        </Typography>

        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.order_id}>
                <TableCell>{order.order_id}</TableCell>
                <TableCell>{order.customer_name}</TableCell>
                <TableCell>${formatCurrency(order.amount)}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
