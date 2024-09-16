import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Icons } from "./icons/dock-icons";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function MyDock() {
  return (
    <div className="relative">
      <Dock direction="middle">
        <DockIcon>
          <a href="https://github.com/mathzds" target="_blank" rel="noopener noreferrer">
            <Icons.github className="size-6" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="https://www.linkedin.com/in/pedro-machado-filho/" target="_blank" rel="noopener noreferrer">
            <Icons.linkedin className="size-6" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <Icons.discord className="size-6" />
          </a>
        </DockIcon>
      </Dock>
    </div>
  );
}
