import React, {useState,useEffect} from 'react';


const FetchQuote = () => {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");


  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(response => response.json())
      .then(
        (q) => {
          setQuote(q.content);
          setAuthor(q.author);
        }
      )
  },[]);

  let newQuote = () => {
    fetch("https://zenquotes.io/api/today")
      .then(response => response.json())
      .then(
        (q) => {
          setQuote(q.content);
          setAuthor(q.author);
        }
      )
  }
  return (
    <div className='ui card quote-card'>
         <div className="content">
            <h2 className='center aligned header'>{quote}</h2>
            <div className='center aligned description'>-<span className='author'>{author}</span>-</div>
         </div>

    </div>
  );
}


export default FetchQuote;
