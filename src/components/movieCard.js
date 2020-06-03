import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/homeStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.card}>
                <TouchableOpacity onPress={this.props.onImageClick}>
                    <Image style={{ width: 150, height: 200 }} source={{ uri: this.props.img }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onFavoritePress} style={{ position: 'absolute', top: 25, right: 35 }}>
                    <Icon name="heart" size={35} color={this.props.isFavorite} />
                </TouchableOpacity>
                <Text style={styles.text}>{this.props.title}</Text>
                <Text style={styles.text}>{`Calificación ${this.props.rating}`}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favoritesReducer
    }
}

export default connect(mapStateToProps, null)(MovieCard);
