"use client";
import { useSearchParams } from "next/navigation";

export default function SearchHook() {
  const searchParams = useSearchParams();

  console.log(searchParams);

  return null;
}
