"use client"

import { useTransition } from "react"
import { setPokemon } from "./actions"

export const PokemonItem = ({ name }: Record<"name", string>) => {
  const [isPending, startTransition] = useTransition()

  return (
    <form action={() => startTransition(() => setPokemon(name))}>
      <button type="submit" name="pokemon">
        {name} {isPending ? " - on the way!" : ""}
      </button>
    </form>
  )
}
