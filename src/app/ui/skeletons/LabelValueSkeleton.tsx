import { Skeleton, Stack } from "@mui/material";

interface LabelValueSkeletonProps {
  labelWidth?: number | string;
  valueWidth?: number | string;
}

export function LabelValueSkeleton({
  labelWidth = 120,
  valueWidth = "75%",
}: Readonly<LabelValueSkeletonProps>) {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" width={labelWidth} height={20} />
      <Skeleton variant="text" width={valueWidth} height={28} />
    </Stack>
  );
}
