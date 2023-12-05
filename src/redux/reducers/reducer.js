// // reducer.js
//import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE ,API_URL_CHAPTER,API_URL_CHAPTERPDF,API_URL_COURSE,API_URL_VIDEO } from '../actions/action';//./actions
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE  } from '../actions/action';//./actions


const initialState = {
  courseData: [],
  chapterData:  [],
  chapterPdfData:  [],
  videodata: [],
  loading: false,
  error: null,
 };
 const Reducer = (state = initialState, action) => {
  //console.log(dataType)
  //console.log(action.payload);

  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
     console.log( action.payload)

     // const { dataType, data } = action.payload;
    // console.log(data)
    //  console.log(dataType)
      if (dataType === 'COURSE') {
        return { ...state, loading: false, courseData: data };
      } else if (dataType === 'CHAPTER') {
        return { ...state, loading: false, chapterData: data };
      } else if (dataType === 'CHAPTER_PDF') {
        return { ...state, loading: false, chapterPdfData: data };
      } else if (dataType === 'VIDEO') {
        return { ...state, loading: false, videodata: data };
      }
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};



 /*
 const Reducer = (state = initialState, action) => {
  console.log(action.payload);
  //const {video_file}=action.payload
 // console.log(video_file);
//  console.log(state);
  
  switch (action.type) {
    case FETCH_DATA_REQUEST:

      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      if (action.payload.url === API_URL_COURSE) {
        console.log(action.payload);

        return { ...state, loading: false, courseData: action.payload.data };
      } else if (action.payload.url === API_URL_CHAPTER) {
        return { ...state, loading: false, chapterData: action.payload.data };
      } else if (action.payload.url === API_URL_CHAPTERPDF) {
        return { ...state, loading: false, chapterPdfData: action.payload.data };
      }else if (action.payload.url === API_URL_VIDEO) {
        return { ...state, loading: false, videodata: action.payload.data};
      }
    case FETCH_DATA_FAILURE:

      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
 };

 */
//  const Reducer = (state = initialState, action) => {
//   console.log(action.payload);
  
//   switch (action.type) {
//     case FETCH_DATA_REQUEST:

//       return { ...state, loading: true, error: null };
//     case FETCH_DATA_SUCCESS:
//       if (action.payload.url === API_URL_COURSE) {
//         console.log(action.payload);

//         return { ...state, loading: false, courseData: action.payload.data };
//       } else if (action.payload.url === API_URL_CHAPTER) {
//         return { ...state, loading: false, chapterData: action.payload.data };
//       } else if (action.payload.url === API_URL_CHAPTERPDF) {
//         return { ...state, loading: false, chapterPdfData: action.payload.data };
//       }else if (action.payload.url === API_URL_VIDEO) {
//         return { ...state, loading: false, videodata: action.payload.data};
//       }
//     case FETCH_DATA_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
//  };
 
 export default Reducer;
 

// const initialState = {
//   data: null,
//   loading: false,
//   error: null,
// };

// const Reducer = (state = initialState, action) => {
//   //console.log(action.payload);
//   switch (action.type) {
//     case FETCH_DATA_REQUEST:
//       return { ...state, loading: true, error: null };
//     case FETCH_DATA_SUCCESS:
//       return { ...state, loading: false, data: action.payload };
//     case FETCH_DATA_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export default Reducer;


// //phind.Ai
// // reducer.js
// // ...
