import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const notify = () => {
  return (
    <>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Items>hello</Menu.Items>
            <Menu.Items>hello</Menu.Items>
            <Menu.Items>hello</Menu.Items>
          </div>
        </Menu.Items>
      </Transition>
    </>
  );
};

export default notify;
