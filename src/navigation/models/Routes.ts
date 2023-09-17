type ScreensWithoutParams =
  | "home-screen"
  | "More"
  | "Watch"
  | "Dashboard"
  | "Library";

interface ScreensWithParams {
  "movie-details": { movie_id: string };
  "cinema-hall": { movie_id: string };
  "seat-selection": { movie_id: string };
  "watch-trailer": { movie_id: string };
}

export type Routes = keyof ScreensWithParams | ScreensWithoutParams;
export type RouteParam<
  K extends Routes | undefined = undefined
> = K extends keyof ScreensWithParams ? ScreensWithParams[K] : undefined;
export type RouteParams = { [K in Routes]: RouteParam<K> };
export type RoutesRecord = Record<Routes, RouteParams>;
