import React, {SyntheticEvent, useEffect, useRef} from 'react';
import axios, {AxiosResponse} from 'axios';

type PhotosType = {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
export const AppScroll = () => {
    const [photos, setPhotos] = React.useState<PhotosType[]>([]);
    const [page, setPage] = React.useState(1);
    const [isFetching, setIsFetching] = React.useState(true);
    useEffect(() => {
        isFetching && axios.get<PhotosType[]>('https://jsonplaceholder.typicode.com/photos', {
            params: {
                _page: page,
                _limit: 10
            }
        })
            .then(res => {
                setPhotos([...photos, ...res.data])
                setPage(prev => prev + 1);
            }).finally(() => setIsFetching(false));
    }, [isFetching]);
    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = (e: Event): void => {
        const target: HTMLDocument = e.target as HTMLDocument;
        if (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 100)
            setIsFetching(true);

        /*  console.log('scrollHeight',e.target.documentElement.scrollHeight);
          console.log('scrollTop',e.target.documentElement.scrollTop);
          console.log('height',window.innerHeight)*/

    }

    return (
        <div style={{margin: '20px'}}>

            {photos && photos.map((x) => <div>
                <div>{x.id}. {x.title}</div>
                <img src={x.thumbnailUrl} alt="img"/>
            </div>)}
        </div>
    )
}