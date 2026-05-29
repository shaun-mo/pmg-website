import Link from "next/link"

export function AtsFooter() {
  return (
    <footer className="border-t border-border bg-blue-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} PMG Project Management Group, LLC ·
          Internal application
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <Link
              href="https://pmgunited.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              pmgunited.com
            </Link>
          </li>
          <li>
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
