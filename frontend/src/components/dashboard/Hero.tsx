import type { UserProfile } from "../../types/dashboard";

interface Props {
    user: UserProfile;
}

function Hero({ user }: Props) {

    return (

        <div
            className="
            bg-gradient
            from-emerald-700
            to-teal-600
            rounded-3xl
            text-white
            p-10
            shadow-xl
            "
        >

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-4xl font-bold">

                        Welcome back,

                        <br />

                        {user.full_name || user.username}

                    </h1>

                    <p className="mt-4 text-lg opacity-90">

                        Discover Tanzania's amazing wildlife,
                        destinations,
                        hotels and culture.

                    </p>

                </div>

                <img
                    src={
                        user.profile_photo ??
                        "https://ui-avatars.com/api/?name=" +
                        user.username
                    }
                    alt="profile"
                    className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />

            </div>

        </div>

    );

}

export default Hero;