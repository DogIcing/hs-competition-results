import { useState } from 'react'
import './App.scss'
import { CompetitionResults, type APIProject } from "hs-competition-results"
import { TagDialog } from './components/TagDialog';
import { Results } from './components/Results';

function App() {
  const resultsInstance = new CompetitionResults('summer_2025');

  type states = 'none' | 'loading' | 'loaded';
  const [state, setState] = useState<states>('none');

  const [results, setResults] = useState<APIProject[]>([]);

  const [tag, setTag] = useState('');

  async function loadData () {
    setState('loading');
    setResults(await resultsInstance.all());
    setState('loaded');
  }

  return (
    tag.length ? (
      state === 'loading' ? <p>Loading Data...</p> : <Results results={results} tag={tag} />
    ) : <TagDialog onSubmit={tag => { setTag(tag); loadData(); }} />
  );
}

export default App
