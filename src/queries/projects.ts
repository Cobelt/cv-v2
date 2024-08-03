import { gql } from "@apollo/client"

export interface ProjectsDataType {
  projects: {
    data: [
      {
        id: string
        attributes: {
          name: string
          details?: string
          dateInfos?: string
          link?: string
          isPaused?: boolean
          isDone?: boolean
          isDev?: boolean
        }
      }
    ]
  }
}

export const GET_PROJECTS = gql`
  query findProjects {
    projects {
      data {
        id
        attributes {
          name
          details
          dateInfos
          link
          isPaused
          isDone
          isDev
        }
      }
    }
  }
`
