import Title from "@/components/Title"
import { cN } from "@/lib"
import { type SkillCategoryDataType } from "@/queries/stack"
import { useTranslation } from "react-i18next"

interface ITechs {
  data: SkillCategoryDataType
  className?: string
}

export default function Techs({ className, data }: ITechs) {
  const [t] = useTranslation()

  return (
    <div className={cN("py-2 px-6 md:px-8 lg:py-8 lg:px-12", className)}>
      {data?.attributes?.subCategories.map((subCategory) => (
        <div key={subCategory?.id} className="py-4">
          <Title.h3 className="mb-4" text={t(subCategory?.name)} />

          <div className="flex flex-wrap gap-4">
            {subCategory?.skills?.data?.map?.((skill) => (
              <span
                key={skill?.attributes?.key}
                className={cN(
                  "rounded-full py-4 px-6 md:px-8 whitespace-nowrap overflow-hidden text-ellipsis",
                  "bg-stone-50"
                )}
              >
                {t(skill?.attributes?.key)}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
