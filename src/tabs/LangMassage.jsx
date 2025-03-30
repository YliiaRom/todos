import { useLang } from '../hooks/useLang';
const text = {
  uk: 'Вибрана мова',
  en: 'Selected language',
  pl: 'Wybrany język',
  es: 'Idioma seleccionado',
  de: 'Ausgewählte Sprache',
};
const LangMassage = () => {
  // const langCtx = useLang();
  return (
    <>
      <h2>LangMassage </h2>
      <p>text.en:{text.en}</p>
    </>
  );
};
export default LangMassage;
