import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Button, Image, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';
import MovieCard from '../components/movieCard';
import styles from '../styles/homeStyles';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/header';
import { connect } from 'react-redux';
import { addToFav } from '../redux/actions/favoritesActions';
import { addToLater } from '../redux/actions/seeLaterActions';

let { width, height } = Dimensions.get('window');

const key = '21a571ed98cce09cbac3bdfb8c776bc5'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            isVisible: false,
            img: '',
            title: '',
            search: ''
        };
    }

    componentDidMount = () => {
        this.setState({ loading: true })
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US`)
            .then(res => {
                this.setState({ loading: false, data: res.data.results })
                console.log(res)
            })
            .catch(err => {
                this.setState({ loading: false })
                alert('Hubo un error trayendo la información')
                console.log(err)
            });
    };

    addToSee = () => {
        const { title, img } = this.state;
        this.setState({ isVisible: false });
        this.props.addToLater(title, img);
    }

    showModal = () => {
        return (
            <Modal
                animationInTiming={700}
                isVisible={this.state.isVisible}>
                <View style={{ flex: 1 }}>
                    <Image source={{ uri: this.state.img }} style={{ width: '100%', height: '100%' }} />

                    <View style={{ position: 'absolute', width: '100%', alignItems: 'flex-end' }}>
                        <Icon onPress={() => this.setState({ isVisible: false })} name="remove" size={30} color="#FFF" style={{ right: 10, top: 10 }} />
                    </View>

                    <View style={{ position: 'absolute', width: '100%', alignItems: 'center', bottom: 20 }}>
                        <TouchableOpacity
                            onPress={() => this.addToSee()}
                            style={{ height: 50, width: 200, borderRadius: 25, backgroundColor: '#282A35', borderColor: '#FFF', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ color: '#FFF', fontSize: 19, fontWeight: 'bold' }}>
                                Ver Después
                    </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        )
    }

    seeLater = () => {
        this.setState({ isVisible: false });
    }

    addedToFavorites = (item) => {
        this.props.addToFav(item, item.added = true)
        alert(`${item.title} Añadido a Favoritos`)
    }

    mapItems = () => {
        return this.state.data.map((item, i) => {
            return (
                <MovieCard
                    key={i}
                    onFavoritePress={() => this.addedToFavorites(item)}
                    isFavorite={item.added ? '#C12A1F' : '#2C679D'}
                    onImageClick={() => this.setState({ isVisible: true, img: `http://image.tmdb.org/t/p/w185/${item.poster_path}` })}
                    img={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                    title={item.title}
                    rating={item.vote_average}
                />
            )
        })
    }

    searchInArray = (text) => {
        console.log(text)
        this.setState({ search: text });
        for (let index = 0; index < this.state.data.length; index++) {
            if (this.state.data[index].title == text) {
                alert(`SELECCIONADO ${this.state.cards[index].title}`);
            }
        }
    }

    render() {
        let fileterItems = this.state.data.filter((item) => {
            return item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })
        const { loading } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#000' }}>
                <Header value={this.state.search} onChangeText={this.searchInArray.bind(this)} />
                <ScrollView style={styles.container}>

                    {this.showModal()}
                    {loading ? <ActivityIndicator size="large" color="#3171AE" /> : null}
                    <View style={styles.moviesContainer}>
                        {/* {this.mapItems()} */}
                        {
                            fileterItems.map((item, i) => (
                                <MovieCard
                                    key={i}
                                    onFavoritePress={() => this.addedToFavorites(item)}
                                    isFavorite={item.added ? '#C12A1F' : '#FFF'}
                                    onImageClick={() => this.setState({ isVisible: true, img: `http://image.tmdb.org/t/p/w185/${item.poster_path}`, title: item.title })}
                                    img={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                                    title={item.title}
                                    rating={item.vote_average}
                                />
                            ))
                        }
                    </View>
                </ScrollView>
            </View>

        );
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favoritesReducer
    }
}

export default connect(mapStateToProps, { addToFav, addToLater })(Home);