import { Stack } from "@mui/material";

import { MetricCardSkeleton, SectionCardSkeleton } from "@/app/ui/skeletons";

export function DashboardSkeleton() {
  return (
    <Stack spacing={3} sx={{ p: 3 }}>
      <Stack direction="row" spacing={2}>
        {Array.from({ length: 4 }).map((_, index) => (
          <MetricCardSkeleton key={index} />
        ))}
      </Stack>

      <SectionCardSkeleton height={180} />
      <SectionCardSkeleton height={220} />
      <SectionCardSkeleton height={80} />
    </Stack>
  );
}
