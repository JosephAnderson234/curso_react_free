import { getPokePages } from "../utils/api"
import { useState } from "react"
import { useEffect } from "react"
import { type PokeData } from "../types/pokemonTypes"

export const useDataPokemon = (size_page: number) => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState<PokeData[]>([]);

    const [loading, setLoading] = useState(false);

    const fetchData = async (page:number) => {

        setLoading(true);
        try {
            const response = await getPokePages(page, size_page);
            setData(response.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }

    }

    const nextPage = async () => {
        if (loading) return; // Prevent multiple requests while loading
        setPage(page+1);
        await fetchData(page + 1);
    }

    const prevPage = async () => {
        if (loading || page <= 1) return; // Prevent multiple requests while loading or going below page 1
        setPage(page-1);
        await fetchData(page - 1);
    }

    
    useEffect(()=>{
        fetchData(page);
    }, [])


    return {data, page, loading, nextPage, prevPage};
}