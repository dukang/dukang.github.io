import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
// import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <div className="container mx-auto mt-8 grid grid-cols-1 gap-4 md:grid-cols-8">
            <div className="col-span-1 md:col-span-2 bg-white p-4 shadow">
              <img src="static/images/profile.jpg" alt="Profile" className="w-full rounded" />
              <h1 className="text-2xl font-bold mt-4">杜康(Kang Du)</h1>
              <p className="text-gray-600">Entrepreneur</p>
              <p className="text-gray-600"><b>kdu800(at)connect.hkust-gz.edu.cn</b></p>
              <p className="text-gray-600 mt-4"><a href="static/doc/CV-WX-Kank-Du.pdf" className="text-gray-600">Curriculum Vitae [Oct 2024]</a></p>
              <div className="flex space-x-2 mt-4">
                <a href="#" className="text-gray-600">LinkedIn</a>
                <a href="https://space.bilibili.com/588878976" className="text-gray-600">Blibli</a>
                <a href="https://github.com/dukang" className="text-gray-600">GitHub</a>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-6 bg-white p-4">
              <h1 className="text-xl font-extrabold leading-7 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-8 md:text-2xl md:leading-10">
                A Short Bio
              </h1>
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                {siteMetadata.description}
              </p>
              <br />
              <h2 className="text-xl font-bold">Experiences</h2>
              <ul className="list-disc list-inside mt-4">
                <li><strong>[Aug 2024]</strong> Begin PhD studies at HKUST-GZ ! <img src="static/images/school.png" alt="" className="w-5 h-5 inline" /></li>
                <li><strong>[Aug 2023]</strong> Start MBA program at HKU ! <img src="static/images/school.png" alt="" className="w-5 h-5 inline" /></li>
                <li><strong>[Oct 2022]</strong> Project Manager at Tencent <img src="static/images/tencent.png" alt="" className="w-5 h-5 inline" /> </li>
                <li><strong>[May 2021]</strong> Programmer Specialist at MeiTuan <img src="static/images/meituan.png" alt="" className="w-5 h-5 inline" /></li>
                <li><strong>[May 2020]</strong> Programmer at Bytedance <img src="static/images/bytedance.png" alt="" className="w-5 h-5 inline" /> </li>
                <li><strong>[May 2015]</strong> Founded a startup company</li>
                <li><strong>[May 2015]</strong> Graduated from Texas A&M <img src="static/images/school.png" alt="" className="w-5 h-5 inline" /> </li>
              </ul>
            </div>
          </div>
         
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl className="m-4">
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                      <img src="static/images/head_image.png" alt="" className="w-45 h-45 inline" />
                    </dl>
                    <div className="space-y-5 xl:col-span-3 m-4">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
