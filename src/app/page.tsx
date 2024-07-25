//@ts-ignore

"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Request Form", href: "/requestForm" },
  { name: "Donors", href: "/donars" },
  { name: "Blood Banks & Hospitals", href: "/hospitals" },
  { name: "Contact", href: "/contact" },
];

const stats = [
  { id: 1, name: "People lives saved", value: "44 million" },
  { id: 2, name: "Donors donated", value: "10,000" },
  { id: 3, name: "New users annually", value: "46,000" },
];

const people = [
  {
    name: "Shreekar J",
    role: "Student",

  },
  {
    name: "Sarah",
    role: "Software Engineer",
  },
  {
    name: "Raju",
    role: "Co-Founder / CEO",
    },
  {
    name: "Leslie",
    role: "Farmer",
     },
  {
    name: "Ramu",
    role: "Chef",
    },
    {
      name: "Anjan",
      role: "Employee",
      },
  // More people...
];

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-red-200">
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
      <main>
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>

          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>

          <div>
            <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 ">
                      Be the hero someone needs.
                    </h1>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 ">
                      Donate blood today!
                    </h1>

                    <div className="mt-10 flex items-center gap-x-6">
                      <Link
                        href="/donars"
                        className="rounded-md bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                      >
                        Find Donors
                      </Link>
                    </div>
                  </div>
                  <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-300 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="mx-auto flex max-w-xs flex-col gap-y-4"
                  >
                    <dt className="text-base leading-7 text-gray-600">
                      {stat.name}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="bg-red-200 py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Meet our valuable donors
                </h2>
              </div>
              <ul
                role="list"
                className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
              >
                {people.map((person) => (
                <li key={person.name} className="rounded-lg shadow-lg overflow-hidden">
                <div className="bg-red-300 flex items-center gap-x-6 p-2 rounded-lg">
                  <div className="bg-white p-2 rounded-lg shadow-md flex-1">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
              
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-red-300 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <h2 className="text-lg font-semibold leading-8 text-gray-900">
                  Trusted by the world’s most innovative teams
                </h2>
                <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
                  <Image
                    alt="Transistor"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg"
                    width={158}
                    height={48}
                    className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                  />
                  <Image
                    alt="Reform"
                    src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                    width={158}
                    height={48}
                    className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                  />
                  <Image
                    alt="Tuple"
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
                    width={158}
                    height={48}
                    className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                  />
                  <Image
                    alt="SavvyCal"
                    src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
                    width={158}
                    height={48}
                    className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                  />
                  <Image
                    alt="Statamic"
                    src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg"
                    width={158}
                    height={48}
                    className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-red-200">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2024 Shreekar Jukareddy, Blood Connect. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
