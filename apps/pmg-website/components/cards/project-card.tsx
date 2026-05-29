import Link from "next/link"
import Image from "next/image"

import { ArrowPin } from "@/components/ui/arrow-pin"
import type { Project } from "@/lib/placeholder-data"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex aspect-[16/10] flex-col justify-end overflow-hidden bg-primary"
    >
      <Image
        src={project.heroImage}
        alt={project.name}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <ArrowPin />
      <div className="relative z-10 flex flex-col gap-2 p-6 text-white md:p-8">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-white/85 uppercase">
          <span>{project.market}</span>
          <span aria-hidden>·</span>
          <span>{project.location}</span>
        </div>
        <h3 className="max-w-md text-xl leading-tight font-semibold md:text-2xl">
          {project.name}
        </h3>
      </div>
    </Link>
  )
}
