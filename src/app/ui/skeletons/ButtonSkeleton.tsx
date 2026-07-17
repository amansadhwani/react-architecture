import { Skeleton } from "@mui/material";

interface ButtonSkeletonProps {
  width?: number | string;
  height?: number;
}

export function ButtonSkeleton({
  width = 120,
  height = 36,
}: Readonly<ButtonSkeletonProps>) {
  return <Skeleton variant="rounded" width={width} height={height} />;
}
