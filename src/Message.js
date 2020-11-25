import { Card, CardContent, Typography } from '@material-ui/core';
import React, { forwardRef } from 'react';
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;

    return (
        <Card ref={ref} className={`message ${isUser && 'message__user'}`}>
            <CardContent>
                <Typography
                    color="white"
                    variant="h5"
                    component="h2"
                >
                    {!isUser && `${message.username || 'Unknown User'}: `} {message.message}
                </Typography>
            </CardContent>
        </Card>
    )
})

export default Message
