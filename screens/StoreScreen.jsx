import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    RefreshControl,
    TextInput,
    StyleSheet,Switch,
    I18nManager,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import booksData from "../Books.json";

export default function StoreScreen() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isRTL, setIsRTL] = useState(false);

    const BASE_URL = "https://dev.iqrakitab.net/api/";

    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
        setRefreshing(false);
    };

    const fetchData = async () => {
        try {
            // Simulating API call delay
            setTimeout(() => {
                setProducts(booksData.data);
                setLoading(false);
                AsyncStorage.setItem("books", JSON.stringify(booksData.data));
            }, 1000);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (text) => {
        setSearchQuery(text);
        const filteredProducts = booksData.data.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        setProducts(filteredProducts);
    };

    const toggleDirection = () => {
        I18nManager.forceRTL(!isRTL);
        setIsRTL(!isRTL);
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={[styles.container, isRTL && { direction: "rtl" }]}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search by name"
                onChangeText={handleSearch}
                value={searchQuery}
            />
            <FlatList
                data={products}
                keyExtractor={(item) => item._id}
                style={styles.cardsContainer}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                renderItem={({ item }) => (
                    <View key={item._id} style={styles.card}>
                        <Image
                            source={{ uri:`https://dev.iqrakitab.net/${item.coverPhotoUri}`}}
                            style={styles.cardImage}
                        />
                        <View style={styles.cardDetails}>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardAuthor}>{item.author.name}</Text>
                            <Text style={styles.cardCategory}>{item.category.name}</Text>
                            <View style={styles.cardFooter}>
                                <Text style={styles.cardPrice}>Rs. 100</Text>
                                <Text style={styles.cardRating}>⭐ 4.5</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
            <View style={styles.toggleContainer}>
                <Text>Toggle Direction:</Text>
                <Switch
                    value={isRTL}
                    onValueChange={toggleDirection}
                    style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    cardsContainer: {
        flex: 1,
    },
    card: {
        flexDirection: "row",
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#e3e7e8",
        borderRadius: 10,
    },
    cardImage: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    cardDetails: {
        flex: 1,
        marginLeft: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    cardAuthor: {
        fontSize: 16,
    },
    cardCategory: {
        fontSize: 14,
        color: "gray",
    },
    cardFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: "bold",
    },
    cardRating: {
        fontSize: 16,
        fontWeight: "bold",
    },
    toggleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
});
