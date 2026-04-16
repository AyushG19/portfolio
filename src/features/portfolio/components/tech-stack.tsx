import Image from "next/image"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"

import { TECH_STACK } from "../data/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex items-center justify-center">
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <a
                        href={tech.href}
                        target="_blank"
                        rel="noopener"
                        aria-label={tech.title}
                      >
                        {tech.theme ? (
                          <>
                            <Image
                              src={`${tech.iconUrl}`}
                              alt={`${tech.title} icon`}
                              width={32}
                              height={32}
                              className="dark:hidden"
                              unoptimized
                            />
                            <Image
                              src={`${tech.darkIconUrl}`}
                              alt={`${tech.title} dark icon`}
                              width={32}
                              height={32}
                              className="hidden dark:block"
                              unoptimized
                            />
                          </>
                        ) : (
                          <Image
                            src={`${tech.iconUrl}`}
                            alt={`${tech.title} icon`}
                            width={32}
                            height={32}
                            unoptimized
                          />
                        )}
                      </a>
                    }
                  />
                  <TooltipContent>
                    <p>{tech.title}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            )
          })}
        </ul>
      </PanelContent>
    </Panel>
  )
}
