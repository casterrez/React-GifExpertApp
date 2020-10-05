import { useState, useEffect } from "react"
import { getGif } from "../helpers/getGif";


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGif(category)
            .then(imgs => {


                setState({
                    data: imgs,
                    loading: false
                })

            })

    }, [category])

    // setTimeout(() => {
    //     setState({
    //         data: [1, 2, 3, 4, 5, 6, 7],
    //         loading: false
    //     })
    // }, 3000);

    return state;

}