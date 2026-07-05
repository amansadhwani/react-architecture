import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import type { RecentActivitiesProps } from "./RecentActivities.types";

export function RecentActivities({
  activities,
}: Readonly<RecentActivitiesProps>) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent Activities
        </Typography>

        <List disablePadding>
          {activities.map((activity) => (
            <ListItem key={activity.activity_id} divider>
              <ListItemText
                primary={activity.activity_type}
                secondary={`${activity.performed_by} • ${new Date(
                  activity.created_at,
                ).toLocaleString()}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
