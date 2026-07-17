import { Card, CardContent, Skeleton } from "@mui/material";

interface SectionCardSkeletonProps {
  height: number;
}

export function SectionCardSkeleton({
  height,
}: Readonly<SectionCardSkeletonProps>) {
  return (
    <Card>
      <CardContent>
        <Skeleton variant="text" width="30%" />
        <Skeleton variant="rectangular" height={height} />
      </CardContent>
    </Card>
  );
}
