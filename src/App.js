import Quote from "./quote/Quote";
import { useEffect, useState } from "react";
import QuoteAuthor from "./quote/QuoteAuthor";
import { TbArrowsRandom } from "react-icons/tb";
import './App.css';
function App() {
  const [quotes, setQuotes] = useState([]);
  const [author, setAuthor] = useState("Hugo Black");
  const [content, setContent] = useState(
    `People ask me what I do in winter when there's no baseball. I'll tell you what I do. I stare out the window and wait for spring.`
  );
  const [tag, setTag] = useState("sportscompetition");
  const [chosenAuthor, setChosenAuthor] = useState(false);

  const BASE_URL = "https://api.quotable.io/quotes";

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.results);
      });
  }, []);

  const getRandom = () => {
    setChosenAuthor(false);
    let x = Math.floor(Math.random() * 22);
    setAuthor(quotes[x].author);
    setContent(quotes[x].content);
    setTag(quotes[x].tags);
    console.log(x)
  };

  const handleAuthor = () => {
    setChosenAuthor(true);
  };
  const quoteList = quotes.map((item) => {
    if(item.author===author){
		return <QuoteAuthor
     content={item.content}
          author={item.author}
          handleRandom={getRandom}
          handleAuthor={handleAuthor}
    ></QuoteAuthor>
    }
	})
  return (
    <div>

      {chosenAuthor ? (

        <div className="container">
        <div className="random2" onClick={getRandom}>
       <div className="randomText">Random</div>
        <TbArrowsRandom></TbArrowsRandom>
      </div>
      <div className="authorName2">{author}</div>
        {quoteList}
        </div>

      ) : (
        <Quote
          content={content}
          author={author}
          tags={tag}
          handleRandom={getRandom}
          handleAuthor={handleAuthor}
        ></Quote>
      )}
    </div>
  );
}

export default App;
