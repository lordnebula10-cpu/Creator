import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

const App = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (message) {
            setMessages([...messages, { id: Math.random().toString(), text: message }]);
            setMessage('');
        }
    };

    return (
        <View style={{ padding: 10 }}>
            <FlatList
                data={messages}
                renderItem={({ item }) => <Text>{item.text}</Text>}
                keyExtractor={item => item.id}
            />
            <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="Type a message"
            />
            <Button title="Send" onPress={sendMessage} />
        </View>
    );
};

export default App;