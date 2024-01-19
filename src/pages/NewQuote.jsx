import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
    const history = useHistory();

    const addQuoteHandler = (data) => {
        console.log(data);

        history.push('/quotes');
    }

    return (
        <QuoteForm onAddQuote={addQuoteHandler}/>
    );
}

export default NewQuote;