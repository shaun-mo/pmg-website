import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { ArrowPin } from "@/components/ui/arrow-pin"
import type { Service } from "@/lib/placeholder-data"

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col gap-4"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={service.heroImage}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <ArrowPin />
      </div>
      <div>
        <div className="flex items-center gap-2 text-lg font-semibold text-primary transition-colors group-hover:text-action">
          {service.name}
          <ArrowUpRight className="h-4 w-4 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {service.summary}
        </p>
      </div>
    </Link>
  )
}
