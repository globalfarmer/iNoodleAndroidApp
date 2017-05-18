import {
    ANNOUNCE,
    SLOT,
    FINAL_TEST,
    SCOREBOARD,
    GAME
} from './actions/noodleboard';

export const Labels = {
    person: {
        title: "Thông tin cá nhân",
        info: {
            fullname: "Họ & tên",
            school: "Trường",
            birthday: "Ngày sinh",
            klass: "Lớp",
            code: "Mã sinh viên",
            done: "Xong"
        },
        term: {
            "2016-2017-1": "Học kỳ 1 năm học 2016-2017",
            "2016-2017-2": "Học kỳ 2 năm học 2016-2017",
        },
    },
    announce: {
        noData: "Không có thông báo",
    },
    slot: {
        noData: "Không có môn học nào",
    },
    finaltest: {
        noData: "Chưa có lịch thi"
    },
    scoreboard: {
        noData: "Chưa có kết quả"
    },
    noodleboard: {
        title: {
            ANNOUNCE: "Thông báo sinh viên",
            SLOT: "Môn học trong kỳ",
            FINAL_TEST: "Lịch thi",
            SCOREBOARD: "Bảng điểm",
            GAME: 'Mini game'
        },
    }
};

export const Values = {
    person: {
        term: {
            "2016-2017-1": "2016-2017-1",
            "2016-2017-2": "2016-2017-2",
        }
    }
};
