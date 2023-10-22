import React from "react";

// headless - ui
import { Disclosure } from "@headlessui/react";

// react-icons
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const PlayFilters = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center gap-3 py-4">
            {open ? <BiChevronUp /> : <BiChevronDown />}
            <span className={open ? "text-red-600" : "text-gray-700"}>
              {props.title}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div className="flex items-center gap-3 flex-wrap">
              {props.tags.map((tag, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 rounded px-3 py-1"
                >
                  <span className="text-red-500">{tag}</span>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default PlayFilters;
