"use client";
import Head from "next/head";
import {
  useAddUserModalStore,
  useEditUserModalStore,
} from "@/store/userModalStore";
import { ToastContainer } from "react-toastify";
import Header from "@/components/Header";
import AddUserModal from "@/components/AddUserModal";
import EditUserModal from "@/components/EditUserModal";
import List from "@/components/List";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function Home() {
  const addUserModalStore = useAddUserModalStore();
  const editUserModalStore = useEditUserModalStore();
  const [userCount, setUserCount] = useState(0);
  return (
    <>
      <Head>
        <title>Company Settings</title>
        <meta name="description" content="Company Settings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {addUserModalStore.isOpen ? (
        <AddUserModal />
      ) : editUserModalStore.isOpen ? (
        <EditUserModal />
      ) : null}
      <div className="rounded-xl border-2 shadow-sm shadow-gray-200 w-full flex flex-col justify-center overflow-hidden relative">
        {/* Header */}
        <Header userCount={userCount} />
        {/* List */}
        <List setUserCount={setUserCount} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
