import { Dispatch, SetStateAction } from "react";
import { getUsers } from "@/api/users";
import { useQuery } from "react-query";
import UserTable from "./UserTable";
import { BarLoader } from "react-spinners";

const List = ({
  setUserCount,
}: {
  setUserCount: Dispatch<SetStateAction<number>>;
}) => {
  const {
    isLoading,
    isError,
    error,
    data: users,
  } = useQuery(["users"], () => getUsers(), {
    keepPreviousData: true,
    onSuccess: (data) => setUserCount(data.length),
  });
  let content;

  if (isLoading) {
    content = (
      <div className="w-full h-full grid place-items-center min-h-[40vh]">
        <BarLoader color="gray" />
      </div>
    );
  } else if (isError) {
    content = (
      <p className="text-red-600 text-center">{(error as Error).message}</p>
    );
  } else {
    content = <UserTable data={users} />;
  }
  return (
    <div className="block w-full overflow-x-auto overflow-y-hidden">
      {content}
    </div>
  );
};
export default List;
