import React, {useEffect, useState} from 'react';
import axios from 'axios';


export const AppWithAxios = () => {
    const users: { id: string; name: string }[] = [
        {id: '1', name: 'bob'},
        {id: '2', name: 'alex'},
        {id: '3', name: 'ann'},
    ];
    const [filterUsers, setFilterUsers] = useState<{ id: string; name: string }[]>(users);
    const [value, setValue] = useState<string>('');

    const getFilterUsers = () => {

        if (filterUsers.find(x => x.name === value))
            setFilterUsers(filterUsers.filter(x => x.name == value.toLowerCase()));

        else
            alert('name isn`t in current list');
        setValue('');
    }
        return (
            <div>
                {/* <h1>{post.title}</h1>
          <p>{post.body}</p>*/}
                <div>
                    <input value={value} type="text" onChange={(e) => setValue(e.currentTarget.value)}/>
                    <button type={'button'} onClick={getFilterUsers}>search</button>
                    <button onClick={() => setFilterUsers(users)}>reset</button>
                    {filterUsers.map(x => <div key={x.id} style={{margin: '30px'}}>{x.name}</div>)}
                </div>
            </div>
        );
    }

