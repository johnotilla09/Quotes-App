import { Fragment } from "react";
import {
    useParams,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom/cjs/react-router-dom.min";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {
        id: 1,
        author: "Dolly Parton",
        text: "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    },
    {
        id: 2,
        author: "Joe E. Lewis",
        text: "You only live once, but if you work it right, once is enough.",
    },
];

const QuoteDetails = () => {
    const match = useRouteMatch();
    const params = useParams();

    console.log(match);

    const quote = DUMMY_QUOTES.find(
        (quote) => quote.id === Number(params.quoteId)
    );

    if (!quote) {
        return <p className="centered">No quote found!</p>;
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link
                        to={`${match.url}/comments`}
                        className="btn--flat"
                    >
                        Load Comments
                    </Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetails;