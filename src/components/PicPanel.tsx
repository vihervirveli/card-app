import React from 'react';
import "./PicPanel.module.css";
const images = require.context("../images", true);
const imageList = images.keys().map(image => images(image));

const chunkIntoN = (arr:string[], n:number) => {
    const size = Math.ceil(arr.length / n);
    return Array.from({ length: n }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  }

const columnPics = chunkIntoN(imageList, 3);

interface picProps  {
    pic: string;
    handlePicChoice: (picture:string)=> void;
}

interface panelProps{
    handlePicChoice: (picture:string)=> void;
}

const SinglePic:React.FC<picProps> = ({pic, handlePicChoice}) =>{
    const handleChoice = () => {
        handlePicChoice(pic)
    }
    return(
    <img className="img-fluid my-2" src={pic} alt={pic} onClick={handleChoice}/>
    )
}



const PicPanel:React.FC<panelProps> = ({handlePicChoice}) => {
    
  return (
  
        <div className="panel row row-cols-3">
           
            {
                columnPics.map((col, idx) => (
                    <div className="col" key= {idx}>
                        {col.map((item, idx) => (
                            <SinglePic pic={item} key={idx} handlePicChoice={handlePicChoice}/>
                        ))}
                    </div>
                ))

            }
        </div>
  )
}

export default PicPanel