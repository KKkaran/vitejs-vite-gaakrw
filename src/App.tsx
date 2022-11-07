import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {

  const [styleWords,setStyleWords] = useState({red:[],underline:[],bold:[]})
  const [list,setList] = useState([]);
  const [listBold,setListBold] = useState([]);
  const [listRed,setListRed] = useState([]);
  const [css,setCss] = useState(["","underline","bold","red"])
  const [style,setStyle] = useState(css[0]);
  const [paraContent,setParaContent] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam odio ut sapien mollis hendrerit. Fusce in lectus ex. In hac habitasse platea dictumst. Duis aliquam sed arcu at sagittis. Pellentesque suscipit elit a elit dignissim, ornare mattis libero convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque in dictum augue, nec consectetur enim. Pellentesque quis quam ultricies, volutpat nulla sit amet, egestas est. Praesent accumsan ante non dui sollicitudin convallis. Etiam facilisis finibus lectus, euismod gravida ipsum ultricies at.") 
  const [word1,setWord1] = useState("");
  const [word2,setWord2] = useState("");
  const [word3,setWord3] = useState("");

  const [wordsOfPara,setWordsOfPara] = useState(paraContent.split(/[\s.,]+/))
  useEffect(()=>{
    const timeId = setTimeout(()=>{
      const bool = wordsOfPara.map((w,index)=>{
        if(w===word1){
          console.log("first")
          createPara()
          setStyle(css[1])
          setList((o)=> [...o,index])
        } 
      })
    },700)
    return ()=>{
       clearTimeout(timeId);
       setList([])

    }
  },[word1])
  useEffect(()=>{
    setStyleWords({...styleWords, [css[1]]: list})
  },[list])
  useEffect(()=>{
    const timeId = setTimeout(()=>{
      const bool = wordsOfPara.map((w,index)=>{
        if(w===word2){
          console.log("second")
          createPara()
          setStyle(css[2])
          setListBold((o)=> [...o,index])
        } 
      })
    },700)
    return ()=>{
       clearTimeout(timeId);
       setListBold([])

    }
  },[word2])
  useEffect(()=>{
    setStyleWords({...styleWords, [css[2]]: listBold})
  },[listBold])
  useEffect(()=>{
    const timeId = setTimeout(()=>{
      const bool = wordsOfPara.map((w,index)=>{
          if(w===word3){
          console.log("third")
          createPara()
          setStyle(css[3])
          setListRed((o)=> [...o,index])
        }
      })
    },700)
    return ()=>{
       clearTimeout(timeId);
       setListRed([])

    }
  },[word3])
  useEffect(()=>{
    setStyleWords({...styleWords, [css[3]]: listRed})
  },[listRed])
  
   const createPara = ()=>{
     console.log("********************")     
    //console.log(styleWords)
    return (wordsOfPara.map((w,index)=>{
      
        if(styleWords['red'].includes(index) && styleWords['bold'].includes(index) && styleWords['underline'].includes(index)) return(
          <span style={{color:'red',textDecoration:'underline', fontWeight:'bold'}} >{w} </span>
        )
        if(styleWords['red'].includes(index) && styleWords['bold'].includes(index)) return(
          <span style={{color:'red', fontWeight:'bold'}} >{w} </span>
        )
        if(styleWords['red'].includes(index) && styleWords['underline'].includes(index)) return(
          <span style={{color:'red', textDecoration:'underline'}} >{w} </span>
        )
        if(styleWords['bold'].includes(index) && styleWords['underline'].includes(index)) return(
          <span style={{fontWeight:'bold', textDecoration:'underline'}} >{w} </span>
        )
        if(styleWords['bold'].includes(index)) return(
          <span style={{fontWeight:'bold'}} >{w} </span>
        )
        if(styleWords['red'].includes(index)) return(
          <span style={{color:'red'}} >{w} </span>
        )
        if(styleWords['underline'].includes(index)) return(
          <span style={{textDecoration:'underline'}} >{w} </span>
        )
      return <span>{w} </span>
    }))
   }
  return (
    <div className="App">
      <div>
        <input type="text" placeholder="First Input" value={word1} onChange={(e) => { setWord1(e.target.value) }} />
        <br/>
        <input type="text" placeholder="Second Input" value={word2} onChange={(e) => { setWord2(e.target.value) }} />
        <br/>
        <input type="text" placeholder="Third Input" value={word3} onChange={(e) => { setWord3(e.target.value) }} />
      </div>
      <div className="card">
        <p id="paragraph">
          {
            createPara()
          }
        </p>
      </div>
    </div>
  );
}
export default App;
