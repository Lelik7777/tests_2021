import React, {useState} from 'react';
import {Input} from './Input';
import {Button} from './Button';

type PropsType={
    
}
export const MyTestComponent = ({}:PropsType) => {
 const [value,setValue]=useState<string>('');
  return(
      <div>
          <Input title={value} setTitle={setValue}/>
          <Button title={'add'} callBack={()=>{}}/>
      </div>
  )
}