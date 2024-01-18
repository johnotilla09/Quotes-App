import { Fragment } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const QuoteDetails = () => {
    const params = useParams();

    return (
        <Fragment>
            <h1>Quote Details</h1>
            <p>{params.quoteId}</p>
        </Fragment>
    );
};

export default QuoteDetails;
