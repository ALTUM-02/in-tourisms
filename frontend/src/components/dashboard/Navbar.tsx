import { Bell, Search } from "lucide-react";

export default function Navbar() {

return(

<header

className="fixed top-0 left-0 right-0

h-20

bg-slate-900

border-b

border-slate-800

flex

items-center

justify-between

px-8

z-50"

>

<h1

className="text-white

text-2xl

font-bold"

>

🇹🇿 Tanzania Tourism

</h1>

<div

className="flex

items-center

gap-5"

>

<div

className="relative"

>

<Search

size={18}

className="absolute

left-3

top-3

text-gray-400"

/>

<input

placeholder="Search..."

className="

bg-slate-800

rounded-full

pl-10

pr-4

py-2

text-white

outline-none"

/>

</div>

<Bell

className="text-white cursor-pointer"/>

</div>

</header>

);

}