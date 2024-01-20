import { Fragment, useEffect } from "react";

import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

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
    const {sendRequest, status, data: loadedQuotes, error} = useHttp(getAllQuotes);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner/>
            </div>
        )
    }

    if (error) {
        return <p className="centered focused">{eror}</p>
    }

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound/>
    }

    console.log(loadedQuotes);

    return status === 'completed' && loadedQuotes.length !== 0 && <QuoteList quotes={loadedQuotes}/>;
};

export default AllQuotes;