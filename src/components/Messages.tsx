import React, { useEffect } from "react"
import moment from "moment"
import { MessageI } from "../types/data"
import * as messageService from "../services/messages"

import {
    Container,
    Message,
} from "../styles/components/Messages"
import {
    FiEye,
    FiEyeOff,
} from "react-icons/fi"

interface MessagesI {
    messages: MessageI[]
    setMessages: React.Dispatch<React.SetStateAction<MessageI[]>>
}
export default function Messages({ messages, setMessages }: MessagesI) {

    useEffect(() => {
        !messages.length ? messageService.getAll().then(m => setMessages(m)) : null
    }, [])

    function toggleView(id: string) {
        messageService.toggleView(id).then(() => {
            setMessages(messages.map(m => {
                if (m.id === id) m.viewed = !m.viewed;                
                return m;
            }))
        })
    }

    return (
        <Container>
            {messages.map(m => (
                <Message key={m.id} className={m.viewed ? "viewed" : ""}>
                    <h4>{m.email}</h4>

                    <p>{m.text}</p>

                    <div className="details">
                        <button onClick={() => toggleView(m.id)}>{m.viewed ? (<FiEyeOff />) : <FiEye />}</button>

                        <span>{moment(m.sent_at).format("DD/MM/YYYY - HH:mm A")}</span>
                    </div>
                </Message>
            ))}
        </Container>
    )
}
