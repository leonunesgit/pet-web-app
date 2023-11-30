import GridSection from "@/components/GridSection";
import HeroMainCard from "@/components/HeroMainCard";
import { useEffect, useState } from "react";

const App = () => {
    const [ dataRes, setDataRes ] = useState(null);
    useEffect(() => {
        fetch(`/api/getData`)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Network response was not ok!');
                }
                return response.json();
            })
            .then(data => {
                // console.log(Object.values(data.pets));
                setDataRes(data);
            })
            .catch(error => {
                console.error('An error occourred: ', error);
            })
    }, [])

    return (
        <>
            <HeroMainCard />
            {dataRes && <GridSection dbData={dataRes}/>}
        </>
    );
}

export default App