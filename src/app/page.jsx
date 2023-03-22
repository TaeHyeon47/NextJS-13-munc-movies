import Results from '@/components/Results';

const API_KEY = process.env.API_KEY;

// We don't use useEffect or any other hooks to get the data because this is going to be client side.

// Server Side fetch data
// async는 React component에서 불가, 오직 NextJS 13에서만 가능.
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';

  console.log(genre);

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
    }?api_key=${API_KEY}&language=ko-KR&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
