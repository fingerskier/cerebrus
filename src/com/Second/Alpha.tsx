import {useStateMachine, StateButton} from '@/StateMachine'


export default function Alpha() {
    const {query, setQuery} = useStateMachine()
    

    return <div>
        <h1>Alpha</h1>
        <button onClick={() => setQuery({alpha:+query.alpha+1})}>Count</button>
        <p>Persisted Count: {query?.alpha}</p>
        <StateButton to="beta" data={{flarn:1234}} />
    </div>
}