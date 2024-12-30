import { useState, useEffect } from "react"
import "../assets/css/componentes/card.css"
import { useParams, useNavigate } from "react-router-dom";
import { buscar } from "../API/Api";
import { Navigate } from "react-router-dom";
const Post = () => {
    const [post, setPost] = useState({});
    const navegar = useNavigate()

    const { id } = useParams()
    useEffect(() => {
        buscar(`posts/${id}`, setPost).catch(() => {
            navegar("/not-found")
        })
    }, [id])

    return (
        <main className="container flex flex--center">
            <article className="card post">
                <h2 className="post-card__title">{post.title}</h2>
                <p className="text__card">{post.body}</p>
            </article>
        </main>
    )
}

export default Post