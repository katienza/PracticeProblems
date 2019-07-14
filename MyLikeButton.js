class Like extends React.Component {
  constructor() {
    super()
    this.state = {
      update: false,
      likes: 72
    }
    this.toggle = this.toggle.bind(this)
  }
  
  toggle() {
    if (!this.state.update) {
      this.setState(() => ({
        likes: this.state.likes + 1,
        update: true
      }))
    } else {
      this.setState(() => ({
        likes: this.state.likes - 1,
        update: false
      }))
    }
  }
  
  render() {
    return (
    <div>
      <button className={this.state.update ? 'like-btn' : 'dislike-btn'} onClick={this.toggle}>
        LIKES: {this.state.likes}        
      </button>
    </div>
    );
  }
}

ReactDOM.render(
  <Like />,
  document.getElementById('container')
);

// html
<div id="container">
    <!-- This element's contents will be replaced with your component. -->
</div>


// css
.btn {
  background-color: red;
  color: white;
}

.liked {
  background-color: white;
}