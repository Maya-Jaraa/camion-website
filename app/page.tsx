import { redirect } from "next/navigation";

// Redirect root path to default locale (Arabic)
export default function RootPage() {
  redirect("/ar");
}

