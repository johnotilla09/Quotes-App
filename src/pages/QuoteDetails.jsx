import { Fragment, useEffect } from "react";
import {
    useParams,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom/cjs/react-router-dom.min";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

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
    const { quoteId } = params;   

    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    // const quote = DUMMY_QUOTES.find(
    //     (quote) => quote.id === Number(params.quoteId)
    // );

    // if (!quote) {
    //     return <p className="centered focused">No quote found!</p>;
    // }

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner/>
            </div>
        )
    }

    if (error) {
        return <p className="centered focused">{error}</p>
    }

    if (status === 'completed' && loadedQuote.length === 0) {
        return <p className="centered focused">No quote found!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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