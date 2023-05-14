'use client';
import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {useMutation, useQueryClient} from 'react-query';
import {useEditUserModalStore} from '../store/userModalStore';
import {updateUser} from '../api/users';
import {XMarkIcon} from '@heroicons/react/20/solid';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditUserModal = () => {
  const {toggle, modalData, modalId} = useEditUserModalStore();

  const [editUser, setEditUser] = useState({name: '', email: '', role: ''});

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (payload: {
      id: string;
      data: {name: string; email: string; role: string};
    }) => updateUser(payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
        toast.success('User Updated Successfully', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      },
    }
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate({
      id: modalId,
      data: {
        name: editUser.name,
        email: editUser.email,
        role: editUser.role,
      },
    });

    toggle();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target as HTMLInputElement;
    setEditUser({
      ...editUser,
      [name]: value,
    });
  };
  useEffect(() => {
    setEditUser(modalData);
  }, [modalData]);
  return (
    <div className="fixed z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-screen h-screen bg-gray-500 bg-opacity-75 transition-opacity grid place-items-center px-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 top-0 right-0 bg-white px-10 pb-12 pt-8 rounded-lg relative min-w-[42rem]"
      >
        {/* modal close button */}
        <span
          onClick={() => {
            toggle();
          }}
          className="absolute -top-2 -right-2 h-12 w-12 bg-gray-600 rounded-full p-2 hover:bg-black transition-color cursor-pointer"
        >
          <XMarkIcon className="w-8 h-8 text-white" />
        </span>
        <h4 className="font-bold text-xl mb-4">Edit User Details</h4>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Name</label>
          <input
            type="text"
            name="name"
            required
            value={editUser.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEditUser({
                ...editUser,
                name: (e.target as HTMLInputElement).value,
              });
            }}
            className="border-2 border-gray-300 rounded-md w-full px-2 py-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Email</label>
          <input
            type="text"
            name="email"
            required
            value={editUser.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEditUser({
                ...editUser,
                email: (e.target as HTMLInputElement).value,
              });
            }}
            className="border-2 border-gray-300 rounded-md w-full px-2 py-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Role</label>
          <input
            type="text"
            name="role"
            required
            value={editUser.role}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEditUser({
                ...editUser,
                role: (e.target as HTMLInputElement).value,
              });
            }}
            className="border-2 border-gray-300 rounded-md w-full px-2 py-2"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-700 text-white hover:bg-blue-900 transition-colors px-2 py-3 border-none mt-3 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default EditUserModal;
