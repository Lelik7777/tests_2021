import React, {useState} from 'react';

type PropsType={

}
export const InputMine = ({}:PropsType) => {
  const [checked,setChecked]=useState<boolean>(false)
  const style={
    margin:'30px',
    fontSize:'1.4rem',
  }
  return(
        <div style={style}><input
            type="checkbox"
            checked={checked}
onClick={()=>setChecked(!checked)}
        />
        <span>any text</span>
        </div>
  )
}