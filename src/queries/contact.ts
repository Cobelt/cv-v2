import { gql } from "@apollo/client"

export interface ContactDataType {
  id: string
}

export const CONTACT_ME = gql`
  mutation contact($data: ContactInput!) {
    createContact(data: $data) {
      data {
        id
      }
    }
  }
`
