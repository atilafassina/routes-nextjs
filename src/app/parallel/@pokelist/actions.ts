"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

function sleep(s: number = 0) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000))
}

export async function setPokemon(pokemon: string) {
  "use server"
  console.log("called here")

  await sleep(3)
  cookies().set("pokemon", pokemon)

  revalidatePath("/parallel")
}
