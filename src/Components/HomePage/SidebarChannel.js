import React from 'react'
import { useDispatch } from 'react-redux'
import '../../CSSfiles/SidebarChannel.css'
import { setChannelInfo} from '../../features/counter/appSlice'

function SidebarChannel({id , channelName}) {
    const dispatch = useDispatch()

    return (
        <div className='sidebarchannel' onClick={() => dispatch(setChannelInfo({ channelId:id, channelName:channelName}))}>
            <h4><span className='sidebar_channel_hash'>#</span>{channelName}</h4>
        </div>
    )
}

export default SidebarChannel
