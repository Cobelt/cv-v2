import { gql } from "@apollo/client"

export interface HobbiesDataType {
  hobbies: {
    data: [
      {
        id: string
        attributes: {
          name: string
          description: string
          icon: string
          media: {
            data: {
              id: string
              attributes: {
                url: string
                name: string
              }
            }
          }
        }
      }
    ]
  }
}

export const GET_HOBBIES = gql`
  query findHobbies {
    hobbies {
      data {
        id
        attributes {
          name
          description
          icon
          media {
            data {
              id
              attributes {
                url
                name
              }
            }
          }
        }
      }
    }
  }
`
