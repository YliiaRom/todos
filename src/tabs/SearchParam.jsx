import { useSearchParams } from 'react-router-dom';

export default function SearchParam() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const query = searchParams.get('query') ?? '';

  const hendleChenge = e => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (e.target.value.trim() !== '') {
      newSearchParams.set('query', e.target.value);
    } else {
      newSearchParams.delete('query');
    }
    setSearchParams(newSearchParams);
  };
  return (
    <>
      <h2>const [searchParams, setSearchParams] = useSearchParams()</h2>
      <input
        onChange={hendleChenge}
        value={query}
        type="text"
        name="text"
        placeholder="write..."
        autoFocus
      />
      <p>value useParams() - </p>
      {/* <p>useLocation() -{JSON.stringify({ location })}</p> */}
    </>
  );
}

// import { useLocation, useParams, useSearchParams } from 'react-router-dom';

// export default function SearchParam() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('query') ?? '';

//   const chengeSearchParams = event => {
//     if (event.target.value !== '') {
//       const newSearchPrams = new URLSearchParams(searchParams);
//       newSearchPrams.set('query', event.target.value);
//       setSearchParams(newSearchPrams);
//     } else {
//       setSearchParams.delete('query');
//     }
//   };
//   // const { x } = useParams();
//   // const valueParam = x;
//   const location = useLocation();

//   return (
//     <>
//       <h2>const [searchParams, setSearchParams] = useSearchParams()</h2>
//       <input type="text" value={query} onChange={chengeSearchParams} />
//       <p>value useParams() - </p>
//       <p>useLocation() -{JSON.stringify({ location })}</p>
//     </>
//   );
