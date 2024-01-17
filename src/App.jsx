import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";

function App() {
    return (
    <Switch>
        <Route path='/quotes'><AllQuotes/></Route>

        <Route path='/quotes/:quoteId' element={<QuoteDetails/>}></Route>
        <Route path='/new-quote'><NewQuote/></Route>
    </Switch>)
}

export default App;