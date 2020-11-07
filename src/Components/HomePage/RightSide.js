import React from 'react'
import '../../CSSfiles/RightSide.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import GifIcon from '@material-ui/icons/Gif';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import {  selectChannelId, selectChannelName } from '../../features/counter/appSlice';
import { selectUser } from '../../features/counter/userSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import db from '../../firebase'
import firebase from 'firebase'


function RightSide() {

    const appName= useSelector(selectChannelName)
    const appId= useSelector(selectChannelId)
    const user= useSelector(selectUser)
    const [input,setInput]= useState("")
    const [messages,setMessages]=useState([])
    
    useEffect(() =>{
        if(appId)
            db.collection('channels').doc(appId).collection('messages').orderBy('timestamp','asc')
            .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data())))
    },[appId])


    const sendMessage = (e) =>{
        e.preventDefault()
        db.collection('channels').doc(appId).collection('messages').add({ message:input, user:user, timestamp:firebase.firestore.FieldValue.serverTimestamp()})
        setInput('')
    }
    return (
        <div className='rightside'>
            <ChatHeader chatName={appName}/>
            <div className="chat__messages">
                {messages.map((message) => (<Message user={message.user} timestamp={message.timestamp} message={message.message}/>))}
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize='large' />
                <form>
                    <input value={input} onChange={({target}) => setInput(target.value)}type="text" placeholder={`Message #${appName}`} disabled={!appId}/>
                    <button type='submit' className='input__button' onClick={sendMessage}>Send Message</button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize='large'/>
                    <GifIcon fontSize='large'/>
                    <EmojiEmotionsIcon fontSize='large'/>
                </div>
            </div>
            
        </div>
    )
}

export default RightSide
