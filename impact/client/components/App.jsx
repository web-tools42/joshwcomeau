App = React.createClass({
  mixins: [TrackerReact],

  renderPosts() {
    return BlogPosts.find({}).fetch().map( post => <BlogPost key={post._id} post={post} /> );
  },

  render() {
    return (
      <div className="container">
        <header><h1>Impact</h1></header>
        <ul>
          {this.renderPosts()}
        </ul>
        <h4>Add New Post:</h4>
        <BlogPostForm />
      </div>
    );
  }
});
