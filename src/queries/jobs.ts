import { gql } from "@apollo/client"

export interface JobsDataType {
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

export const GET_JOBS = gql`
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
