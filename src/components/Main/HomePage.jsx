import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const HomePage = () => {
  const [wordValue, setWordValue] = useState("");
  const [meaning, setMeaning] = useState(null);

  //   const word = "food";

  const fetchWordResult = async () => {
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordValue}`)
      .then((result) => {
        const actualResult = result.data;

        setMeaning(actualResult);
        console.log(actualResult);
      })
      .catch((err) => {
        console.log(err);
      });

    // setMeaning(data)
    // console.log(data);
  };

  useEffect(() => {
    // fetchWordResult()
  }, []);

  console.log(wordValue);

  return (
    <main>
      <div className="form-control">
        <div className="input-group">
          <input
            value={wordValue}
            onChange={(e) => setWordValue(e.target.value)}
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button className="btn btn-square" onClick={fetchWordResult}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* results */}

      <p>Word meaning</p>

      {meaning &&
        meaning.map((meaning, index) => (
          <div key={index}>
            <div>
              <p>
                The word searched for is <strong>{meaning.word}</strong>
              </p>
            </div>

            <div>
              Check out the phonetic <strong>{meaning.phonetic}</strong>
            </div>

            {meaning.phonetics.map((sound, index) => (
              <div key={index}>
                <audio src={sound.audio} controls />

                {/* <h1>{sound.audio}</h1> */}
              </div>
            ))}


            <div>
                {
                    meaning.meanings.map((meaning,index) => (
                        <div key={index}>
                            <div>Parts of speech
                                <ul>
                                    <li>{meaning.partOfSpeech}</li>
                                </ul>

                                <div>The meanings
                                    <ul>
                                        {
                                            meaning.definitions.map((define,index) => (
                                                <div key={index}>
                                                    <li>{define.definition}</li>

                                                </div>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
          </div>
        ))}

      
    </main>
  );
};

export default HomePage;
