import React from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

import { User } from "@/types/user";

interface UserCardProps {
  user: User;
  onEdit: () => void;
  onDelete: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <img
        src={user.image}
        alt={user.name}
        className="w-20 h-20 rounded-full mx-auto border border-gray-200"
      />
      <h2 className="text-xl font-semibold text-center mt-4">{user.name}</h2>
      <p className="text-sm text-gray-500 text-center">{user.email}</p>
      <p className="text-sm text-gray-400 text-center mt-1">{user.location}</p>

      <div className="flex justify-between mt-4">
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Edit
        </button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
              Delete
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this user? This action cannot be
                undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <button
                onClick={onDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Confirm
              </button>
              <AlertDialogTrigger asChild>
                <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition">
                  Cancel
                </button>
              </AlertDialogTrigger>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default UserCard;
