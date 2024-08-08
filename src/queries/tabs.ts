import { gql } from "@apollo/client"

export interface TabsDataType {
  tabs: {
    data: [
      {
        id: string
        attributes: {
          key: string
          icon: string
          url: string
          order: number
        }
      }
    ]
  }
}

export const GET_TABS = gql`
  query findTabs {
    tabs(sort: "order") {
      data {
        id
        attributes {
          order
          key
          icon
          url
        }
      }
    }
  }
`
