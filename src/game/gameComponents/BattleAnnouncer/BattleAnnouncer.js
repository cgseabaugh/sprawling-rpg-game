import React, {useState} from 'react'

import {useTypedMessage} from '../hooks/useTypedMessage'

import './BattleAnnouncer.css'

export const BattleAnnouncer = ({message}) => {

    const typedMessage = useTypedMessage(message);

    return(
        <div className="battle-announcer-main">
            <div className="message">{typedMessage}</div>
        </div>
    )
}

