"use client";

import { useEffect } from "react";

export default function TitleSetter({ title }: { title: string }) {
  useEffect(() => {
    document.title = `${title} | Sweet Butterfly`;
  }, [title]);
  return null;
}
