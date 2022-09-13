
import React, {useState, useEffect} from 'react';

import {wait} from '../Characters/helpers'



export const useTypedMessage = message => {

    const [typedMessage, setTypedMessage] = useState('');

    useEffect(() => {
        setTypedMessage('');

        if(message.length) {
            (async () => {
                let visibleMessage = '';
                for(let i=0; i<message.length; i++){
                    await wait(25);
                    visibleMessage = visibleMessage + message[i]
                    setTypedMessage(visibleMessage);
                }
            })();
        }

    }, [message]);

    return typedMessage;
}

