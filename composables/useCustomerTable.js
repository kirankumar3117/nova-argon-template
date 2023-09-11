export const tableConfig = {
    allCustomers: [
        {
            label: "ID",
            width: "70",
            sortable: true,
            prop: "id"
        },
        {
            label: "Customer Name",
            width: "250",
            sortable: true,
            prop: "name"
        },
        {
            label: "Zone",
            width: "90",
            sortable: true,
            prop: "zone"
        },
        {
            label: "Email",
            width: "200",
            sortable: true,
            prop: "email"
        },
        {
            label: "Phone Number",
            width: "160",
            sortable: true,
            prop: "phone"
        },
        {
            label: "Latest Order",
            width: "200",
            sortable: true,
            prop: "latest_order"
        },
        {
            label: "Status",
            width: "100",
            sortable: true,
            prop: "status"
        },
        {
            label: "Distributor Name",
            width: "180",
            sortable: true,
            prop: "distributor_name"
        },
        {
            label: "Join Date",
            width: "120",
            sortable: true,
            prop: "join_date"
        }
    ],
    latestOrders: [
        {
            label: "ID",
            sortable: true,
            prop: "id"
        },
        {
            label: "Customer Name",
            sortable: true,
            prop: "name"
        },
        {
            label: "Zone",
            sortable: true,
            prop: "zone"
        },
        {
            label: "Distributor Name",
            sortable: true,
            prop: "distributor_name"
        },
        {
            label: "Order ID",
            sortable: true,
            prop: "order_id"
        },
        {
            label: "Product Order",
            sortable: true,
            prop: "product_order"
        },
        {
            label: "Order Date",
            sortable: true,
            prop: "order_date"
        },
        {
            label: "Total Amount",
            sortable: true,
            prop: "total_amount"
        },
        {
            label: "Status",
            sortable: true,
            prop: "order_status"
        }
    ],
    complaints:[
        {
            label: "Complaint No",
            sortable: true,
            prop: "complaint_no"
        },
        {
            label: "Date",
            sortable: true,
            prop: "date"
        },
        {
            label: "Customer Id",
            sortable: true,
            prop: "id"
        },
        {
            label: "Customer Name",
            sortable: true,
            prop: "name"
        },
        {
            label: "Zone",
            sortable: true,
            prop: "zone"
        },
        {
            label: "Order ID",
            sortable: true,
            prop: "order_id"
        },
        {
            label: "Type Of Company",
            sortable: true,
            prop: "type_of_complaint"
        },
        {
            label: "Status",
            sortable: true,
            prop: "complaint_status"
        },
        {
            label: "Case Priority",
            sortable: true,
            prop: "case_priority"
        },
    ]
};

export const customerAllOrdersConfig = [
    {
        label : "Order ID",
        sortable : true,
        prop : "order_id"
    },
    {
        label : "Order Date",
        sortable : true,
        prop : "order_date"
    },
    {
        label : "Product",
        sortable : true,
        prop : "product"
    },
    {
        label : "Status",
        sortable : true,
        prop : "status"
    },
    {
        label : "Order Total",
        sortable : true,
        prop : "order_total"
    },
    {
        label : "Payment Type",
        sortable : true,
        prop : "payment_type"
    }
];
export const customerCancelledOrderConfig = [
    {
        label : "Order ID",
        sortable : true,
        prop : "order_id"
    },
    {
        label : "Order Date",
        sortable : true,
        prop : "order_date"
    },
    {
        label : "Product",
        sortable : true,
        prop : "product"
    },
    {
        label : "Cancel Reason",
        sortable : true,
        prop : "cancel_reason"
    },
    {
        label : "Initiated By",
        sortable : true,
        prop : "initiated_by"
    },
    {
        label : "Penalty Amount",
        sortable : true,
        prop : "penalty_amount"
    }
];
export const customerComplaintsConfig = [
    {
        label : "Complaint No.",
        sortable: true,
        prop: "complaint_no"
    },
    {
        label : "Date",
        sortable: true,
        prop: "date"
    },
    {
        label : "Order ID",
        sortable: true,
        prop: "order_id"
    },
    {
        label : "Product",
        sortable: true,
        prop: "product"
    },
    {
        label : "Type Of Complaint",
        sortable: true,
        prop: "complaint_type"
    },
    {
        label : "Status",
        sortable: true,
        prop: "status"
    },
    {
        label : "Case Priority",
        sortable: true,
        prop: "case_priority"
    }
]

export const customerRefundBalanceConfig = [
   
    {
        label : "Order ID",
        sortable: true,
        prop: "order_id"
    },
    {
        label : "Product Return",
        sortable: true,
        prop: "product_return"
    },
    {
        label : "Product ID",
        sortable: true,
        prop: "product_id"
    },
    {
        label : "Return Date",
        sortable: true,
        prop: "return_date"
    },
    {
        label : "Return Amount",
        sortable: true,
        prop: "return_amount"
    },
    {
        label : "Total Balance",
        sortable: true,
        prop: "total_balance"
    }
]
export const customerDepositsConfig = [
   
    {
        label : "Cylinder No.",
        sortable: true,
        prop: "cylinder_no"
    },
    {
        label : "Cylinder Name",
        sortable: true,
        prop: "cylinder_name"
    },
    {
        label : "Deposit Method",
        sortable: true,
        prop: "deposit_method"
    },
    {
        label : "Deposit Date",
        sortable: true,
        prop: "deposit_date"
    },
    {
        label : "Deposit Amount",
        sortable: true,
        prop: "deposit_amount"
    },
    {
        label : "End Date",
        sortable: true,
        prop: "end_date"
    },
    {
        label : "Status",
        sortable: true,
        prop: "status"
    },
    {
        label : "Upgrade To",
        sortable: true,
        prop: "upgrade_to"
    },
    {
        label : "Upgrade_date",
        sortable: true,
        prop: "upgrade_date"
    }
]
export const customerDeposits = [
    {
        cylinder_no: "01",
        cylinder_name : "3kg|steel",
        deposit_method:"Cash",
        deposit_amount : "GHs 10",
        deposit_date : "2023/12/15",
        end_date : "2024/12/15",
        status : [
            {
            status : true,
            content : "Active"
            },
        ],
        upgrade_to : "6kg|Steel",
        upgrade_date : "2024/01/20"
    },
    {
        cylinder_no: "02",
        cylinder_name : "12kg|comp",
        deposit_method:"Cylinder",
        deposit_amount : "GHs 75",
        deposit_date : "2023/12/20",
        end_date : "2024/12/20",
        status : [
            {
            status : true,
            content : "Active"
            },
        ],
        upgrade_to : "",
        upgrade_date : ""
    },
    {
        cylinder_no: "03",
        cylinder_name : "6kg|comp",
        deposit_method:"Cash",
        deposit_amount : "GHs 60",
        deposit_date : "2023/12/15",
        end_date : "2024/12/15",
        status : [
            {
            status : false,
            content : "Inactive"
            },
        ],
        upgrade_to : "",
        upgrade_date : ""
    }
]
export const customerRefundBalance = [
    {
        order_id:'C101',
        product_return : "LPG regular",
        product_id:"P01",
        return_date:"2023/12/15",
        return_amount : "GHS 35",
        total_balance: "GHS 35"
    },
    {
        order_id:'C102',
        product_return : "2 burner gas cooker",
        product_id:"P02",
        return_date:"2023/12/20",
        return_amount : "GHS 175",
        total_balance: "GHS 210"
    },
    {
        order_id:'C102',
        product_return : "LPG hose",
        product_id:"P03",
        return_date:"2023/12/15",
        return_amount : "GHS 95",
        total_balance: "GHS 305"
    }
]

export const customerComplaints = [
    {
        complaint_no : "C101",
        date : "2020/12/15",
        order_id:"C1234",
        product:"3Kg|Steel",
        complaint_type : "Cylonder damage",
        status : "Resolved",
        case_priority : "High"
    },
    {
        complaint_no : "C102",
        date : "2020/12/15",
        order_id:"C1234",
        product:"6Kg|Steel",
        complaint_type : "Deley delivery",
        status : "Unresolved",
        case_priority : "Medium"
    },
    {
        complaint_no : "C103",
        date : "2020/12/15",
        order_id:"C1234",
        product:"3Kg|Steel",
        complaint_type : "Refund issue",
        status : "Unresolved",
        case_priority : "Loe"
    }
]
export const customerCancelledOrder = [
    {
        order_id: "101",
        order_date: "2023/12/15",
        product:"3kg|steel,6kg|steel(2)",
        cancel_reason:"Chnaged my mind",
        initiated_by:"Customer",
        penalty_amount:"Ghs 60"
    },
    {
        order_id: "102",
        order_date: "2023/12/15",
        product:"3kg|steel,6kg|steel(2)",
        cancel_reason:"Chnaged my mind",
        initiated_by:"Customer",
        penalty_amount:"Ghs 60"
    },
    {
        order_id: "103",
        order_date: "2023/12/15",
        product:"3kg|steel,6kg|steel(2)",
        cancel_reason:"Chnaged my mind",
        initiated_by:"Customer",
        penalty_amount:"Ghs 60"
    },
    {
        order_id: "104",
        order_date: "2023/12/15",
        product:"3kg|steel,6kg|steel(2)",
        cancel_reason:"Chnaged my mind",
        initiated_by:"Customer",
        penalty_amount:"Ghs 60"
    },
    {
        order_id: "105",
        order_date: "2023/12/15",
        product:"3kg|steel,6kg|steel(2)",
        cancel_reason:"Chnaged my mind",
        initiated_by:"Customer",
        penalty_amount:"Ghs 60"
    },
]
export const customerAllOrders = [
    {
        order_id: 101,
        order_date: "2023/12/15",
        product: "3kg|steel,6kg|steel(2)",
        status:[
            {
                order_status: false,
                content: "Pending"
            }
        ],
        order_total : "GHs 190",
        payment_type : "Bank card"
    },
    {
        order_id: 102,
        order_date: "2023/12/15",
        product: "3kg|steel,6kg|steel(2)",
        status:[
            {
                order_status: false,
                content: "Pending"
            }
        ],
        order_total : "GHs 190",
        payment_type : "Mobile money"
    },
    {
        order_id: 103,
        order_date: "2023/12/15",
        product: "3kg|steel,6kg|steel(2)",
        status:[
            {
                order_status: true,
                content: "Delivered"
            }
        ],
        order_total : "GHs 190",
        payment_type : "Bank card"
    },
    {
        order_id: 104,
        order_date: "2023/12/15",
        product: "3kg|steel,6kg|steel(2)",
        status:[
            {
                order_status: true,
                content: "Delivered"
            }
        ],
        order_total : "GHs 190",
        payment_type : "Bank card"
    },
    {
        order_id: 105,
        order_date: "2023/12/15",
        product: "3kg|steel,6kg|steel(2)",
        status:[
            {
                order_status: true,
                content: "Delivered"
            }
        ],
        order_total : "GHs 190",
        payment_type : "Bank card"
    }
]

export const complaints = [
    {
        id: "101",
        name: [
            {
                content: "Yaw Graham",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
        date: "2023/12/05",
        order_id: "AA1234",
        complaint_status:  "Resolved",
        complaint_no : "c101",
        type_of_complaint : "Delay delivery",
        case_priority : "High"
    },
    {
        id: "102",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        date: "2023/08/05",
        order_id: "AA1234",
        complaint_status:"Unresolved",
        complaint_no : "c102",
        type_of_complaint : "Delay delivery",
        case_priority : "High"
    },
    {
        id: "103",
        name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Western",
        date: "2023/08/05",
        order_id: "AA1234",
        complaint_status: "Resolved",
        complaint_no : "c103",
        type_of_complaint : "Delay delivery",
        case_priority : "High"
    },
    {
        id: "104",
        name: [
            {
                content: "Yaw Boafo",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        date: "2023/12/05",
        order_id: "AA1234",
        complaint_status: "Unresolves",
        complaint_no : "c104",
        type_of_complaint : "Delay delivery",
        case_priority : "High"
    },
]
export const latestOrders = [
    {
        id: "101",
        name: [
            {
                content: "Yaw Graham",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        product_order: "3kg|steel,6kg|steel(2)",
        distributor_name: [
            {
                content: "Yaw Graham",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
        order_date: "2023/12/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: true,
                content: "Delivered",
            }
        ],
    },
    {
        id: "102",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        product_order: "12kg|comp,6kg|comp(2)",
        distributor_name: [
            {
                content: "Derric Nwafor",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: true,
                content: "Delivered",
            }
        ],
    },
    {
        id: "103",
        name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Western",
        product_order: "3kg|steel(2),6kg|steel(2)",
        distributor_name: [
            {
                content: "KamalDev Sulley Graham",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "104",
        name: [
            {
                content: "Yaw Boafo",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        product_order: "3kg|steel,6kg|steel(2)",
        distributor_name: [
            {
                content: "Yaw Boafo",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        order_date: "2023/12/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "105",
        name: [
            {
                content: "Dziedzorm Doe",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        product_order: "12kg|comp,6kg|comp(2)",
        distributor_name: [
            {
                content: "Dziedzorm Doe",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "106",
        name: [
            {
                content: "Yaw Boafo",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Western",
        product_order: "3kg|steel(2),6kg|steel(2)",
        distributor_name: [
            {
                content: "Yaw Boafo",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "107",
        name: [
            {
                content: "Kamal Deen",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        product_order: "3kg|steel,6kg|steel(2)",
        distributor_name: [
            {
                content: "Kamal Deen",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        order_date: "2023/12/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "108",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        product_order: "12kg|comp,6kg|comp(2)",
        distributor_name: [
            {
                content: "Derric Nwafor",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "109",
        name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Western",
        product_order: "3kg|steel(2),6kg|steel(2)",
        distributor_name: [
            {
                content: "KamalDev Sulley Graham",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "110",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        product_order: "3kg|steel,6kg|steel(2)",
        distributor_name: [
            {
                content: "Derric Nwafor",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        order_date: "2023/12/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    }
]

export const allCustomers = [
    {
        id: "101",
        name: [
            {
                content: "Yaw Graham",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        email: "yawboafo@gmail.com",
        phone: "0277400000",
        latest_order: "3kg|steel,6kg|steel(2)",
        status: [
            {
                status: true,
                content: "Active",
            }
        ],
        distributor_name: [
            {
                content: "Yaw Graham",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        join_date: "2023/12/05",
    },
    {
        id: "102",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        email: "derricknwafor@gmail.com",
        phone: "0244400555",
        latest_order: "12kg|comp,6kg|comp(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Derric Nwafor",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "103",
        name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Western",
        email: "kamaldeen@gmail.com",
        phone: "0266404400",
        latest_order: "3kg|steel(2),6kg|steel(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "KamalDev Sulley Graham",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "104",
        name: [
            {
                content: "Yaw Boafo",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        email: "yawboafo@gmail.com",
        phone: "0277400000",
        latest_order: "3kg|steel,6kg|steel(2)",
        status: [
            {
                status: true,
                content: "Active",
            }
        ],
        distributor_name: [
            {
                content: "Yaw Boafo",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        join_date: "2023/12/05",
    },
    {
        id: "105",
        name: [
            {
                content: "Dziedzorm Doe",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        email: "derricknwafor@gmail.com",
        phone: "0244400555",
        latest_order: "12kg|comp,6kg|comp(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Dziedzorm Doe",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "106",
        name: [
            {
                content: "Yaw Boafo",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Western",
        email: "kamaldeen@gmail.com",
        phone: "0266404400",
        latest_order: "3kg|steel(2),6kg|steel(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Yaw Boafo",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "107",
        name: [
            {
                content: "Kamal Deen",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        email: "yawboafo@gmail.com",
        phone: "0277400000",
        latest_order: "3kg|steel,6kg|steel(2)",
        status: [
            {
                status: true,
                content: "Active",
            }
        ],
        distributor_name: [
            {
                content: "Kamal Deen",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        join_date: "2023/12/05",
    },
    {
        id: "108",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        email: "derricknwafor@gmail.com",
        phone: "0244400555",
        latest_order: "12kg|comp,6kg|comp(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Derric Nwafor",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "109",
        name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Western",
        email: "kamaldeen@gmail.com",
        phone: "0266404400",
        latest_order: "3kg|steel(2),6kg|steel(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "KamalDev Sulley Graham",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "110",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        zone: "Northen",
        email: "yawboafo@gmail.com",
        phone: "0277400000",
        latest_order: "3kg|steel,6kg|steel(2)",
        status: [
            {
                status: true,
                content: "Active",
            }
        ],
        distributor_name: [
            {
                content: "Derric Nwafor",
                url : "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            }
        ],
        join_date: "2023/12/05",
    }
]





export const getCustomersTableData = async (name) => {
    fetch(`api/${name}`)
        .then((res) => {
            // do something with responce
        })
        .catch((err) => {
            // do something with error
        });

    if (name == "customers") {
        sessionStorage.setItem("customers_data", JSON.stringify(allCustomers))
    } else if (name == "orders") {
        sessionStorage.setItem("customers_orders_data", JSON.stringify(latestOrders))
    } else if (name == "complaints"){
        sessionStorage.setItem("customer_complaints", JSON.stringify(complaints))
    }
}