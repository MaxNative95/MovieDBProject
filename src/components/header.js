import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let { width, height } = Dimensions.get('window');

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ height: 50, backgroundColor: '#2C679D', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Icon onPress={() => alert('Ver Despues ')} name="bars" size={25} color="#FFF" />
                <View style={styles.search}>
                    <Icon name="search" size={20} color={'gray'} />
                    <TextInput
                        placeholderTextColor="#000"
                        onChangeText={this.props.onChangeText}
                        value={this.props.value}
                        placeholder="Buscar"
                        style={{}}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        padding: 20
    },
    search: {
        height: width * 0.1,
        width: width * 0.8,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#FFF',
        borderRadius: 5
    },
    searchText: {

    }
})