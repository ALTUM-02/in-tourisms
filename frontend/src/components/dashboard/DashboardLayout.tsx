import Navbar from "./Navbar";

import Sidebar from "./Sidebar";

export default function DashboardLayout({

children,

}:{

children:React.ReactNode

}){

return(

<div className="min-h-screen bg-slate-950 text-white">

<Navbar/>

<div className="flex">

<Sidebar/>

<main

className="flex-1 p-8 overflow-y-auto"

>

{children}

</main>

</div>

</div>

);

}