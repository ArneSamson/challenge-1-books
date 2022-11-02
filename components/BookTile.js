import {StyleSheet, Text, View, border} from 'react-native';

const BookTile = (props) => {
    return (
        <View style={styles.tile}>
            <Text>hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tile: {
        width: '100%',
        height: 220,
        backgroundColor: '#',
        marginVertical: 10,
        borderBottomWidth: 1,
        marginHorizontal: 3,
        borderColor: '#660066',
        border
    }

}) 

export default BookTile;