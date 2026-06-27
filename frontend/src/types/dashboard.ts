export interface DashboardStats {

    destinations: number;

    wildlife: number;

    hotels: number;

    foods: number;

}

export interface UserProfile {

    id: number;

    username: string;

    full_name: string;

    email: string;

    country: string;

    role: string;

    profile_photo: string | null;
