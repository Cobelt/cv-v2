import { gql } from "@apollo/client"

export interface EducationsDataType {
  educations: {
    data: [
      {
        id: string
        attributes: {
          grade: string
          name: string
          yearStart: number
          yearEnd: number
          school: string
          city: string
        }
      }
    ]
  }
}

export const GET_EDUCATIONS = gql`
  query findEducations {
    educations {
      data {
        id
        attributes {
          grade
          name
          yearStart
          yearEnd
          school
          city
        }
      }
    }
  }
`
