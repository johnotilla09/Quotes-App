import { Fragment } from "react";

import { useParams, Route } from "react-router-dom/cjs/react-router-dom.min";
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
    const params = useParams();

    const quote = DUMMY_QUOTES.find(
        (quote) => quote.id === Number(params.quoteId)
    );

    if (!quote) {
        return (
            <p>No quote found!</p>
        );
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetails;