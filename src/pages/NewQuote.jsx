import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
    const {sendRequest, status} = useHttp(addQuote);

    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history]);

    const addQuoteHandler = (data) => {
        const res = sendRequest(data);

        console.log(res);
    }

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
    );
}

export default NewQuote;