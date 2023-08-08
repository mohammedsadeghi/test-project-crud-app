import { notFound } from "next/navigation";
import axios from "axios";
import { ResponseDataType } from "@/types/requestTypes";
import CustomizedTables from "@/components/dashboard/table/table";

export const runtime = "edge";

/**
 *  (server) homepage.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
 */
export default async function WxServerHome() {
  // Get the data.
  const res = await fetch("http://localhost:3000/api/persons", {
    next: {
      tags: ["people"],
      revalidate: 300, //* revalidate after 5 mins
    },
    //? the tags property set here will help to reFetch data after post method. You can read more here: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
  });

  //! there is an error in nextjs app routing which prevents using axios in serverSide you can read more here: https://github.com/axios/axios/issues/5523#issuecomment-1425886092

  //!  there might be ways to work around this issue but I didn't have enogh time to test them: To resolve this issue, you can use the axios library with the axios-mock-adapter package to mock the API response in your Next.js server-side code. Here's an example of how you can modify your code to use axios-mock-adapter
  const data: ResponseDataType = await res.json();

  if (!data) {
    notFound();
  }

  return <CustomizedTables data={data.data} />;
}
