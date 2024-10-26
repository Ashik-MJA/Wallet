// header menu section
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hLink = document.querySelectorAll('#hLink');
// const faSolid = document.querySelector(".fa-bars");
const faSolid = document.querySelector("#header-bars");

hamburger.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    faSolid.classList.toggle('fa-xmark');
})
hLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        faSolid.classList.toggle('fa-xmark');
    })
})
//start body add section dom 





document.getElementById('move-div').addEventListener('mouseenter', () => {
    const hover = document.getElementById('leve-div');
    hover.style.backgroundColor = '#0095ff';
})
document.getElementById('move-div').addEventListener('mouseleave', () => {
    const hover = document.getElementById('leve-div');
    hover.style.backgroundColor = '';
})






// start chirt section


const chartConfig = {
    series: [
        {
            name: "Sales",
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
    ],
    chart: {
        type: "bar",
        height: 240,
        toolbar: {
            show: false,
        },
    },
    title: {
        show: "",
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["#28cb7c"],
    plotOptions: {
        bar: {
            columnWidth: "40%",
            borderRadius: 2,
        },
    },
    xaxis: {
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        labels: {
            style: {
                colors: "#28cb7c",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
            },
        },
        categories: [
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
    },
    yaxis: {
        labels: {
            style: {
                colors: "#28cb7c",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
            },
        },
    },
    grid: {
        show: true,
        borderColor: "#ddd",
        strokeDashArray: 5,
        xaxis: {
            lines: {
                show: true,
            },
        },
        padding: {
            top: 5,
            right: 20,
        },
    },
    fill: {
        opacity: 0.8,
    },
    tooltip: {
        theme: "dark",
    },
};

const chart = new ApexCharts(document.querySelector("#bar-chart"), chartConfig);

chart.render();




// nest chart

const lineConfig = {
    series: [
        {
            name: "Sales",
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
    ],
    chart: {
        type: "line",
        height: 240,
        toolbar: {
            show: false,
        },
    },
    title: {
        show: "",
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["#020617"],
    stroke: {
        lineCap: "round",
        curve: "smooth",
    },
    markers: {
        size: 0,
    },
    xaxis: {
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        labels: {
            style: {
                colors: "#616161",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
            },
        },
        categories: [
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
    },
    yaxis: {
        labels: {
            style: {
                colors: "#616161",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
            },
        },
    },
    grid: {
        show: true,
        borderColor: "#ddd",
        strokeDashArray: 5,
        xaxis: {
            lines: {
                show: true,
            },
        },
        padding: {
            top: 5,
            right: 20,
        },
    },
    fill: {
        opacity: 0.8,
    },
    tooltip: {
        theme: "dark",
    },
};

const lchart = new ApexCharts(document.querySelector("#line-chart"), lineConfig);

lchart.render();


// next
const cConfig = {
    series: [44, 55, 13, 43, 22],
    chart: {
        type: "pie",
        width: 280,
        height: 280,
        toolbar: {
            show: false,
        },
    },
    title: {
        show: "",
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["#021707", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
    legend: {
        show: false,
    },
};

const cchart = new ApexCharts(document.querySelector("#pie-chart"), cConfig);

cchart.render();