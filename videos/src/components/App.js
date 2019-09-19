import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {
    state =  { videos : [] }

    onTermSubmit = async term => {
        const hasil = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: hasil.data.items })
    };

    render() {
        return (
            <div className="ui conteiner">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I Have {this.state.videos.length} Videos.
            </div>
        );
    }
}
 export default App;

 //mantap oke men
 //coba dong