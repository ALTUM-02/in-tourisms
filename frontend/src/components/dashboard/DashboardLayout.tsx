import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface Props{

children:React.ReactNode;

}

export default function DashboardLayout({

children,

}:Props){

return(

<div className="bg-slate-950 min-h-screen">

<Navbar/>

<div className="flex">

<Sidebar/>

<main

className="flex-1 p-8 ml-72"

>

{children}

</main>

</div>

</div>

);

}