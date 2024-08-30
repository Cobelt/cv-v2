import { container, fadeInItemRapid } from "@/animations/pageContainer"
import Title from "@/components/Title"
import { cN } from "@/lib"
import { type SkillCategoryDataType } from "@/queries/stack"
import { AnimatePresence, motion as m } from "framer-motion"
import { Fragment } from "react"
import { useTranslation } from "react-i18next"

interface ITechs {
  data: SkillCategoryDataType
  className?: string
}

const seeMoreClass = cN(
  "relative cursor-pointer font-bold w-10 h-10 md:w-10 md:h-10",
  "text-stone-50 hover:text-stone-800 transition-colors before:transition-transform",
  "before:inset-0 before:absolute before:border-4 before:border-dashed before:border-current before:rounded-full hover:before:rotate-[270deg]"
)

export default function Techs({ className, data }: ITechs) {
  const [t] = useTranslation()

  return (
    <div
      className={cN(
        "py-2 px-6 md:px-8 lg:py-8 lg:px-12 flex flex-col gap-4",
        className
      )}
    >
      {data?.attributes?.subCategories.map((subCategory) => (
        <AnimatePresence key={subCategory?.id}>
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            key={subCategory?.id}
          >
            <Title.h3 className="mb-4" text={t(subCategory?.name)} />

            <div className="flex flex-wrap gap-4">
              {subCategory?.skills?.data?.map?.((skill, index, arr) => (
                <Fragment key={skill?.attributes?.key}>
                  <m.span
                    key={skill?.attributes?.key}
                    variants={fadeInItemRapid}
                    className={cN(
                      "group relative whitespace-nowrap",
                      "before:absolute before:inset-0 before:bg-stone-800 before:rounded-full",
                      index > 2 ? "hidden" : "flex"
                    )}
                  >
                    <span
                      className={cN(
                        "relative overflow-hidden text-ellipsis rounded-full z-10 bg-stone-50 origin-top-left group-hover:-rotate-[2.5deg] transition-transform",
                        "px-4 py-2 md:px-8 md:py-2",
                        "after:absolute after:inset-0 after:border-b-4 after:border-r-4 after:border-stone-200 after:rounded-full"
                      )}
                    >
                      {t(skill?.attributes?.key)}
                    </span>
                  </m.span>
                  {index === 2 && arr?.length > 3 && (
                    <>
                      <input
                        type="checkbox"
                        id={"view-more-" + subCategory?.name}
                        className="view-more"
                      />
                      <m.label
                        key="moreButton"
                        variants={fadeInItemRapid}
                        className={cN(
                          "view-more-label flex items-center justify-center",
                          seeMoreClass
                        )}
                        htmlFor={"view-more-" + subCategory?.name}
                        tabIndex={0}
                      >
                        <span className="material-icons text-xl">add</span>
                      </m.label>
                    </>
                  )}
                </Fragment>
              ))}
              {subCategory?.skills?.data?.length > 3 && (
                <m.label
                  key="moreButton"
                  variants={fadeInItemRapid}
                  className={cN(
                    "hidden items-center justify-center",
                    seeMoreClass
                  )}
                  htmlFor={"view-more-" + subCategory?.name}
                  tabIndex={0}
                >
                  <span className="material-icons text-xl">remove</span>
                </m.label>
              )}
            </div>
          </m.div>
        </AnimatePresence>
      ))}
    </div>
  )
}
