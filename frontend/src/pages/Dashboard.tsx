import { useEffect, useState } from "react";

import DashboardLayout from "../components/dashboard/DashboardLayout";

import Hero from "../components/dashboard/Hero";

import StatisticCard from "../components/dashboard/StatisticCard";

import DestinationSlider from "../components/dashboard/DestinationSlider";

import WildlifeSlider from "../components/dashboard/WildlifeSlider";

import HotelSlider from "../components/dashboard/HotelSlider";

import FoodSlider from "../components/dashboard/FoodSlider";

import { getDashboard } from "../services/dashboardService";

function Dashboard(){

const [dashboard,setDashboard]=useState<any>(null);

useEffect(()=>{

getDashboard().then((res)=>{

setDashboard(res.data);

});

},[]);

if(!dashboard){

return <h1>Loading...</h1>

}

return(

<DashboardLayout>

<Hero user={dashboard.user}/>

<div className="grid md:grid-cols-4 gap-5">

<StatisticCard
title="Destinations"
value={dashboard.statistics.destinations}
/>

<StatisticCard
title="Wildlife"
value={dashboard.statistics.animals}
/>

<StatisticCard
title="Hotels"
value={dashboard.statistics.hotels}
/>

<StatisticCard
title="Foods"
value={dashboard.statistics.foods}
/>

</div>

<DestinationSlider
destinations={dashboard.featured_destinations}
/>

<WildlifeSlider
animals={dashboard.featured_animals}
/>

<HotelSlider
hotels={dashboard.featured_hotels}
/>

<FoodSlider
foods={dashboard.featured_foods}
/>

</DashboardLayout>

);

}

export default Dashboard;