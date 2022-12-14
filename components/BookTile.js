import {StyleSheet, Text, View, border, ScrollView, Button, Pressable, TouchableOpacity} from 'react-native';

const BookTile = (props) => {
    return (
        <View style={styles.tile}>

            <Pressable onPress={logTitle}>
            <Text style={styles.bookTitle}>{props.title}</Text>
            </Pressable>
            <Text>by {props.author}</Text>


            <Text style={styles.desc}>{props.description}</Text>

            <Text style={styles.isbnNumber}>ISBN {props.isbn}</Text>

            <TouchableOpacity onPress={logRead} style={styles.button}>
                <Text>READ</Text>
            </TouchableOpacity>

        </View>
    )
}

function logTitle(){
    console.log("Book title pressed.")
}

function logRead(){
    console.log("book read button pressed.")
}

const styles = StyleSheet.create({
    tile: {
        padding: 0,
        width: '100%',
        backgroundColor: '#',
        marginVertical: 20,
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
    button: {
        overflow: 'hidden',
        color: "black",
        backgroundColor: '#F5f5f5',
        borderColor: "black",
        borderWidth: 2,
        width: 45,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "80%",
        marginBottom: 10,
    },
}) 

export default BookTile;