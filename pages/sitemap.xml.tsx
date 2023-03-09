import { GetServerSideProps } from "next"

const Sitemap = () => null

const EXTERNAL_DATA_URL = "https://nextjs-flame-seven-67.vercel.app/"

const GenerateSiteMap = (posts) => {
  return `<xml version="1.0" encoding="UTF-8">
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>https://nextjs-flame-seven-67.vercel.app/</loc>
    <lastmod>2023-03-07T22:00:00.000Z</lastmod>
    </url>${
      posts.map((post) => {
        return `
        <url>
        <loc>${EXTERNAL_DATA_URL}/posts/${post.id}</loc>
        <lastmod>${post.date}</lastmod>
        </url>
        `
      }).join('')}
    </urlset>
  </xml>`
}
  

export const getServerSideProps: GetServerSideProps = async ({ res })=> {
  const data = await fetch(EXTERNAL_DATA_URL)
  const posts = await data.json()
  
  const sitemap = GenerateSiteMap(posts)
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}