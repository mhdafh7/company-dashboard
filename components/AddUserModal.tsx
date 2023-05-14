"use client";
import { ChangeEvent, FormEvent, useId, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useAddUserModalStore } from "@/store/userModalStore";
import { addUser } from "@/api/users";
import { XMarkIcon } from "@heroicons/react/20/solid";

const AddUserModal = () => {
  const { toggle } = useAddUserModalStore();

  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });

  const queryClient = useQueryClient();
  const newId = useId();

  const addUserMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addUserMutation.mutate({
      id: newId,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });

    toggle();
  };
  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };
  return (
    <div className="fixed z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-screen h-screen bg-black bg-opacity-10 backdrop-blur-sm grid place-items-center px-6">
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="flex flex-col gap-4 top-0 right-0 bg-white px-10 pb-12 pt-8 rounded-lg relative min-w-[42rem]"
      >
        {/* modal close button */}
        <span
          onClick={() => {
            toggle();
          }}
          className="absolute -top-2 -right-2 h-8 w-8 bg-gray-600 rounded-full hover:bg-black transition-color cursor-pointer flex items-center justify-center"
        >
          <XMarkIcon className="w-6 h-6 text-white" />
        </span>
        <h4 className="font-bold text-xl mb-4">New User Details</h4>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Name</label>
          <input
            type="text"
            name="name"
            required
            className="border-2 border-gray-300 rounded-md w-full px-2 py-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Email</label>
          <input
            type="text"
            name="email"
            required
            className="border-2 border-gray-300 rounded-md w-full px-2 py-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Role</label>
          <input
            type="text"
            name="role"
            required
            className="border-2 border-gray-300 rounded-md w-full px-2 py-2"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-700 text-white hover:bg-blue-900 transition-colors px-2 py-3 border-none mt-3 rounded-lg font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddUserModal;
