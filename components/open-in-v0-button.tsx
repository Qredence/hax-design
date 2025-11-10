'use client'

import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface OpenInV0ButtonProps {
  name: string
  className?: string
}

export function OpenInV0Button({ name, className }: OpenInV0ButtonProps) {
  // Construct v0.dev URL with component name
  // Using the registry pattern: https://v0.dev/r/[component-name]
  const v0Url = `https://v0.dev/r/${name}`

  return (
    <Link
      href={v0Url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground bg-background border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${className || ''}`}
    >
      <span>Open in v0</span>
      <ExternalLink className="size-4" />
    </Link>
  )
}

