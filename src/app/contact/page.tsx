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
      <div className="bg-red-100 h-screen">
    
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

      <div className="bg-red-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                <p className="mt-4 leading-7 text-gray-600">
                  Feel free to contact us if you are having trouble finding donars or for any other issues!
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Phone</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                 
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+91 8989898989</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Email</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a href="mailto:press@example.com" className="font-semibold text-indigo-600">
                          bloodconnect@gmail.com
                        </a>
                      </dd>
                    </div>
                 
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Address</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                 
                    <div className="mt-1">
                      <dt className="sr-only">Address</dt>
                      <dd>Qwerty towers, xyz colony, Hyderabad, Telangana</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Instagram/Twitter</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                 
                    <div className="mt-1">
                      <dt className="sr-only">ID</dt>
                      <dd>blood_connect</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </div>

      </div>

      </>
    )
  }
  








  