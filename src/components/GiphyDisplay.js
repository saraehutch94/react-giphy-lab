function GiphyDisplay(props) {
  const loaded = () => {
    return (
      <div>
        <h3>{props.giphy.data.title}</h3>
        <img src={props.giphy.data.images.original.url} />
      </div>
    );
  };

  const loading = () => <h3>Press button above to generate GIPHY</h3>;

  return props.giphy ? loaded() : loading();
}
export default GiphyDisplay;
