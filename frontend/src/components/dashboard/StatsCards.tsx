import type { DashboardStats } from "../../types/dashboard";

interface Props {

    stats: DashboardStats;

}

function StatsCards({ stats }: Props) {

    const cards = [

        {
            title: "Destinations",
            value: stats.destinations,
            color: "bg-blue-600",
            icon: "🌍",
        },

        {
            title: "Wildlife",
            value: stats.wildlife,
            color: "bg-orange-500",
            icon: "🦁",
        },

        {
            title: "Hotels",
            value: stats.hotels,
            color: "bg-purple-600",
            icon: "🏨",
        },

        {
            title: "Foods",
            value: stats.foods,
            color: "bg-red-500",
            icon: "🍽",
        },

    ];

    return (

        <div className="grid md:grid-cols-4 gap-6 mt-8">

            {cards.map((card) => (

                <div
                    key={card.title}
                    className={`${card.color}
                    rounded-2xl
                    p-6
                    text-white
                    shadow-lg
                    hover:scale-105
                    transition`}
                >

                    <div className="text-4xl">

                        {card.icon}

                    </div>

                    <h2 className="mt-3">

                        {card.title}

                    </h2>

                    <h1 className="text-4xl font-bold">

                        {card.value}

                    </h1>

                </div>

            ))}

        </div>

    );

}

export default StatsCards;