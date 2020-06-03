import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import MovieCard from '../components/movieCard';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  getFavorites = () => {
    return this.props.favorites.favorites.map((item, i) => {
      return (
        <MovieCard
          key={i}
          isFavorite={item.added ? 'red' : 'black'}
          img={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
          title={item.title}
          rating={item.vote_average}
        />
      )
    })
  }

  render() {
    const { loading } = this.state;
    console.log(this.props.favorites)
    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <ScrollView style={{ flex: 1 }}>
          {
            this.props.favorites.favorites.length === 0 ?
            <Text style={{ color:'white', fontSize:19, fontWeight:'bold', marginTop:100, left:100}}>No Hay Favoritos Aún!</Text>
            :
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {this.getFavorites()}
            </View>
          }
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    favorites: state.favoritesReducer
  }
}

export default connect(mapDispatchToProps, null)(Favorites);