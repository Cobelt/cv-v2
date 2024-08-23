import { gql } from "@apollo/client"

export interface SubCategoryDataType {
  id: string
  name: string
  skills: {
    data: [
      {
        id: string
        attributes: {
          key: string
          level: string
        }
      }
    ]
  }
}

export interface SkillCategoryDataType {
  id: string
  attributes: {
    name: string
    subCategories: SubCategoryDataType[]
  }
}

export interface SkillCategoriesDataType {
  techs: {
    data: SkillCategoryDataType
  }
  knowHow: {
    data: SkillCategoryDataType
  }
  softSkills: {
    data: SkillCategoryDataType
  }
}

export const GET_SKILLS = gql`
  fragment SkillCategoryFragment on SkillCategoryEntity {
    id
    attributes {
      name
      subCategories {
        id
        name
        skills {
          data {
            id
            attributes {
              key
              level
            }
          }
        }
      }
    }
  }

  query GET_SKILLS {
    techs: skillCategory(id: 1) {
      data {
        ...SkillCategoryFragment
      }
    }

    knowHow: skillCategory(id: 2) {
      data {
        id
        attributes {
          name
          subCategories {
            id
            name
            skills {
              data {
                id
                attributes {
                  key
                  level
                }
              }
            }
          }
        }
      }
    }

    softSkills: skillCategory(id: 3) {
      data {
        id
        attributes {
          name
          subCategories {
            id
            name
            skills {
              data {
                id
                attributes {
                  key
                  level
                }
              }
            }
          }
        }
      }
    }
  }
`
