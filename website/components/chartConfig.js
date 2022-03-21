export const Config = {
    plugins: {
        legend: {
            display: false,
        },
    },
    interaction: {
        intersect: false,
        mode: 'index',
    },
    //   animate in
    animation: {
        duration: 1,
    },
    responsive: true,
    //   show the x and y scales
    scales: {
        x: {
            beginAtZero: false,
            offset: true,
            display: false,
        },
        y: { 
            beginAtZero: true,
        },
    },
};