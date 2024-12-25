"use client";

import { useState } from "react";
import UserCard from "./UserCard";
import UserModal from "./UserModal";

import { User } from "@/types/user";

interface UserManagementProps {
  initialUsers: User[];
}

const UserManagement: React.FC<UserManagementProps> = ({ initialUsers }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalType, setModalType] = useState<"add" | "edit">("add");

  const handleAdd = () => {
    setSelectedUser(null);
    setModalType("add");
    setModalOpen(true);
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setModalType("edit");
    setModalOpen(true);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setUsers(initialUsers);
    } else {
      const filtered = initialUsers.filter((user) => {
        const name = `${user.name}`.toLowerCase();
        const email = user.email.toLowerCase();
        const location = user.location.toLowerCase();
        const id = user.id.toLowerCase();

        return (
          name.includes(query) ||
          email.includes(query) ||
          location.includes(query) ||
          id.includes(query)
        );
      });

      setUsers(filtered);
    }
  };

  const handleDelete = (id: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name, email, ID, or location"
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add User
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={() => handleEdit(user)}
            onDelete={() => handleDelete(user.id)}
          />
        ))}
      </div>
      {modalOpen && (
        <UserModal
          isOpen={modalOpen}
          type={modalType}
          user={selectedUser}
          users={users}
          setUsers={setUsers}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UserManagement;
