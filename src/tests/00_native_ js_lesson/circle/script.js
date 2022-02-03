const showCircle = (x,y,radius) => {
  let div=document.createElement('div');
  div.className='circle';
  div.style.height=0;
  div.style.width=0;
  div.style.top=y+'px';
  div.style.left=x+'px';
  document.body.append(div);
  setTimeout(()=>{
      div.style.height=radius*2+'px';
      div.style.width=radius*2+'px';
  },0)
}