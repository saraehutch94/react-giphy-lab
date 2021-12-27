function GiphyDisplay(props) {
  return (
    <div>
      <h3>{props.giphy.data.title}</h3>
      <img src={props.giphy.data.images.original.url} />
    </div>
  );
}

export default GiphyDisplay;
