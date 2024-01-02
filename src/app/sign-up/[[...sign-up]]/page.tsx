import { SignUp } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();
  if (user !== undefined) {
    redirect("/submit");
  }
  return <SignUp afterSignUpUrl={"/submit"} />;
}
