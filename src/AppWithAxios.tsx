import React, {useEffect, useState} from 'react';
import axios from 'axios';
export const AppWithAxios = () => {
    const [post,setPost]=useState<any>(null);
    const baseURL = "https://jsonplaceholder.typicode.com/posts/1";



    useEffect(()=>{
        console.log('useEffect');
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        axios.get(baseURL,{headers: {
            'Access-Control-Allow-Origin': 'GET',
                'Content-Type': 'application/json'
        }}
    ).then((response)=>{
            console.log('response',response);
            setPost(response);
        }).catch((error)=>{
            console.warn(error);
        });
    },[]);
    if(!post)return  null;
  return(
      <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
      </div>
  );
}