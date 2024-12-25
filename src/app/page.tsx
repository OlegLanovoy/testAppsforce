import UserManagement from "@/components/UserManagement";
import { getUsers } from "@/utils/validation";

export default async function HomePage() {
  const users = await getUsers();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <UserManagement initialUsers={users} />
    </main>
  );
}
