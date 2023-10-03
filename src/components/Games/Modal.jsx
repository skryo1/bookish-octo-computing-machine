import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import PlaceholderImage from "../../assets/placeholder.jpg";

const Modal = ({ isOpen, setIsOpen, modalData }) => {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      // as={Fragment}
    >
      <Dialog onClose={() => setIsOpen(false)} className="relative z-[10000]">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen overflow-y-auto items-center justify-center p-4">
          <Dialog.Panel className="bg-[#101216] relative flex max-lg:flex-col w-[70%] max-xl:w-full text-white p-[30px]">
            <button
              className="absolute font-bold top-0 outline-none flex items-center justify-center right-0 px-4 uppercase py-3 bg-[#191b1f] text-[#eee] z-10 opacity-100"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
            <div className="flex flex-col gap-4">
              <div className="flex max-sm:flex-col items-center">
                {modalData?.image !== undefined && modalData?.image !== "" ? (
                  <img
                    src={modalData?.image}
                    alt=""
                    className="w-28 h-28 object-cover rounded-lg"
                  />
                ) : (
                  <img
                    src={PlaceholderImage}
                    alt=""
                    className="w-28 h-28 object-cover rounded-lg"
                  />
                )}
                <h2 className="text-[1.5rem] py-[16px] px-[24px]">
                  {modalData?.title}
                </h2>
              </div>
              <hr />
              <div>
                <h5>
                  <p className="overflow-x-hidden max-h-[275px]">
                    {modalData?.details}
                  </p>
                </h5>
              </div>
              {modalData?.buttonLink !== undefined &&
              modalData?.buttonLink !== "" ? (
                <a
                  href={modalData?.buttonLink}
                  target="_blank"
                  className="px-4 py-2 bg-[#2ca344] rounded-lg w-fit"
                >
                  Play
                </a>
              ) : (
                ""
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
