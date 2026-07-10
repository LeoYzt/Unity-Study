// assets/charts.js - Unity Salary Chart
(function() {
    var style = getComputedStyle(document.documentElement);
    var accent = style.getPropertyValue('--accent').trim();
    var accent2 = style.getPropertyValue('--accent2').trim();
    var ink = style.getPropertyValue('--ink').trim();
    var muted = style.getPropertyValue('--muted').trim();
    var rule = style.getPropertyValue('--rule').trim();
    var bg2 = style.getPropertyValue('--bg2').trim();

    // --- Chart: Unity Salary Distribution ---
    var salaryChart = echarts.init(document.getElementById('salary-chart'), null, { renderer: 'svg' });

    var option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}: {c}%',
            appendToBody: true
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['0-5K', '5K-10K', '10K-20K', '20K-30K', '30K-50K', '50K+'],
            axisLabel: {
                color: ink
            },
            axisLine: {
                lineStyle: {
                    color: rule
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '占比 (%)',
            nameTextStyle: {
                color: muted
            },
            axisLabel: {
                color: muted
            },
            axisLine: {
                lineStyle: {
                    color: rule
                }
            },
            splitLine: {
                lineStyle: {
                    color: rule,
                    type: 'dashed'
                }
            }
        },
        series: [{
            name: '占比',
            type: 'bar',
            data: [
                { value: 8, itemStyle: { color: accent + '80' } },
                { value: 15.6, itemStyle: { color: accent + '99' } },
                { value: 32.8, itemStyle: { color: accent + 'cc' } },
                { value: 23.6, itemStyle: { color: accent } },
                { value: 15.2, itemStyle: { color: accent2 } },
                { value: 4.8, itemStyle: { color: accent2 + 'cc' } }
            ],
            label: {
                show: true,
                position: 'top',
                formatter: '{c}%',
                color: ink
            },
            barWidth: '60%'
        }],
        backgroundColor: 'transparent'
    };

    salaryChart.setOption(option);
    window.addEventListener('resize', function() {
        salaryChart.resize();
    });

})();
