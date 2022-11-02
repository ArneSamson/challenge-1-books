import {StyleSheet, Text, View, border} from 'react-native';

const BookTile = (props) => {
    return (
        <View style={styles.tile}>

            <Text style={styles.bookTitle}>Book Title</Text>
            <Text>by author Dingus Dangus</Text>

            <Text>Lorem Ipsum doler sit amet Lorem Ipsum doler sit amet 
            Lorem Ipsum doler sit amet Lorem Ipsum doler sit amet Lorem Ipsum doler sit amet 
            Lorem Ipsum doler sit amet Lorem Ipsum doler sit amet Lorem Ipsum doler sit amet 
            Lorem Ipsum doler sit amet 
            Lorem Ipsum doler sit amet Lorem Ipsum doler sit amet 
            </Text>


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
    },
    bookTitle: {
        fontWeight: 'bold',
        fontSize: 24,
    },

}) 

export default BookTile;