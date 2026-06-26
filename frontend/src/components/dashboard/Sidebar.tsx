import {

LayoutDashboard,

Map,

Trees,

Hotel,

Utensils,

Heart,

Bot,

MessageCircle,

LogOut

} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar(){

return(

<div

className="

fixed

top-20

left-0

w-72

h-full

bg-slate-900

border-r

border-slate-800

p-6"

>

<div

className="space-y-2"

>

<NavLink

to="/dashboard"

className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"

>

<LayoutDashboard/>

Dashboard

</NavLink>

<NavLink

to="/destinations"

className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"

>

<Map/>

Destinations

</NavLink>

<NavLink

to="/wildlife"

className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"

>

<Trees/>

Wildlife

</NavLink>

<NavLink

to="/hotels"

className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"

>

<Hotel/>

Hotels

</NavLink>

<NavLink

to="/foods"

className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"

>

<Utensils/>

Foods

</NavLink>

<NavLink

to="/favorites"

className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"

>

<Heart/>

Favorites

</NavLink>

<NavLink

to="/assistant"

className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"

>

<Bot/>

AI Assistant

</NavLink>

<NavLink

to="/chat"

className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"

>

<MessageCircle/>

Live Chat

</NavLink>

<button

className="

mt-10

flex

items-center

gap-3

text-red-500

cursor-pointer"

>

<LogOut/>

Logout

</button>

</div>

</div>

);

}