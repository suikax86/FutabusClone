db = db.getSiblingDB('FutabusClone');
db.buses.insertMany([
    {
        "departureTime": "2024-05-05:23:00",
        "departureLocation": "Ho Chi Minh City",
        "arrivalTime": "2024-05-06:08:00",
        "arrivalLocation": "Khanh Hoa",
        "fare": 295000,
        "boardingPoints": [
            "Bến xe An Sương",
            "BX Miền Đông Mới",
            "223 Phạm Hữu Lầu",
            "Hàng xanh",
            "43 Nguyễn Cư Trinh",
            "205 Phạm Ngũ Lão",
            "Suối Linh",
            "BX Miền Đông",
            "Xa lộ Hà Nội"
        ],
        "droppingPoints": [
            "Bến Lội",
            "Bến xe Phía Nam"
        ],
        "busType": "GHẾ"
    },

    {
        "departureTime": "2024-05-05:08:00",
        "departureLocation": "Ho Chi Minh City",
        "arrivalTime": "2024-05-05:16:00",
        "arrivalLocation": "Khanh Hoa",
        "fare": 500000,
        "boardingPoints": [
            "BX Miền Đông Mới",
            "205 Phạm Ngũ Lão",
            "Suối Linh",
            "Bến Lội"
        ],
        "droppingPoints": [
            "Bến Xe Cam Ranh",
            "Bến xe Phía Nam"
        ],
        "busType": "GIƯỜNG"
    },

    {
        "departureTime": "2024-05-05:20:00",
        "departureLocation": "Ho Chi Minh City",
        "arrivalTime": "2024-05-06:05:00",
        "arrivalLocation": "Khanh Hoa",
        "fare": 400000,
        "boardingPoints": [
            "BX Miền Tây",
            "205 Phạm Ngũ Lão",
            "Y Dược",
            "Đồng Đen",
            "Lũy Bán Bích",
            "Bệnh Viện Nhi",
            "43 Nguyen Cu Trinh",
            "Cho Ray",
            "BACH KHOA",
            "231-233 Lê Hồng Phong",
            "202 Lê Hồng Phong",
            "BX Miền Đông",
            "Hàng Xanh",
            "Bệnh Viện Ung Bướu",
            "BX An Suong",
            "Xa Lộ Hà Nội",
            "NGA 4 GA",
            "BẾN LỘI"
        ],
        "droppingPoints": [
            "Ninh Hòa"
        ],
        "busType": "LIMOUSINE"
    },

    {
        "departureTime": "2024-05-05:04:00",
        "departureLocation": "Ho Chi Minh City",
        "arrivalTime": "2024-05-05:12:00",
        "arrivalLocation": "Da Lat",
        "fare": 210000,
        "boardingPoints": [
            "Bến xe Miền Tây",
            "BX An Sương",
            "205 Phạm Ngũ Lão",
            "231-233 Lê Hồng Phong",
            "Hàng Xanh",
            "43 Nguyễn Cư Trinh",
            "Mai Chí Thọ"
        ],
        "droppingPoints": [
            "Huyện Tân Phú",
            "Đà Lạt"
        ],
        "busType": "GHẾ"
    },

    {
        "departureTime": "2024-05-05:13:00",
        "departureLocation": "Ho Chi Minh City",
        "arrivalTime": "2024-05-05:21:00",
        "arrivalLocation": "Da Lat",
        "fare": 250000,
        "boardingPoints": [
            "Bến xe Miền Tây",
            "205 Phạm Ngũ Lão",
            "43 Nguyễn Cư Trinh",
            "Hàng Xanh",
            "Bến xe Ngã 4 Ga"
        ],
        "droppingPoints": [
            "Huyện Tân Phú",
            "Đà Lạt"
        ],
        "busType": "GIƯỜNG"
    },

    {
        "departureTime": "2024-05-05:20:00",
        "departureLocation": "Ho Chi Minh City",
        "arrivalTime": "2024-05-06:04:00",
        "arrivalLocation": "Da Lat",
        "fare": 290000,
        "boardingPoints": [
            "Bến xe An Sương",
            "Bến xe Miền Tây",
            "Hàng Xanh",
            "Bến xe Ngã 4 Ga",
            "Suối Linh"
        ],
        "droppingPoints": [
            "Huyện Tân Phú",
            "Đà Lạt"
        ],
        "busType": "LIMOUSINE"
    },

    {
        "departureTime": "2024-05-05:10:15",
        "departureLocation": "Ho Chi Minh City",
        "arrivalTime": "2024-05-06:05:15",
        "arrivalLocation": "Da Nang",
        "fare": 350000,
        "boardingPoints": [
            "Bến xe Miền Đông Mới",
            "BX Miền Đông",
            "205 Phạm Ngũ Lão",
            "Hàng Xanh",
            "43 Nguyễn Cư Trinh",
            "Xa lộ Hà Nội",
            "Suối Linh"
        ],
        "droppingPoints": [
            "Bến Lội",
            "Đà Nẵng"
        ],
        "busType": "GHẾ"
    },

    {
        "departureTime": "2024-05-05:14:30",
        "departureLocation": "Ho Chi Minh City",
        "arrivalTime": "2024-05-06:10:30",
        "arrivalLocation": "Da Nang",
        "fare": 410.000,
        "boardingPoints": [
            "Bến xe An Sương",
            "BX Miền Tây",
            "Hàng Xanh",
            "Bến xe Miền Đông",
            "Bến xe Ngã 4 Ga",
            "Xa lộ Hà Nội",
            "Suối Linh"
        ],
        "droppingPoints": [
            "Bến Lội",
            "Đà Nẵng"
        ],
        "busType": "GIƯỜNG"
    },

    {
        "departureTime": "2024-05-05:19:45",
        "departureLocation": "Ho Chi Minh City",
        "arrivalTime": "2024-05-06:14:45",
        "arrivalLocation": "Da Nang",
        "fare": 450000,
        "boardingPoints": [
            "Bến xe Miền Đông Mới",
            "205 Phạm Ngũ Lão",
            "Hàng Xanh",
            "43 Nguyễn Cư Trinh",
            "Bến xe Ngã 4 Ga",
            "Xa lộ Hà Nội",
            "Suối Linh"
        ],
        "droppingPoints": [
            "Bến Lội",
            "Đà Nẵng"
        ],
        "busType": "LIMOUSINE"
    },

    {
        "departureTime": "2024-05-05:00:30",
        "departureLocation": "Da Lat",
        "arrivalTime": "2024-05-05:08:30",
        "arrivalLocation": "Ho Chi Minh City",
        "fare": 210000,
        "boardingPoints": [
            "Fi Nom",
            "Đà Lạt",
            "Đức Trọng",
            "Bảo Lộc",
            "Di Linh",
            "Thạnh Mỹ"
        ],
        "droppingPoints": [
            "Huyện Tân Phú",
            "Bến xe Ngã 4 Ga",
            "Bến xe Miền Tây"
        ],
        "busType": "GHẾ"
    },

    {
        "departureTime": "2024-05-05:12:00",
        "departureLocation": "Da Lat",
        "arrivalTime": "2024-05-05:20:00",
        "arrivalLocation": "Ho Chi Minh City",
        "fare": 250000,
        "boardingPoints": [
            "Fi Nom",
            "Đà Lạt",
            "Đức Trọng",
            "Bảo Lộc",
            "Di Linh",
            "Thạnh Mỹ"
        ],
        "droppingPoints": [
            "Huyện Tân Phú",
            "Bến xe Ngã 4 Ga",
            "Bến xe Miền Tây"
        ],
        "busType": "GIƯỜNG"
    },

    {
        "departureTime": "2024-05-05:21:05",
        "departureLocation": "Da Lat",
        "arrivalTime": "2024-05-06:05:05",
        "arrivalLocation": "Ho Chi Minh City",
        "fare": 290000,
        "boardingPoints": [
            "Đà Lạt",
            "Tà Hine",
            "Hòa Ninh",
            "Đức Trọng",
            "Di Linh",
            "Bảo Lộc"
        ],
        "droppingPoints": [
            "Huyện Tân Phú",
            "Bến xe Miền Đông Mới"
        ],
        "busType": "LIMOUSINE"
    },

    {
        "departureTime": "2024-05-05:14:00",
        "departureLocation": "Da Lat",
        "arrivalTime": "2024-05-06:04:00",
        "arrivalLocation": "Da Nang",
        "fare": 350000,
        "boardingPoints": [
            "Đông Hòa",
            "77 Lê Lợi",
            "Nguyễn Đức Cảnh",
            "An Nhơn",
            "207 Quy Nhơn"
        ],
        "droppingPoints": [
            "Diên Khánh",
            "Bến xe Quy Nhơn",
            "Quảng Ngãi",
            "Nam Phước",
            "Đà Nẵng"
        ],
        "busType": "GHẾ"
    },

    {
        "departureTime": "2024-05-05:15:00",
        "departureLocation": "Da Lat",
        "arrivalTime": "2024-05-06:05:00",
        "arrivalLocation": "Da Nang",
        "fare": 410000,
        "boardingPoints": [
            "Đông Hòa",
            "77 Lê Lợi",
            "Nguyễn Đức Cảnh",
            "An Nhơn",
            "207 Quy Nhơn"
        ],
        "droppingPoints": [
            "Diên Khánh",
            "Bến xe Quy Nhơn",
            "Quảng Ngãi",
            "Nam Phước",
            "Đà Nẵng"
        ],
        "busType": "GIƯỜNG"
    },

    {
        "departureTime": "2024-05-05:18:00",
        "departureLocation": "Da Lat",
        "arrivalTime": "2024-05-06:08:00",
        "arrivalLocation": "Da Nang",
        "fare": 4530000,
        "boardingPoints": [
            "Đông Hòa",
            "77 Lê Lợi",
            "Nguyễn Đức Cảnh",
            "An Nhơn",
            "207 Quy Nhơn"
        ],
        "droppingPoints": [
            "Diên Khánh",
            "Bến xe Quy Nhơn",
            "Quảng Ngãi",
            "Nam Phước",
            "Đà Nẵng"
        ],
        "busType": "LIMOUSINE"
    },

    {
        "departureTime": "2024-05-05:07:30",
        "departureLocation": "Da Lat",
        "arrivalTime": "2024-05-06:11:30",
        "arrivalLocation": "Khanh Hoa",
        "fare": 150000,
        "boardingPoints": [
            "Đà Lạt"
        ],
        "droppingPoints": [
            "Bến xe Phía Nam"
        ],
        "busType": "GHẾ"
    },

    {
        "departureTime": "2024-05-05:11:00",
        "departureLocation": "Da Lat",
        "arrivalTime": "2024-05-06:15:00",
        "arrivalLocation": "Khanh Hoa",
        "fare": 160000,
        "boardingPoints": [
            "Đà Lạt"
        ],
        "droppingPoints": [
            "Bến xe Phía Nam"
        ],
        "busType": "GIƯỜNG"
    },

    {
        "departureTime": "2024-05-05:17:00",
        "departureLocation": "Da Lat",
        "arrivalTime": "2024-05-06:21:00",
        "arrivalLocation": "Khanh Hoa",
        "fare": 170000,
        "boardingPoints": [
            "Đà Lạt"
        ],
        "droppingPoints": [
            "Bến xe Phía Nam"
        ],
        "busType": "LIMOUSINE"
    },

    {
        "departureTime": "2024-05-05:10:15",
        "departureLocation": "Da Nang",
        "arrivalTime": "2024-05-06:06:15",
        "arrivalLocation": "Ho Chi Minh City",
        "fare": 350000,
        "boardingPoints": [
            "Bến Lội",
            "Đông Hòa",
            "77 Lê Lợi",
            "Bến xe Quy Nhơn",
            "Diên Khánh",
            "Cam Ranh",
            "Nam Phước",
            "Bến xe Nam Tuy Hòa",
            "Sông Vệ",
            "Bến xe Phan Rang"
        ],
        "droppingPoints": [
            "Bến xe Ngã 4 Ga",
            "Bến xe Miền Tây"
        ],
        "busType": "GHẾ"
    },

    {
        "departureTime": "2024-05-05:14:05",
        "departureLocation": "Da Nang",
        "arrivalTime": "2024-05-06:10:05",
        "arrivalLocation": "Ho Chi Minh City",
        "fare": 410.000,
        "boardingPoints": [
            "Đà Nẵng"
        ],
        "droppingPoints": [
            "Bến xe Ngã 4 Ga",
            "Bến xe An Sương"
        ],
        "busType": "GIƯỜNG"
    },

    {
        "departureTime": "2024-05-05:19:00",
        "departureLocation": "Da Nang",
        "arrivalTime": "2024-05-06:15:00",
        "arrivalLocation": "Ho Chi Minh City",
        "fare": 450000,
        "boardingPoints": [
            "Bến Lội",
            "77 Lê Lợi",
            "Phú Quý",
            "Đà Nẵng",
            "Nam Phước",
            "Tam Kỳ",
            "Quảng Ngãi",
            "Sông Vệ",
            "Bến xe Quy Nhơn",
            "Bến xe Nam Tuy Hòa",
            "Diên Khánh",
            "Cam Ranh"
        ],
        "droppingPoints": [
            "Bến xe Phan Rang",
            "Bến xe Miền Đông Mới"
        ],
        "busType": "LIMOUSINE"
    },

    {
        "departureTime": "2024-05-05:19:00",
        "departureLocation": "Da Nang",
        "arrivalTime": "2024-05-06:05:00",
        "arrivalLocation": "Khanh Hoa",
        "fare": 250000,
        "boardingPoints": [
            "Đà Nẵng",
            "Bình Sơn",
            "Tịnh Hà",
            "Sông Vệ",
            "Bến xe Quy Nhơn"
        ],
        "droppingPoints": [
            "Nguyễn Đức Cảnh",
            "Bến xe phía bắc Nha Trang"
        ],
        "busType": "GHẾ"
    },

    {
        "departureTime": "2024-05-05:18:55",
        "departureLocation": "Da Nang",
        "arrivalTime": "2024-05-06:04:55",
        "arrivalLocation": "Khanh Hoa",
        "fare": 320.000,
        "boardingPoints": [
            "Quảng Ngãi",
            "Phú Quý",
            "Đà Nẵng"
        ],
        "droppingPoints": [
            "Nguyễn Đức Cảnh",
            "Cam Ranh"
        ],
        "busType": "GIƯỜNG"
    },

    {
        "departureTime": "2024-05-05:20:40",
        "departureLocation": "Da Nang",
        "arrivalTime": "2024-05-06:06:40",
        "arrivalLocation": "Khanh Hoa",
        "fare": 350.000,
        "boardingPoints": [
            "Đà Nẵng",
            "Bến xe Quy Nhơn"
        ],
        "droppingPoints": [
            "Nguyễn Đức Cảnh",
            "Bến xe phía bắc Nha Trang"
        ],
        "busType": "LIMOUSINE"
    },

    {
        "departureTime": "2024-05-05:13:30",
        "departureLocation": "Da Nang",
        "arrivalTime": "2024-05-06:03:30",
        "arrivalLocation": "Da Lat",
        "fare": 310.000,
        "boardingPoints": [
            "Đà Nẵng",
            "Vạn Giã",
            "Nguyễn Đức Cảnh",
            "An Nhơn",
            "Nam Phước",
            "Quảng Ngãi",
            "Bến xe Quy Nhơn"
        ],
        "droppingPoints": [
            "Diên Khánh",
            "Đà Lạt"
        ],
        "busType": "GHẾ"
    },

    {
        "departureTime": "2024-05-05:16:30",
        "departureLocation": "Da Nang",
        "arrivalTime": "2024-05-06:06:30",
        "arrivalLocation": "Da Lat",
        "fare": 360.000,
        "boardingPoints": [
            "Đà Nẵng",
            "Vạn Giã",
            "Nguyễn Đức Cảnh",
            "An Nhơn",
            "Nam Phước",
            "Quảng Ngãi",
            "Bến xe Quy Nhơn"
        ],
        "droppingPoints": [
            "Diên Khánh",
            "Đà Lạt"
        ],
        "busType": "GIƯỜNG"
    },

    {
        "departureTime": "2024-05-05:17:30",
        "departureLocation": "Da Nang",
        "arrivalTime": "2024-05-06:07:30",
        "arrivalLocation": "Da Lat",
        "fare": 410.000,
        "boardingPoints": [
            "Đà Nẵng",
            "Vạn Giã",
            "Nguyễn Đức Cảnh",
            "An Nhơn",
            "Nam Phước",
            "Quảng Ngãi",
            "Bến xe Quy Nhơn"
        ],
        "droppingPoints": [
            "Diên Khánh",
            "Đà Lạt"
        ],
        "busType": "LIMOUSINE"
    }
]);