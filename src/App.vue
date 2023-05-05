/**
 * @description:  2019 - 09 - 19 22: 29: 28
 * @return {*}
 */
<template>
    <div id="app">
        <div ref="mapBox" style="width:100%;height:800px;margin:0 auto"></div>
    </div>
</template>
<script>
import echarts from "echarts";
import "echarts/map/js/china";
import jsonp from "jsonp";
// 指定图表的配置项和数据
const option = {
    title: {
        text: "疫情感染分布图",
        link: "https://github.com/1293930075/COVID-19", // 标题链接
        subtext: "点击此处跳转至Github仓库，数据来源与网络，仅供学习参考。",
        sublink: "https://github.com/1293930075/COVID-19" // 描述链接
    },
    tooltip: {
        trigger: "item"
    },
    series: [
        {
            //控制数据显示
            name: "确诊人数",
            type: "map", // 显示类型为地图
            map: "china", // 渲染中国地图
            zoom: 1.2, // 地图缩放大小
            roam: true, // 允许滚轮缩放
            label: {
                // 显示地图区域名称以及设置字体样式
                show: true,
                color: "#333",
                fontSize: 10
            },
            itemStyle: {
                // 控制地图区域线条颜色，和地区颜色
                areaColor: "#eee",
                borderColor: "#999"
            },
            emphasis: {
                // 控制鼠标划过（hover）改变地图颜色和字体颜色
                label: {
                    color: "white"
                },
                itemStyle: {
                    areaColor: "#00a4ff"
                }
            },
            data: [] //用来展示后台数据
        }
    ],
    toolbox: {
        // 显示下载
        show: true,
        orient: "vertical",
        left: "right",
        top: "bottom",
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
        }
    },
    visualMap: [
        {
            // 分段显示
            type: "piecewise", // 分段显示
            show: true,
            splitNumber: 6, //显示多少段，默认5段
            pieces: [
                // 每段范围显示
                { min: 10000, label: "> 10000 人" },
                { min: 1000, max: 9999, label: "1000 - 9999 人" },
                { min: 500, max: 999, label: "500 - 999 人" },
                { min: 100, max: 499, label: "100 - 499 人" },
                { min: 10, max: 99, label: "10 - 99 人" },
                { min: 1, max: 9, label: "1 - 9 人" }
            ],
            inRange: { 
                symbol: "rect", // 分段形状 矩形
                color: [ // 分段色值
                    "#faaa2a",
                    "#d43d1e",
                    "#b40200",
                    "#700000",
                    "#470102",
                    "#0d0100"
                ]
            },
            // 色块大小
            itemWidth: 20,
            itemHeight: 10
            // showLabel:false,
            // align:'right', //控制色块位置，默认left
        }
    ]
};
export default {
    name: "about",
    mounted() {
        this.getMapData();
        this.Myecharts = echarts.init(this.$refs.mapBox);
        this.Myecharts.setOption(option);
    },
    methods: {
        getMapData() {
            jsonp(
                "https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427",
                {},
                (err, data) => {
                    if (!err) {
                        let list = data.data.list.map(item => ({
                            name: item.name,
                            value: item.value
                        }));
                        option.series[0].data = list;
                        option.title.text = `${data.data.times}疫情感染分布图`;
                        this.Myecharts.setOption(option);
                    }
                }
            );
        }
    }
};
</script>


