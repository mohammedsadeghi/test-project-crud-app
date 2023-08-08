import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { ResponseDataType } from "@/types/requestTypes";
import { revalidateTag } from "next/cache";

export async function GET(req: Request) {
  const filePath = path.resolve("./public", "data", "PERSON.txt");

  const fileStats = fs.statSync(filePath);
  if (fileStats.size === 0) {
    // Handle the case when the file is empty
    return NextResponse.json({ status: 400, message: "File is empty" });
  }

  const bufferData = fs.readFileSync(filePath);
  const jsonString = bufferData.toString(); // Convert Buffer to string
  const people: ResponseDataType = JSON.parse(jsonString); // Parse JSON string to object

  return NextResponse.json(people, { status: 200 });
}

export async function POST(req: NextRequest) {
  const filePath = path.resolve("./public", "data", "PERSON.txt");
  const { data }: { data: ResponseDataType["data"][0] } = await req.json();
  //check tag for revalidation
  const tag = req.nextUrl.searchParams.get("tag");
  console.log({ tag });

  if (!tag) {
    return NextResponse.json({ message: "Missing tag param" }, { status: 400 });
  }
  // Check if the file is empty
  const fileStats = fs.statSync(filePath);

  const bufferData = fs.readFileSync(filePath);
  const jsonString = bufferData.toString(); // Convert Buffer to string

  fs.writeFileSync(
    filePath,
    JSON.stringify({
      data:
        fileStats.size !== 0 ? [...JSON.parse(jsonString).data, data] : [data],
    } as ResponseDataType)
  );
  console.log({ tag });
  revalidateTag(tag);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
//! I did implement the fs.unlinkSync method but it turns out it deletes the file (Person.txt) entirely! I see no point in deleting the file!
