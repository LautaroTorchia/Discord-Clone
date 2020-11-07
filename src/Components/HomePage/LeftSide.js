import React from 'react'
import '../../CSSfiles/LeftSide.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import PhoneIcon from '@material-ui/icons/Phone';
import InfoIcon from '@material-ui/icons/Info';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import db, { auth } from '../../firebase';
import { useState } from 'react';
import { useEffect } from 'react';

function LeftSide() {
    const user = useSelector(selectUser)
    const [channels,setChannels] = useState([])

    useEffect(() =>{
        db.collection('channels').onSnapshot(snapshot => 
            setChannels(snapshot.docs.map(
                doc => ({
                    id:doc.id,
                    channel:doc.data()
                })
            )))
    },[])

    const handleAddChannel = () =>{
        const channelName=prompt('Enter a new channel Name')
        if (channelName){
            db.collection('channels').add({
                channelName,
            })
        }
    }

    return (
        <div className='leftSide'>
            <div className='sidebar__top'>
                <h2>{user.displayName}</h2>
                <ExpandMoreIcon />
            </div>
            <div className='sidebar__mid'>
                <div className="channel__header">
                    <div className="header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon onClick={handleAddChannel}className='addchannel' />

                </div>
                <div className="channel__chats">
                    {channels.map(channel => (<SidebarChannel id={channel.id} channelName={channel.channel.channelName} />))}
                </div>
            </div>
            <div className='sidebar__bottom'>
                <div className="bottom_voiceCall">
                    <SignalCellularAltIcon className='connection__icon' fontSize='large'/>
                    <div className="voice__info">
                        <h3>Voice Connected</h3>
                        <p>Stream</p>
                    </div>
                    <div className="call_icons">
                        <InfoIcon />
                        <PhoneIcon />
                    </div>
                </div>
                <div className="bottom__profile">
                    <Avatar  onClick={() => auth.signOut()} src={user.photo} />
                    <div className="profile__info">
                        <h3>{user.displayName}</h3>
                        <p>#{user.uid.substring(0,7)}</p>
                    </div>
                    <div className="profile__icons">
                        <MicIcon />
                        <HeadsetIcon />
                        <SettingsIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSide
