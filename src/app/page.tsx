import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="mb-32 grid text-center lg:mb-0 lg:grid-rows-4 lg:text-left">
        <li>
          <Link
            href="/group"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors "
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Group route
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm text-neutral-400`}>
              A <code className="font-mono text-white">(group)</code> does not
              show on segment.
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="/parallel"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Parallel Route
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm text-neutral-400`}>
              A <code className="font-mono text-white">@parallel</code> is
              special so we can render multiple routes in the same segment.
            </p>
          </Link>
        </li>
      </ul>
    </main>
  )
}
