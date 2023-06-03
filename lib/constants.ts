export type Route = {
  path: string
  name: string
  transitionDelay: number
}

export const routes: Route[] = [
  { path: '/', name: 'Home', transitionDelay: 150 },
  { path: '/blog', name: 'Blog', transitionDelay: 300 },
  { path: '/about', name: 'About', transitionDelay: 350 },
];
