import { gql } from "@apollo/client"
import { type ImageDataType } from "."

export interface ProjectSkillDataType {
  attributes: {
    skill: string
    link: string
  }
}

export interface ProjectsDataType {
  projects: {
    data: [
      {
        id: string
        attributes: {
          order: number
          name: string
          description: string
          subTitle?: string
          dates?: string
          link?: string
          githubLink?: string
          isPaused?: boolean
          isDone?: boolean
          isDev?: boolean

          skills?: {
            data: ProjectSkillDataType[]
          }

          image: {
            data: ImageDataType
          }
        }
      }
    ]
  }
}

export const GET_PROJECTS = gql`
  query findProjects {
    projects(
      sort: "order"
      filters: { order: { gte: 0 } }
      pagination: { limit: 50 }
    ) {
      data {
        id
        attributes {
          order
          name
          subTitle
          description
          dates
          link
          isPaused
          isDone
          isDev
          githubLink
          skills {
            data {
              attributes {
                skill
                link
              }
            }
          }

          image {
            data {
              attributes {
                name
                alternativeText
                width
                height
                caption
                url
              }
            }
          }
        }
      }
    }
  }
`
