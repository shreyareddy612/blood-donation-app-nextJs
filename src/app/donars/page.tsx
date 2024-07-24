"use client";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import axios from "axios";
import toast from "react-hot-toast";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Donars() {
  const people = [
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
    // More people...
  ];
  const navigation = [
    { name: "Request Form", href: "/requestForm" },
    { name: "Donars", href: "/donars" },
    { name: "Blood Banks & Hospitals", href: "/hospitals" },
    { name: "Contact", href: "/contact" },
  ];

  const [donar, setDonar] = React.useState({
    name: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    weight: "",
    bloodGroup: "",
    address: "",
  });
  const [donarList, setDonarList] = React.useState([]);
  console.log(donar, "form submitted 1");

  const onRequestingSubmit = async (event: any) => {
    event.preventDefault();
    alert("1");

    try {
      const donarData = donar;
      console.log(donarData, "donarData");
      // setLoading(true);
      const response = await axios.post("/api/users/donarForm", donar);

      console.log(response, "apiiii");
      // route.push('/login');
      // routeToLogin();
    } catch (error: any) {
      console.log(error.message, "error during submitting");
      toast.error(error.message);
    }
  };

  const getRequestedPeople = async () => {
    try {
      const response = await axios.get("/api/users/donarForm");
      setDonarList(response.data);
      console.log(response.data, "get apiii");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getRequestedPeople();
  }, []);

  return (
    <div className="bg-red-100">
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

      <form
        onSubmit={onRequestingSubmit}
        className="mb-8 space-y-4 mt-20 pt-8 pl-72 bg-red-100"
      >
        <h2 className="text-xl font-bold mb-4">Donar Application Form</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="name" className="mb-1">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
              value={donar.name}
              onChange={(e) => setDonar({ ...donar, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="phoneNumber" className="mb-1">
              Phone Number:
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              required
              className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={donar.phoneNumber}
              onChange={(e) =>
                setDonar({ ...donar, phoneNumber: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="email" className="mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
              value={donar.email}
              onChange={(e) => setDonar({ ...donar, email: e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="dateOfBirth" className="mb-1">
              Date of Birth:
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
              value={donar.dateOfBirth}
              onChange={(e) =>
                setDonar({ ...donar, dateOfBirth: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="weight" className="mb-1">
              Weight (kg):
            </label>
            <input
              type="number"
              name="weight"
              id="weight"
              className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
              value={donar.weight}
              onChange={(e) => setDonar({ ...donar, weight: e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="bloodGroup" className="mb-1">
              Blood Group:
            </label>
            <input
              type="text"
              name="bloodGroup"
              id="bloodGroup"
              className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
              value={donar.bloodGroup}
              onChange={(e) =>
                setDonar({ ...donar, bloodGroup: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="address" className="mb-1">
              Address:
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
              value={donar.address}
              onChange={(e) => setDonar({ ...donar, address: e.target.value })}
            />
          </div>
        </div>

        <div className="flex items-center mt-4">
          <button
            // onClick={onRequestingSubmit}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="bg-red-200 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="mt-4 pt-4 flex items-center">
          <div className="sm:flex-auto">
            <h1 className="px-8 text-base font-semibold leading-6 text-gray-900">
              Donars List
            </h1>
            <p className="px-8 mt-2 text-sm text-gray-700">
              A list of all the people ready to donate blood.
            </p>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="overflow-x-auto">
            <div className=" inline-block min-w-full  align-middle sm:px-6 lg:px-8">
              <table className="bg-red-300 min-w-full divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      DOB
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Blood Group
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Weight
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {donarList.map((list: any) => (
                    <tr key={list.email} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        {list.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {list.phoneNumber}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {list.dateOfBirth}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {list.bloodGroup}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {list.address}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {list.weight}
                      </td>
                      {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
