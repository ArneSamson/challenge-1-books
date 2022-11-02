import {StyleSheet, Text, View, border, ScrollView, Button, Pressable} from 'react-native';

const BookTile = (props) => {
    return (
        <View style={styles.tile}>

            <Pressable onPress={()=>
                    console.log("Book title pressed.")
                }>
            <Text style={styles.bookTitle}>{props.title}</Text>
            </Pressable>
            <Text>by {props.author}</Text>


            <Text style={styles.desc}>{props.description}</Text>

            <Text style={styles.isbnNumber}>ISBN {props.isbn}</Text>

            <Button title="read"
                onPress={()=>
                    console.log("book read button pressed.")
                }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    tile: {
        width: '100%',
        height: 190,
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
    desc: {
        paddingTop: 20,
    },
    isbnNumber: {
        paddingTop: 20,
    },
}) 

export default BookTile;