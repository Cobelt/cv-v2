import { gql } from "@apollo/client"

export interface ContactDataType {
  createContact: {
    data: {
      id: string
    }
  }
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
