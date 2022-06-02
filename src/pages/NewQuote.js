import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
// import { useHistory } from "react-router-dom"; v5
import { useNavigate } from "react-router-dom"; // v6
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  // const history = useHistory();
  const navigate = useNavigate();
  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
