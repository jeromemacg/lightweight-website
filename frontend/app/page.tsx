export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex place-items-center">
        <h1 className="text-4xl font-bold mb-8">The random musings of J</h1>
      </div>
      <div className="relative flex place-items-center">
      <p className="mb-8">
        J's thoughts and musings on technology - A not very curated list of comments and ideas on all thing tech related
      </p>
      </div>
      <div className="relative flex place-items-center">
      <a className="px-4 py-2 rounded border hover:text-blue-100" href="/thoughts">
        Take a peek
      </a>
      </div>
      <div className="relative flex place-items-center mt-4">
      <p className="mb-8">
        This is a website built with Next.js and Wagtail (Python/Django)
      </p>
      </div>
    </main>
  );
}