import React, { Component} from "react";
import {
    View, 
    Text,
    StyleSheet
} from "react-native";

class HomeScreen extends Component{
    render(){
        return (
            <View styles={styles.homeScreenView}>
                <Button>
                    block={true}
                    <Text style={{ color: 'white' }}>Search Beers</Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    HomeScreenView: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})

export default HomeScreen