import { GetServerSidePropsContext } from "next"
import { SITE_URL } from "./config"

export async function GetPreviousRouteProp(context: GetServerSidePropsContext) {
  const url = new URL(context.req.headers.referer ?? SITE_URL)
  return {
    props: {
      previousRoute: url.pathname,
    },
  }
}
