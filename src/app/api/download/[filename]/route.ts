import { NextRequest } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const ALLOWED_FILES = ["vatsy_0.1.6_x64-setup.exe"];

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;

  if (!ALLOWED_FILES.includes(filename)) {
    return new Response("File not found", { status: 404 });
  }

  const filePath = path.join(process.cwd(), "public", filename);

  try {
    const fileBuffer = await readFile(filePath);

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": fileBuffer.byteLength.toString(),
      },
    });
  } catch {
    return new Response("File not found", { status: 404 });
  }
}
