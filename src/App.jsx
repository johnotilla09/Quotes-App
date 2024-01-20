import {
    Route,
    Switch,
    Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/quotes" />
                </Route>
                <Route path="/quotes" exact>
                    <AllQuotes />
                </Route>
                <Route path="/quotes/:quoteId">
                    <QuoteDetails />
                </Route>
                <Route path="/new-quote">
                    <NewQuote />
                </Route>
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>

            <footer className="footer">
                <p>Alright Reserved 2024</p>
            </footer>
        </Layout>
    );
}

export default App;