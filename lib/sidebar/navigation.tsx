"use client"

import { Github, BookOpen, Search, Network, Grid3x3, Scale } from "lucide-react"
import { SettingsIcon } from "@/components/sidebar/sidebar-icons"
<<<<<<< HEAD
import type { NavigationItem, NavigationSection, NavigationItemId } from "@/types/navigation"

export type { NavigationItemId, NavigationVariant, NavigationItem, NavigationSection, NavigationProps } from "@/types/navigation"
=======
import type { NavigationItem, NavigationSection } from "@/types/navigation"
>>>>>>> 72f5e9a42557f609ed5df97c0146627fd02270af

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    id: "search",
    label: "Search",
    icon: <Search className="size-[18px]" />,
  },
  {
    id: "agentic-fleet",
    label: "Agentic Fleet",
    icon: <Network className="size-[18px]" />,
  },
  {
    id: "agentic-fabric",
    label: "Agentic Fabric",
    icon: <Grid3x3 className="size-[18px]" />,
  },
  {
    id: "qlaw",
    label: "Qlaw",
    icon: <Scale className="size-[18px]" />,
  },
]

<<<<<<< HEAD
export const EXPLORE_NAVIGATION: NavigationItem[] = []

=======
>>>>>>> 72f5e9a42557f609ed5df97c0146627fd02270af
export const FOOTER_LINKS: NavigationItem[] = [
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsIcon />,
  },
  {
    id: "github",
    label: "Github",
    icon: <Github className="size-[18px]" />,
  },
  {
    id: "docs",
    label: "Documentation",
    icon: <BookOpen className="size-[18px]" />,
  },
]

export const NAVIGATION_SECTIONS: NavigationSection[] = [
  {
    items: MAIN_NAVIGATION,
  },
]

<<<<<<< HEAD
export const DEFAULT_ACTIVE_ITEM: NavigationItemId = "search"
=======
export const DEFAULT_ACTIVE_ITEM: NavigationItem["id"] = "search"
>>>>>>> 72f5e9a42557f609ed5df97c0146627fd02270af
