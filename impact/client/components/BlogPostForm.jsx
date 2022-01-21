BlogPostForm = React.createClass({
  handleSubmit() {

  },
  render() {
    return (
      <form className="blog-form-post" onSubmit={this.handleSubmit}>
        <textarea placeholder="Write your post here..." ref="postContent"></textarea>
      </form>
    );
  }
})
