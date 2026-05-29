import { Eyebrow } from "@workspace/ui/components/eyebrow"

export type NumberedItem = {
  title: string
  body: string
}

export type NumberedListProps = {
  eyebrow?: string
  heading?: string
  items: NumberedItem[]
}

export function NumberedList({ eyebrow, heading, items }: NumberedListProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        {(eyebrow || heading) && (
          <div className="max-w-2xl">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            {heading ? (
              <h2 className="mt-4 text-primary">{heading}</h2>
            ) : null}
          </div>
        )}
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={item.title} className="flex flex-col gap-3">
              <div className="font-mono text-xs font-semibold tracking-[0.18em] text-action uppercase">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
