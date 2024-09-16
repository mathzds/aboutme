import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icons } from "./icons/dock-icons";

const tooltips = [
  { icon: <Icons.ts className="" />, text: "TypeScript" },
  { icon: <Icons.node className="" />, text: "Node" },
];

export default function Stack() {
  return (
    <div className="mt-5 gap-2 flex">
      <TooltipProvider>
        {tooltips.map((tooltip, index) => (
          <Tooltip key={index}>
            <TooltipTrigger>{tooltip.icon}</TooltipTrigger>
            <TooltipContent>
              <p>{tooltip.text}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}
