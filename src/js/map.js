/**
 * Created by yerongtao on 2017/5/8.
 */

//百度地图API功能
function loadMapJScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=" + "yV9EsEcuE2xXePewoWUoZbIuLFSYpwCb" + "&callback=init";
    document.body.appendChild(script);
}
function init() {
    var map = new BMap.Map("c-address-map");            // 创建Map实例
    var point = new BMap.Point(116.342685,39.981609); // 创建点坐标
    map.centerAndZoom(point,15);                 //初始化地图,设置中心点坐标和地图级别
    map.addOverlay(new BMap.Marker(point));      //启用标记
    map.enableScrollWheelZoom();                 //启用滚轮放大缩小
}
