import React , { useEffect } from 'react'
import Iits from "./Iits_navbar";
import { useDispatch, useSelector } from 'react-redux';
//import {fetchChapterPdfData } from './../redux/actions/action';// fetchCourseData,
import { fetchChapterPdfData } from '../../../../redux/actions/action';
const Handwrittennotes = () => {
  const dispatch = useDispatch();
  // const { data, loading, error } = useSelector((state) => state);
  //  console.log(data);
  //  console.log(loading);
  //  console.log(error);

  //  useEffect(() => {
  //   //dispatch(fetchvideoData());
  //  // dispatch(fetchChapterData());
  //    dispatch(fetchChapterPdfData());
  //   // dispatch(fetchCourseData());
    
  // }, [dispatch]);

  return (
    <>
    <Iits/>
         <div className="syllabus_header text-gray-300 text-center mx-16 px-9 pt-0 pb-5 leading-loose font-serif">
            hii hello Lecture sir note dinuhoss na
            {/* {data && data.map((item, index) => (
               <div key={index}>
                  <p className="h-10 bg-green-500">
                       {item.pdf_file}
                    </p> 
  </div>
   */}
{/* ))}  */}
         </div>
    </>
  )
}

export default Handwrittennotes