export interface PerformanceStats {
  tripsCompleted: number;
  successfulTrips: number;
  overallSatisfaction: number;
  onTimeTrips: number;
  positiveReviews: number;
}

export interface EngagementStats {
  activeUsers: number;
  savedTrips: number;
  engagementRate: number;
}

export interface Destination {
  id: string;
  title: string;
  location: string;
  distance: string;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  isFavorite: boolean;
}

export interface DashboardResponse {
  performance: PerformanceStats;
  engagement: EngagementStats;
  destinations: Destination[];
}
