
import type { Action } from '../actions/types';
import { CHANGE_CONTENT_SCENE, ANNOUNCE } from '../actions/noodleboard';


const initialState = {
  currentContent: ANNOUNCE,
  data: {
      announce:
[
    {
      "_id": "59118b9bb04bac6c0f52b9f4",
      "name": "Thông báo tuyển dụng lập trình viên mới ra trường của công ty SETA international Việt Nam",
      "link": "uet.vnu.edu.vn/coltech/taxonomy/term/479/5433",
      "uploadtime": "2017-05-09T16:24:00.000Z"
    },
    {
      "_id": "59103ef0b04bac6c0f52b9f3",
      "name": "Thông báo tham dự Chương trình mùa hè CASEUF năm 2017 tại Nhật Bản",
      "link": "uet.vnu.edu.vn/coltech/taxonomy/term/53/5430",
      "uploadtime": "2017-05-08T16:46:00.000Z"
  }],
      slot: [
    {
      "_id": "58e5aa693391ce3f955e0d9f",
      "note": "ĐK lần đầu",
      "updatedAt": "2017-04-06T02:39:37.377Z",
      "course": {
        "code": "ELT2035 11",
        "name": "Tín hiệu và hệ thống",
        "tc": "3",
        "group": "CL",
        "term": "2016-2017-1"
      },
      "student": {
        "code": "13020752",
        "fullname": "Đỗ Việt Anh",
        "birthday": "2/5/1995",
        "klass": "QH-2013-I/CQ-C-A-C"
      }
    },
    {
      "_id": "590ca7ca33f07438b8c63930",
      "note": "ĐK lần đầu",
      "updatedAt": "2017-05-10T16:29:55.419Z",
      "course": {
        "code": "mat10993",
        "name": "Phương pháp tính",
        "tc": "2",
        "group": "CL",
        "term": "2016-2017-1"
    },
      "student": {
        "code": "13020752",
        "fullname": "Đỗ Việt Anh",
        "birthday": "2/5/1995",
        "klass": "QH-2013-I/CQ-C-A-C"
      }
  }],
      finaltest: {},
      scoreboard: [
          {
            "_id": "590b70a6a9829d34fd77e98b",
            "href": "http://coltech.vnu.edu.vn/news4st/../Contents/attach/tgm_int3412-2.pdf",
            "term": "2016-2017-1",
            "uploadTime": "2017-02-13T08:36:00.000Z",
            "updatedAt": "2017-05-05T00:30:28.706Z",
            "createdAt": "2017-05-04T18:19:18.285Z",
            "file": {
              "available": true,
              "filename": "int34122_2016-2017-1.pdf",
              "path": "public/scoreboard/2016-2017-1"
            },
            "course": {
              "code": "int34122"
            }
          },
          {
            "_id": "590b70a6a9829d34fd77e9eb",
            "href": "http://coltech.vnu.edu.vn/news4st/../Contents/attach/th&ht_elt2035-11.pdf",
            "term": "2016-2017-1",
            "uploadTime": "2017-01-22T12:19:00.000Z",
            "updatedAt": "2017-05-05T00:38:28.022Z",
            "createdAt": "2017-05-04T18:19:18.403Z",
            "file": {
              "available": true,
              "filename": "elt203511_2016-2017-1.pdf",
              "path": "public/scoreboard/2016-2017-1"
            },
            "course": {
              "code": "elt203511"
            }
        }]
  }
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === CHANGE_CONTENT_SCENE) {
    return {
      ...state,
      currentContent: action.payload,
    };
  }
  return state;
}
