"use client";

import { useEffect } from "react";
import { track } from "../../lib/track";

export function TrackEvent({
  event,
  metadata,
}: {
  event: string;
  metadata?: Record<string, unknown>;
}) {
  useEffect(() => {
    track(event, metadata);
  }, [event, metadata]);

  return null;
}

export function TrackClick({
  event,
  metadata,
  children,
  className,
}: {
  event: string;
  metadata?: Record<string, unknown>;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={className} onClick={() => track(event, metadata)}>
      {children}
    </span>
  );
}
