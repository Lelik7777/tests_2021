import React, {useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';

type PhotosType = {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
export const AppScroll = () => {
    const [photos, setPhotos] = React.useState<PhotosType[] | null>(null);
    const [page,setPage]=React.useState(1);
    const [isFetching,setIsFetching]=React.useState(true);
    useEffect(() => {
        axios.get<PhotosType[]>('https://jsonplaceholder.typicode.com/photos', {params: {_page: page, _limit: 10}})
            .then(res => setPhotos(res.data))
    }, []);
    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, []);
    const handleScroll = () => {
        console.log('scroll')
    }
    return (
        <div style={{margin:'20px'}}>
            {photos && photos.map((x) => <div>
                <div>{x.id}. {x.title}</div>
                <img src={x.thumbnailUrl} alt="img"/>
            </div>)}
        </div>
    )
}