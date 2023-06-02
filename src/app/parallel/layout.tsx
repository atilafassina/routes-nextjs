export default function Layout({
  children,
  pokelist,
  pokemon,
}: Record<"children" | "pokelist" | "pokemon", React.ReactNode>) {
  return (
    <main>
      <header className="text-3xl p-5">{children}</header>
      <div className="grid grid-cols-2">
        <aside className="pl-2">{pokelist}</aside>
        <article className="h-screen fixed right-[50%] top-10">
          {pokemon}
        </article>
      </div>
    </main>
  )
}
