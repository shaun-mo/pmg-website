import Link from "next/link"
import Image from "next/image"

import { ArrowPin } from "@workspace/ui/components/arrow-pin"
import type { Market } from "@/lib/placeholder-data"

export function MarketCard({ market }: { market: Market }) {
  return (
    <Link
      href={`/markets/${market.slug}`}
      className="group relative flex aspect-square flex-col justify-end overflow-hidden bg-primary"
    >
      <Image
        src={market.heroImage}
        alt={market.name}
        fill
        sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
      <ArrowPin size="sm" />
      <h3 className="relative z-10 p-5 text-base leading-tight font-semibold text-white md:text-lg">
        {market.name}
      </h3>
    </Link>
  )
}
