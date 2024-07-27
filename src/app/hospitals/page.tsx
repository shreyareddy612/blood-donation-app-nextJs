"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
// import {axios} from "axios";

export default function Hospitals() {
  const navigation = [
    { name: "Request Form", href: "/requestForm" },
    { name: "Donors", href: "/donars" },
    { name: "Blood Banks & Hospitals", href: "/hospitals" },
    { name: "Contact", href: "/contact" },
  ];

  const people = [
    {
      name: "Navajeevan Blood Centre",
      title: "Chaitanyapuri, Hyderabad",
      role: "Blood Bank",
      email: "example@example.com",
      telephone: "+1-202-555-0170",
    },
    {
      name: "Rudhira Health Organisation",
      title: "Himayat Nagar, Hyderabad",
      role: "Hospital",
      email: "example@example.com",
      telephone: "+1-202-555-0170",
    },
    {
      name: "Pranaam Blood Centre",
      title: "Nallagandla-serilingampally, Hyderabad",
      role: "Blood Bank",
      email: "example@example.com",
      telephone: "+1-202-555-0170",
    },
    {
      name: "St Theresas Blood Ban K",
      title: "Erragadda, Hyderabad",
      role: "Blood Bank",
      email: "example@example.com",
      telephone: "+1-202-555-0170",
    },
    {
      name: "Sunshine Blood Bank",
      title: "Paradise, Secunderabad",
      role: "Hospital",
      email: "example@example.com",
      telephone: "+1-202-555-0170",
    },
    {
      name: "Chiranjeevi Eye & Blood Bank Research & Development Centre",
      title: "Jubilee Hills, Hyderabad",
      role: "Blood Bank",
      email: "example@example.com",
      telephone: "+1-202-555-0170",
    },
    {
      name: "Asian Blood Bank",
      title: "As Rao Nagar, Hyderabad",
      role: "Blood Bank",
      email: "example@example.com",
      telephone: "+1-202-555-0170",
    },
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
              <Link
                href="/"
                className="text-md font-bold leading-8 text-red-900"
              >
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

        <div className="mt-20 mx-4 px-2">
          <div>
            <div className="py-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                List of few blood banks and hospitals
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Contact our tied up hospitals to find donors!
              </p>
            </div>
          </div>

          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {people.map((person) => (
              <li
                key={person.email}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div className="flex w-full items-center justify-between space-x-6 p-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-900">
                        {person.name}
                      </h3>
                      <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {person.role}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-sm text-gray-500">
                      {person.title}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                      <a
                        href={`mailto:${person.email}`}
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                      >
                        <EnvelopeIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-400"
                        />
                        Email
                      </a>
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                      <a
                        href={`tel:${person.telephone}`}
                        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                      >
                        <PhoneIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-400"
                        />
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
