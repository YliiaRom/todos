import { useSearchParams } from 'react-router-dom';

export default function SearchParam() {
  const [searchParams, setSerchParams] = useSearchParams();
  console.log(searchParams);
  const query = searchParams.get('query') ?? '';

  const changeSerchParams = e => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (e.target.value.trim() !== '') {
      newSearchParams.set('query', e.target.value.trim());
    } else {
      newSearchParams.delete('query');
    }
    setSerchParams(newSearchParams);
  };

  return (
    <>
      <h2>const [searchParams, setSearchParams] = useSearchParams()</h2>
      <input
        type="text"
        name="text"
        onChange={changeSerchParams}
        autoFocus
        required
        placeholder="write ..."
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
