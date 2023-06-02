import { cookies } from "next/headers"
import Image from "next/image"

type Pokemon = {
  name: string
  sprites: {
    front_default: string
  }
}

export default async function Pokemon() {
  const pkmName = cookies().get("pokemon")?.value || "pikachu"

  const pkmResp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmName}`)
  const pkm: Pokemon = await pkmResp.json()

  return (
    <header>
      <h1>You have {pkm.name}</h1>
      <Image
        priority
        src={pkm.sprites.front_default}
        alt={pkm.name}
        width={100}
        height={100}
      />
    </header>
  )
}
