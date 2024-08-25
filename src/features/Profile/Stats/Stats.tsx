import { cN } from "@/lib"
import { WithClassNameProps } from "@/types"
import { Stat } from "./Stat"

export default function Stats({ className }: WithClassNameProps) {
  return (
    <div
      className={cN(
        "w-full gap-y-6 gap-x-12 grid grid-cols-2 lg:grid-cols-4 overflow-hidden",
        className
      )}
    >
      <Stat
        href="/timeline"
        arrowColor="text-indigo-400"
        count={6}
        text="ans d'expérience"
      />
      <Stat
        href="/projects"
        arrowColor="text-purplish-600"
        count={14}
        text="projets web"
      />
      <Stat
        href="/stack"
        arrowColor="text-blue-500"
        count={22}
        text="technos domptées"
      />
      <Stat
        href="https://docs.google.com/document/d/1VQQZVnw0dl3XgDyoYZCu7IS47F7ttdg6q0J1BEOPo0g/edit?usp=sharing"
        target="_blank"
        count={6342}
        text="mots"
      />
    </div>
  )
}
