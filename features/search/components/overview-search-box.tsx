import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

export function OverviewSearchBox() {
  return (
    <div
      className={cn(
        "w-[22rem] h-[3.5rem] flex items-center justify-center relative rounded-full py-2"
      )}
    >
      <Input
        placeholder="Type to search"
        className="px-10 rounded-full size-full"
      />
      <SearchIcon className="size-4 absolute left-4 top-1/2 -translate-y-1/2" />
    </div>
  );
}
