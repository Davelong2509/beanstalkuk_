import { POST as submitEnquiry } from "../admissions/route";

export const runtime = "nodejs";

export async function POST(request) {
  return submitEnquiry(request);
}
