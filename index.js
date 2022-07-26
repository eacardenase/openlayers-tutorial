let mapContainer = document.querySelector('#map');

let map = new ol.Map({
    target: mapContainer,
    layers: [
        new ol.layer.Group({
            title: 'Base map',
            layers: [
                new ol.layer.Tile({
                    title: 'Open Street Map',
                    visible: true,
                    type: 'base',
                    source: new ol.source.OSM(),
                }),
                new ol.layer.Tile({
                    title: 'Google Satelite',
                    visible: false,
                    type: 'base',
                    source: new ol.source.XYZ({
                        url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
                    }),
                }),
                new ol.layer.Tile({
                    title: 'Google Maps',
                    visible: false,
                    type: 'base',
                    source: new ol.source.XYZ({
                        url: 'http://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
                    }),
                }),
            ],
        }),
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-74.1109395117581, 4.689600831937455]),
        zoom: 15,
        maxZoom: 19,
        minZoom: 6,
    }),
});

const layerSwitcher = new ol.control.LayerSwitcher({
    tipLabel: 'Legend',
    groupSelectStyle: 'children',
});

map.addControl(layerSwitcher);
