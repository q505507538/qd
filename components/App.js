var App = React.createClass({
  render: function() {
    return (
      <div>
        <Action />
        <Haoduo />
        <Books />
      </div>

    );
  }
});
React.render(<App />, document.getElementById('app'));
