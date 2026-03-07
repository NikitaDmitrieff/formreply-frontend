import type { Metadata } from "next";
import { StatsClient } from "./StatsClient";

export const metadata: Metadata = {
  title: "Analytics | FormReply",
  robots: { index: false, follow: false },
};

export default function StatsPage() {
  return <StatsClient />;
}
