import { Fragment } from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {
        id: 1,
        author: 'Dolly Parton',
        text: 'The way I see it, if you want the rainbow, you gotta put up with the rain.'
    },
    {
        id: 2,
        author: 'Joe E. Lewis',
        text: 'You only live once, but if you work it right, once is enough.'
    },
]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    );
};

export default AllQuotes;