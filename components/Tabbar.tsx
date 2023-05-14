import React from 'react';
import Link from 'next/link';

const Tabbar = () => {
  return (
    <nav className="flex shadow-sm shadow-gray-200 w-max overflow-hidden rounded-xl text-gray-700 border-2">
      <ul className="flex gap-3 text-center">
        <Link href="">
          <li className="px-3 py-3 border-x-slate-300 hover:bg-slate-200 transition-color">
            General
          </li>
        </Link>
        <Link href="/">
          <li className="px-3 py-3 border-x-slate-300 hover:bg-slate-200 transition-color">
            Users
          </li>
        </Link>
        <Link href="">
          <li className="px-3 py-3 border-x-slate-300 hover:bg-slate-200 transition-color">
            Plan
          </li>
        </Link>
        <Link href="">
          <li className="px-3 py-3 border-x-slate-300 hover:bg-slate-200 transition-color">
            Billing
          </li>
        </Link>
        <Link href="">
          <li className="px-3 py-3 border-x-slate-300 hover:bg-slate-200 transition-color">
            Integrations
          </li>
        </Link>
      </ul>
    </nav>
  );
};
export default Tabbar;
