"use client";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Fuse from 'fuse.js';

import axios from "axios";
import toast from "react-hot-toast";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Donars() {
  const [donar, setDonar] = React.useState({
    name: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    weight: "",
    bloodGroup: "",
    address: "",
  });

  const navigation = [
    { name: "Request Form", href: "/requestForm" },
    { name: "Donors", href: "/donars" },
    { name: "Blood Banks & Hospitals", href: "/hospitals" },
    { name: "Contact", href: "/contact" },
  ];
  
  const [donarList, setDonarList] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredDonarList, setFilteredDonarList] = React.useState([]);
  const [selectedBloodGroup, setSelectedBloodGroup] = React.useState('');

  const fuseOptions = {
    keys: ['name', 'bloodGroup'],
    threshold: 0.3, // Adjust to your preference for how fuzzy the match can be
  };
  
  const fuse = new Fuse(donarList, fuseOptions);

  const onRequestingSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/users/donarForm", donar);
      location.reload();
    } catch (error: any) {
      console.log(error.message, "error during submitting");
      toast.error(error.message);
    }
  };

  const getRequestedPeople = async () => {
    try {
      const response = await axios.get("/api/users/donarForm");
      setDonarList(response.data);
      setFilteredDonarList(response.data); // Initialize filtered list
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    applyFilters(query, selectedBloodGroup);
  };

  const handleBloodGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const group = e.target.value;
    setSelectedBloodGroup(group);
    applyFilters(searchQuery, group);
  };

  const applyFilters = (search: string, bloodGroup: string) => {
    let result = donarList;

    if (search) {
      result = fuse.search(search).map(result => result.item);
    }

    // if (bloodGroup) {
    //   result = result.filter(donar => donar.bloodGroup === bloodGroup);
    // }

    setFilteredDonarList(result);
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
      <h2 className="text-xl font-bold mb-4">Donor Application Form</h2>
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
  <select
    name="bloodGroup"
    id="bloodGroup"
    className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
    required
    value={donar.bloodGroup}
    onChange={(e) =>
      setDonar({ ...donar, bloodGroup: e.target.value })
    }
  >
    <option value="">Select Blood Group</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
  </select>
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
          className="rounded-md bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Submit
        </button>
      </div>
    </form>

      <div className="bg-red-200 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="mt-4 pt-4 flex items-center justify-between">
          <div className="sm:flex-auto">
            <h1 className="px-8 text-xl font-semibold leading-7 text-gray-900">
              Donor List
            </h1>
            <p className="px-8 mt-2 text-sm text-gray-600">
              A list of all the donors willing to donate blood.
            </p>
          </div>
          <div className="ml-8">
            <label htmlFor="search" className="mr-3 text-sm font-medium text-gray-700">
              Search by Name:
            </label>
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Search by name..."
            />
          </div>
          <div className="ml-8">
            <label htmlFor="bloodGroupFilter" className="mr-3 text-sm font-medium text-gray-700">
              Filter by Blood Group:
            </label>
            <select
              id="bloodGroupFilter"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedBloodGroup}
              onChange={handleBloodGroupChange}
              style={{ minWidth: '150px' }}
            >
              <option value="">All</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flow-root">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
              <table className="bg-red-300 min-w-full divide-gray-300">
                <thead>
                  <tr>
                    {/* Table headings */}
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>DOB</th>
                    <th>Blood Group</th>
                    <th>Address</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {filteredDonarList.map((list: any) => (
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
