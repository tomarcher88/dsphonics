"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from '../assets/DSPhonicsLogo.webp'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white z-10">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between p-6 lg:px-6"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">D S Phonics</span>
            <img alt="" src={logo} className="h-10 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="/"
            className="font-semibold text-xl text-gray-900 font-header"
          >
            Home
          </a>
          <a
            href="/services"
            className="font-semibold text-xl text-gray-900 font-header"
          >
            Services
          </a>
          <a
            href="/accreditation"
            className="font-semibold text-xl text-gray-900 font-header"
          >
            Accreditation
          </a>
          <a
            href="#"
            className="font-semibold text-xl text-gray-900 font-header"
          >
            Contact
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">D S Phonics</span>
              <img alt="" src={logo} className="h-10 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-4xl font-semibold text-gray-800 hover:bg-gray-50 font-header"
                >
                  Home
                </a>
                <a
                  href="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-4xl font-semibold text-gray-800 hover:bg-gray-50 font-header"
                >
                  Services
                </a>
                <a
                  href="/accreditation"
                  className="-mx-3 block rounded-lg px-3 py-2 text-4xl font-semibold text-gray-800 hover:bg-gray-50 font-header"
                >
                  Accreditation
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-4xl font-semibold text-gray-800 hover:bg-gray-50 font-header"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
