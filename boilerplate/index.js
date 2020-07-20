function Editor({ text, onTextChange }) {
  return (
    <div className="flex flex-column mv2">
      <label htmlFor="editor" className="mv2">
        Enter your text:
      </label>
      <textarea
        id="editor"
        value={text}
        onChange={onTextChange}
      />
    </div>
  );
}

function Counter({ count }) {
  return (
    <p className="mb2">
      Word count: {count}
    </p>
  );
}

function ProgressBar({ completion }) {
  const percentage = completion * 100;
  return (
    <div className="mv2 flex flex-column">
      <label htmlFor="progress">Progress</label>
      <progress value={completion} id="progress" className="bn">
        {percentage}%
      </progress>
    </div>
  );
}

const countWords = text => text ? text.match(/\w+/g).length : 0;

function WordCounter({ targetWordCount }) {
  const [text, setText] = React.useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const wordCount = countWords(text);
  const progress = wordCount / targetWordCount;

  return (
    <form className="measure pa4 sans-serif">
      <Editor onTextChange={handleTextChange} text={text} />
      <div className="flex flex-column mt3">
        <Counter count={wordCount} />
        <ProgressBar completion={progress} />
      </div>
    </form>
  )
}

const App = () => <WordCounter targetWordCount={10} />

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
