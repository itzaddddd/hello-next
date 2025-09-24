import { type NextRequest } from "next/server"
import { headers, cookies } from "next/headers"

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get("Authorization"));

  const headerList = await headers();
  console.log(headerList.get("authorization"));

  const theme = request.cookies.get("theme");
  console.log(theme)

  const cookieStore = await cookies()
  cookieStore.set("resultsPage", "20")
  console.log(cookieStore.get("resultsPage"))

  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "content-type": "text/html",
      "set-cookie": "theme=dark"
    }
  })
}