import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();

  const token = cookieStore.get("admin_token")?.value;

  if (!token) redirect("/admin/login");

  try {
    jwt.verify(token, process.env.JWT_SECRET!);
  } catch {
    redirect("/admin/login");
  }

  return <>{children}</>;
}
