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

const seeMoreClass =
  "cursor-pointer rounded-full border-4 border-dashed border-stone-50 text-stone-50 font-bold w-10 h-10 md:w-12 md:h-12 hover:border-orange-300 hover:text-orange-300 transition-colors"

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
                  {/* TODO : Put that in class */}
                  <m.span
                    key={skill?.attributes?.key}
                    variants={fadeInItemRapid}
                    className={cN(
                      "relative bg-stone-50 rounded-full px-4 py-2 md:px-6 md:py-3 whitespace-nowrap overflow-hidden text-ellipsis",
                      "before:absolute before:left-0 before:bottom-0 before:right-0 before:top-full hover:before:top-0 before:rounded-full",
                      "before:transition-all hover:before:delay-0 before:delay-200 before:bg-orange-300 before:mix-blend-exclusion",
                      "after:absolute after:left-0 after:right-0 after:top-0 after:bottom-full hover:after:bottom-0 after:rounded-full",
                      "after:transition-all hover:after:delay-200 after:bg-white after:mix-blend-exclusion",
                      index > 2 && "hidden"
                    )}
                  >
                    {t(skill?.attributes?.key)}
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
                        <span className="material-icons text-2xl">add</span>
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
                  <span className="material-icons text-2xl">remove</span>
                </m.label>
              )}
            </div>
          </m.div>
        </AnimatePresence>
      ))}
    </div>
  )
}
