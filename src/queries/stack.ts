import { gql } from "@apollo/client"

export interface StackDataType {
  stackCategories: {
    data: [
      {
        id: string
        attributes: {
          subCategories: [
            {
              name: string
              skills: [
                {
                  name: string
                }
              ]
            }
          ]
        }
      }
    ]
  }
}

export const GET_STACK = gql`
  query findStack {
    stackCategories {
      data {
        id
        attributes {
          subCategories {
            name
            skills {
              name
            }
          }
        }
      }
    }
  }
`
