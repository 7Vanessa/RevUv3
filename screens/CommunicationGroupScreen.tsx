import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react'
import {View} from "react-native";
import {GiftedChat} from "react-native-gifted-chat";
import {auth, db} from "../firebase";

export default function CommunicationGroupScreen() {
    const [messages, setMessages] = useState([])

    /*useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello hi',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: "https://zupimages.net/up/22/01/nu7y.jpeg",
                },
            },
        ])
    }, [])*/

    useLayoutEffect(() => {
        const unsubscribe = db.collection('communication').orderBy('createdAt', 'desc').onSnapshot
        (snapshot => setMessages(
            snapshot.docs.map(doc => ({
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data.text,
                user: doc.data().user,
            }))
        ))
        return unsubscribe;
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        const {
            _id,
            createdAt,
            text,
            user
        } = messages[0]
        db.collection('communication').add({
            _id,
            createdAt,
            text,
            user
        })
    }, [])

    return (
        <GiftedChat messages={messages}
                    showAvatarForEveryMessage={true}
                    onSend={messages => onSend(messages)}
                    user={{_id: auth.currentUser?.email,
                        name: auth.currentUser?.displayName,
                        avatar: auth.currentUser?.photoURL
                    }}
        />
    )
}