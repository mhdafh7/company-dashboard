import { ArrowDownTrayIcon, PlusIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import {
  useAddUserModalStore,
  useEditUserModalStore,
} from "@/store/userModalStore";

const Header = () => {
  const { toggle, isOpen } = useAddUserModalStore();
  const editUserModalStore = useEditUserModalStore();

  return (
    <section className="flex max-md:flex-col justify-between px-4 pb-3 pt-6 border-b-gray-200 border-b-2">
      <div className="mx-3 mb-3">
        <h4 className="text-xl font-medium">Users</h4>
        <p className="text-gray-400">
          Manage your team members and their account permissions here.
        </p>
      </div>
      <div className="mx-3 mb-3 flex gap-3 text-center">
        <Button
          icon={<ArrowDownTrayIcon />}
          text="Download CSV"
          additionalClasses="white hover:bg-gray-200"
        />
        <Button
          icon={<PlusIcon />}
          text="Add User"
          onClickFunciton={() => {
            console.log("clicked", isOpen);
            toggle();
          }}
          additionalClasses={"bg-blue-500 hover:bg-blue-800 text-white"}
        />
      </div>
    </section>
  );
};
export default Header;
