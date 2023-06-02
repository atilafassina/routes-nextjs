import { PokemonItem } from "./pokemon-item"

type PkmApiList = {
  results: Record<string, string>[]
}

export default async function PokeList() {
  const respList = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000")
  const { results: list }: PkmApiList = await respList.json()

  return (
    <ul>
      {list.map((pkm) => (
        <li key={pkm.name}>
          <PokemonItem name={pkm.name} />
        </li>
      ))}
    </ul>
  )
}
