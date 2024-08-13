import { gql } from "@apollo/client"

export interface JobsDataType {
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
  jobs: {
    data: [
      {
        id: string
        attributes: {
          key: string
          title: string
          missions: [
            {
              id: string
              key: string
            }
          ]
          company: string
          companyDetails: string
          dateStart: Date
          dateEnd: Date
        }
      }
    ]
  }
}

export const GET_TIMELINE = gql`
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
  query findJobs {
    jobs {
      data {
        id
        attributes {
          title
          missions {
            id
            key
          }
          company
          companyDetails
          dateStart
          dateEnd
        }
      }
    }
  }
`
