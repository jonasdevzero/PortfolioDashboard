import { useState, useEffect } from "react"
import { NextPage } from "next"
import moment from "moment"
import * as messageService from "../../services/messages"
import { MessageI } from "../../types/data"

import {
    Container,
    Message,
} from "../../styles/pages/dashboard/Messages"
import {
    FiEye,
    FiEyeOff,
} from "react-icons/fi"
import Header from "../../components/Header"

const Messages: NextPage = () => {
    const [messages, setMessages] = useState<MessageI[]>()

    useEffect(() => {
        messageService.getAll().then(m => setMessages(m))
    }, [])

    function toggleView(id: string) {
        messageService.toggleView(id).then(() => {
            setMessages(messages?.map(m => {
                if (m.id === id) m.viewed = !m.viewed;                
                return m;
            }))
        })
    }

    return (
        <Container>
            <Header />
            
            {messages?.map(m => (
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

export default Messages 
