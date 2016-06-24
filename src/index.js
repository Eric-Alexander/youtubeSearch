import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import uSearch from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import SearchBar from './components/SearchBar';

const API_KEY ='AIzaSyBQqcZdMa4OpU810BXrnNVPtKC58c4CPBI';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      videos: [],
      selectedVideo: null };
      this.videoSearch('cult of luna')

  }
  videoSearch(term) {
    uSearch({ key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 333);
    return (
      <div>
        <h1>My Custom YouTube Video Search</h1>
        <SearchBar
            onSearchTermChange ={videoSearch}
            />
        <VideoDetail
          video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos = {this.state.videos} />
      </div>
    );
}}

ReactDOM.render(<App />, document.querySelector('.root') )
