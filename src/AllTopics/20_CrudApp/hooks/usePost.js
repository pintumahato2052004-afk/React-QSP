import { useEffect, useState } from "react";
import { BASE_URL, LIMIT } from "../constant";

export const usePost = ({ query, sortBy, skip }) => {

    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getPost() {
        setLoading(true);

        let URL = `${BASE_URL}/posts?limit=${LIMIT}&skip=${skip}`;

        if (query) {
            URL = `${BASE_URL}/posts/search?q=${query}&limit=${LIMIT}&skip=${skip}`;
        }

        try {

            let resp = await fetch(URL);
            let data = await resp.json();
            console.log(data);

            let sortedData = [...data.posts];

            if(sortBy === "title"){
                sortedData.sort((a, b)=>a.title.localeCompare(b.title));
            }

            if(sortBy === "views"){
                sortedData.sort((a, b)=> b.views - a.views);
            }

            setPost(sortedData);

        } catch (error) {
            console.log(error);
            setPost([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getPost();
    }, [query, sortBy, skip]);


    return {post, loading}

};