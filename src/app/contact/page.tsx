"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import {axios} from "axios";

export default function Contact() {

  const navigation = [
    { name: "Request Form", href: "/requestForm" },
    { name: "Donars", href: "/donars" },
    { name: "Blood Banks & Hospitals", href: "/hospitals" },
    { name: "Contact", href: "/contact" },
  ];
    

    return (
      <>
    
    <header className="bg-red-300 absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
      <Link href="/" className="text-md font-bold leading-8 text-red-900">
        BLOOD CONNECT
      </Link>
    </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
      </>
    )
  }
  