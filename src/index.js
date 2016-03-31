import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDU4ZU_roRiq0BFXPfmriAzpRNJgcH9Thc';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = { videos: [], selectedVideo: null };

    this.videoSearch('Hearthstone')
  }

  handleVideoRequest = (selectedVideo) => {
    this.setState({ selectedVideo });
  }

  videoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  render(){
    const videoSearch = _.debounce(this.videoSearch, 300);

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={this.handleVideoRequest}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
