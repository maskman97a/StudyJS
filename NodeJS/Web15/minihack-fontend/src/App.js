import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import axios from 'axios';

// import logo from './logo.svg';
// import Message from "./Components/Message";
import NewGame from './Components/NewGame';
import Header from './Components/Header';
import PlayGame from './Components/PlayGame';
import Loading from './Components/Loading';
import { ROOT_API } from './static/index';
import './App.css';

class App extends Component {
  // bên ngoài thì ko cần this
  state = {
    showImg: true,
    message: "Hú, ảnh nè!",
    count: "Đếm nè!",
    num: 0,
    game: null,
    loading: true
  }
  // Initialization: Setup props and state

  // Mounting: willMount => render => didMount => render

  // Updation
  // props: componentWillReceiveProps => shouldComponentUpdate 
  // => componentWillUpdate => render => componentDidUpdate
  // states: showComponentUpdate => componentWillUpdate => render 
  // => componentDidUpdate

  // Unmounting: componentWillUnmount

  componentWillMount() {

  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ count: 1 })
    // }, 1000);
    // setTimeout(() => {
    //   this.setState({ count: 2 })
    // }, 2000);
    // setTimeout(() => {
    //   this.setState({ count: 3 })
    // }, 3000);
    // setTimeout(() => {
    //   this.setState({ showImg: false, message: " Ú òa, ẩn rồi nhaa", count: "" });
    // }, 4000);

    if (window.location.pathname) {
      const pathParams = window.location.pathname.slice(1).split('/');
      console.log(pathParams);
      if (pathParams[1] && pathParams[0] === "game") {
        const questionId = pathParams[1];
        axios({
          url: `${ROOT_API}/api/game/${questionId}`,
          method: "GET"
        }).then(response => {
          console.log(response.data);
          if (response.data.success) {
            setTimeout(() => {
              this.setState({ game: response.data.game, loading: false })
            }, 2000)
          }
        }).catch(err => {
          this.setState({ loading: false });
          console.log(err)
        })
      }
      else {
        setTimeout(() => {
          this.setState({ loading: false, game: null })
        }, 2000)
      }
    }
  }

  componentWillUpdate(nextStates, nextProps) {

  }

  toggleLoading = (loading) => { this.setState({ loading }) }
  constructor(props) {
    super(props); //show dữ liệu lên con và cha 
  }
  render() {
    const { game, loading } = this.state;
    console.log(window.location.pathname.split('/'))
    return (
      <Container className="App container">
        <Header />
        {loading ? <div className="text-center">
          < Loading />
        </div> : (game ?
          <PlayGame game={game} /> :
          <NewGame toggleLoading={this.toggleLoading} />
          )}
        {/* <header className="App-header">
          <div>
            <Message message={this.state.message} count={this.state.count} />
            {this.state.showImg ? <img src={logo} className="App-logo" alt="logo" /> : this.message}
          </div>
          <div>
            <p>Click:{this.state.num}</p>
            <Button handleClick={() => { this.setState({ num: this.state.num + 1 }) }} />
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </Container>
    );
  }
}

export default App;
