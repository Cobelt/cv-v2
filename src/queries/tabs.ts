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
        }
      }
    ]
  }
}

export const GET_TABS = gql`
  query findTabs {
    tabs {
      data {
        id
        attributes {
          key
          icon
          url
        }
      }
    }
  }
`
