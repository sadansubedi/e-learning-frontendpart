// actions.js
import axios from 'axios';

// Assuming your Django API endpoint is 'https://your-django-api.com/api/data/'
// const API_URL = 'http://127.0.0.1:8000/api/courseapi/'
// const API_URL = 'http://127.0.0.1:8000/api/csit/iit/lecture';
export const API_URL_VIDEO = 'http://127.0.0.1:8000/api/coursevideo/'
export const API_URL_COURSE = 'http://127.0.0.1:8000/api/courseapi/';
export const API_URL_CHAPTER = 'http://127.0.0.1:8000/api/chapterapi/';
export const API_URL_CHAPTERPDF = 'http://127.0.0.1:8000/api/chapterpdfapi/';


export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (dataType,data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: { dataType, data },
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});



export const fetchvideoData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    try {
      const response = await axios.get(API_URL_VIDEO);
      dispatch(fetchDataSuccess("VIDEO",response.data));
     // console.log(response.data);
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

//phind.Ai response actions.js

export const fetchCourseData = () => {

 return async (dispatch) => {
   dispatch(fetchDataRequest());

   try {
     const response = await axios.get(API_URL_COURSE);
     dispatch(fetchDataSuccess('COURSE',response.data));
     //console.log(response.data);

   } catch (error) {
     dispatch(fetchDataFailure(error.message));
   }
 };
};

export const fetchChapterData = () => {

 return async (dispatch) => {
   dispatch(fetchDataRequest());

   try {
     const response = await axios.get(API_URL_CHAPTER);
     dispatch(fetchDataSuccess('CHAPTER',response.data));
     //console.log(response.data);

   } catch (error) {
     dispatch(fetchDataFailure(error.message));
   }
 };
};

export const fetchChapterPdfData = () => {

 return async (dispatch) => {
   dispatch(fetchDataRequest());

   try {
     const response = await axios.get(API_URL_CHAPTERPDF);
     dispatch(fetchDataSuccess('CHAPTER_PDF',response.data));
     //console.log(response.data);

   } catch (error) {
     dispatch(fetchDataFailure(error.message));
   }
 };
};



// export const fetchvideoData = () => {
//   return async (dispatch) => {
//     dispatch(fetchDataRequest());

//     try {
//       if(api===API_URL_VIDEO){
//       const response = await axios.get(api);
//       dispatch(fetchDataSuccess(response.data));
//        console.log(response.data);
//       } else if(api===API_URL_COURSE){
//         const response = await axios.get(api);
//       dispatch(fetchDataSuccess(response.data));
//       // console.log(response.data);
//       } else if(api===API_URL_CHAPTER){
//         const response = await axios.get(api);
//       dispatch(fetchDataSuccess(response.data));
//       // console.log(response.data);
//       } else if(api===API_URL_CHAPTERPDF){
//         const response = await axios.get(api);
//       dispatch(fetchDataSuccess(response.data));
//       // console.log(response.data);
//       }
//     } catch (error) {
//       dispatch(fetchDataFailure(error.message));
//     }
//   };
// };
