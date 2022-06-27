var chart = echarts.init(document.getElementById('word_cloud'));

var option = {
    tooltip: {},
    series: [ {
        type: 'wordCloud',
        gridSize: 2,
        sizeRange: [12, 50],
        rotationRange: [-90, 90],
// The shape of the "cloud" to draw. Can be any polar equation represented as a
// callback function, or a keyword present. Available presents are circle (default),
// cardioid (apple or heart shape curve, the most known polar equation), diamond (
// alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.
// Shapes: pentagon, star, random-light, random-dark, circle, cardioid, diamond, triangle-forward, triangle, triangle-upright, apple, heart shape curve
        shape: 'apple',
        width: 290,
        height: 290,
        drawOutOfBound: true,
        textStyle: {
            normal: {
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [
            {
                name: '',
                value: 5000,
                textStyle: {
                    normal: {
                        color: 'black'
                    },
                    emphasis: {
                        color: 'red'
                    }
                }
            },
            {
                name: 'Strategy and Planning',
                value: 2000
            },
            {
                name: 'Project Management',
                value: 4000
            },
            {
                name: 'UI/UX',
                value: 2000
            },
            {
                name: 'Python',
                value: 2000
            },
            {
                name: 'HTML & CSS',
                value: 3000
            },
            {
                name: 'JavaScript',
                value: 2000
            },
            {
                name: 'Stakeholder Management',
                value: 2000
            },
            {
                name: 'App Development',
                value: 2000
            },
            {
                name: 'Web Development',
                value: 2000
            },
            {
                name: 'Data Analysis',
                value: 2000
            },
            {
                name: 'Marketing',
                value: 2000
            },
            {
                name: 'Product Lifecycle',
                value: 2000
            },
            {
                name: 'Design Thinking',
                value: 2000
            },
            {
                name: 'Design',
                value: 2000
            },
            {
                name: 'Market Research & Analysis',
                value: 2000
            },
            {
                name: 'Pattern Recognition',
                value: 1000
            },
            {
                name: 'Data Analytics',
                value: 1000
            },
            {
                name: 'APIs',
                value: 500
            },
            {
                name: 'Predictive Analytics',
                value: 500
            },
            {
                name: 'Predictive Modeling',
                value: 800
            },
            {
                name: 'Artificial Intelligence',
                value: 200
            },
            {
                name: 'Text Analytics',
                value: 200
            },
            {
                name: 'Data Mining',
                value: 150
            },
            {
                name: 'Data Science',
                value: 150
            },
        ]
    } ]
};

chart.setOption(option);

window.onresize = chart.resize;