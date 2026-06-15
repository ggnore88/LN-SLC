var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Australialatest_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://api.nearmap.com/wms/v1/latest/apikey/Y2UzN2ExYTQtMDUxZC00MDcxLTllNTctOGQ2NWY2YzY0MDli",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Nearmap/Nearmap/Australia",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Australia latest',
                            popuplayertitle: 'Australia latest',
                            type: 'base',
                            opacity: 0.600000,
                            
                            
                          });
              wms_layers.push([lyr_Australialatest_2, 0]);
var format_AdvatelWirelessPtyLtdcombinedserviceareas_3 = new ol.format.GeoJSON();
var features_AdvatelWirelessPtyLtdcombinedserviceareas_3 = format_AdvatelWirelessPtyLtdcombinedserviceareas_3.readFeatures(json_AdvatelWirelessPtyLtdcombinedserviceareas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdvatelWirelessPtyLtdcombinedserviceareas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdvatelWirelessPtyLtdcombinedserviceareas_3.addFeatures(features_AdvatelWirelessPtyLtdcombinedserviceareas_3);
var lyr_AdvatelWirelessPtyLtdcombinedserviceareas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdvatelWirelessPtyLtdcombinedserviceareas_3, 
                style: style_AdvatelWirelessPtyLtdcombinedserviceareas_3,
                popuplayertitle: 'Advatel Wireless Pty Ltd - combined service areas',
                interactive: true,
                title: '<img src="styles/legend/AdvatelWirelessPtyLtdcombinedserviceareas_3.png" /> Advatel Wireless Pty Ltd - combined service areas'
            });
var format_AppliedITSystemsPtyLtdCombinedserviceareas_4 = new ol.format.GeoJSON();
var features_AppliedITSystemsPtyLtdCombinedserviceareas_4 = format_AppliedITSystemsPtyLtdCombinedserviceareas_4.readFeatures(json_AppliedITSystemsPtyLtdCombinedserviceareas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AppliedITSystemsPtyLtdCombinedserviceareas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AppliedITSystemsPtyLtdCombinedserviceareas_4.addFeatures(features_AppliedITSystemsPtyLtdCombinedserviceareas_4);
var lyr_AppliedITSystemsPtyLtdCombinedserviceareas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AppliedITSystemsPtyLtdCombinedserviceareas_4, 
                style: style_AppliedITSystemsPtyLtdCombinedserviceareas_4,
                popuplayertitle: 'Applied IT Systems Pty Ltd - Combined service areas',
                interactive: true,
                title: '<img src="styles/legend/AppliedITSystemsPtyLtdCombinedserviceareas_4.png" /> Applied IT Systems Pty Ltd - Combined service areas'
            });
var format_ASNTelecomPtyLtdCombinedServiceAreas_5 = new ol.format.GeoJSON();
var features_ASNTelecomPtyLtdCombinedServiceAreas_5 = format_ASNTelecomPtyLtdCombinedServiceAreas_5.readFeatures(json_ASNTelecomPtyLtdCombinedServiceAreas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASNTelecomPtyLtdCombinedServiceAreas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASNTelecomPtyLtdCombinedServiceAreas_5.addFeatures(features_ASNTelecomPtyLtdCombinedServiceAreas_5);
var lyr_ASNTelecomPtyLtdCombinedServiceAreas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASNTelecomPtyLtdCombinedServiceAreas_5, 
                style: style_ASNTelecomPtyLtdCombinedServiceAreas_5,
                popuplayertitle: 'ASN Telecom Pty Ltd Combined Service Areas',
                interactive: true,
                title: '<img src="styles/legend/ASNTelecomPtyLtdCombinedServiceAreas_5.png" /> ASN Telecom Pty Ltd Combined Service Areas'
            });
var format_AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6 = new ol.format.GeoJSON();
var features_AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6 = format_AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6.readFeatures(json_AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6.addFeatures(features_AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6);
var lyr_AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6, 
                style: style_AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6,
                popuplayertitle: 'Australian Communications Group Pty Ltd - Combined service areas',
                interactive: true,
                title: '<img src="styles/legend/AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6.png" /> Australian Communications Group Pty Ltd - Combined service areas'
            });
var format_CipherTelPtyLtdcombinedserviceareas_7 = new ol.format.GeoJSON();
var features_CipherTelPtyLtdcombinedserviceareas_7 = format_CipherTelPtyLtdcombinedserviceareas_7.readFeatures(json_CipherTelPtyLtdcombinedserviceareas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CipherTelPtyLtdcombinedserviceareas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CipherTelPtyLtdcombinedserviceareas_7.addFeatures(features_CipherTelPtyLtdcombinedserviceareas_7);
var lyr_CipherTelPtyLtdcombinedserviceareas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CipherTelPtyLtdcombinedserviceareas_7, 
                style: style_CipherTelPtyLtdcombinedserviceareas_7,
                popuplayertitle: 'CipherTel Pty Ltd - combined service areas',
                interactive: true,
                title: '<img src="styles/legend/CipherTelPtyLtdcombinedserviceareas_7.png" /> CipherTel Pty Ltd - combined service areas'
            });
var format_CNTCorpPtyLtdCombinedServiceAreas_8 = new ol.format.GeoJSON();
var features_CNTCorpPtyLtdCombinedServiceAreas_8 = format_CNTCorpPtyLtdCombinedServiceAreas_8.readFeatures(json_CNTCorpPtyLtdCombinedServiceAreas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CNTCorpPtyLtdCombinedServiceAreas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CNTCorpPtyLtdCombinedServiceAreas_8.addFeatures(features_CNTCorpPtyLtdCombinedServiceAreas_8);
var lyr_CNTCorpPtyLtdCombinedServiceAreas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CNTCorpPtyLtdCombinedServiceAreas_8, 
                style: style_CNTCorpPtyLtdCombinedServiceAreas_8,
                popuplayertitle: 'CNTCorp Pty Ltd Combined Service Areas',
                interactive: true,
                title: '<img src="styles/legend/CNTCorpPtyLtdCombinedServiceAreas_8.png" /> CNTCorp Pty Ltd Combined Service Areas'
            });
var format_CommscoPtyLtdCombinedServiceAreas_9 = new ol.format.GeoJSON();
var features_CommscoPtyLtdCombinedServiceAreas_9 = format_CommscoPtyLtdCombinedServiceAreas_9.readFeatures(json_CommscoPtyLtdCombinedServiceAreas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommscoPtyLtdCombinedServiceAreas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommscoPtyLtdCombinedServiceAreas_9.addFeatures(features_CommscoPtyLtdCombinedServiceAreas_9);
var lyr_CommscoPtyLtdCombinedServiceAreas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommscoPtyLtdCombinedServiceAreas_9, 
                style: style_CommscoPtyLtdCombinedServiceAreas_9,
                popuplayertitle: 'Commsco Pty Ltd Combined Service Areas',
                interactive: true,
                title: '<img src="styles/legend/CommscoPtyLtdCombinedServiceAreas_9.png" /> Commsco Pty Ltd Combined Service Areas'
            });
var format_CommSolHoldingsPtyLtdcombinedserviceareas_10 = new ol.format.GeoJSON();
var features_CommSolHoldingsPtyLtdcombinedserviceareas_10 = format_CommSolHoldingsPtyLtdcombinedserviceareas_10.readFeatures(json_CommSolHoldingsPtyLtdcombinedserviceareas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommSolHoldingsPtyLtdcombinedserviceareas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommSolHoldingsPtyLtdcombinedserviceareas_10.addFeatures(features_CommSolHoldingsPtyLtdcombinedserviceareas_10);
var lyr_CommSolHoldingsPtyLtdcombinedserviceareas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommSolHoldingsPtyLtdcombinedserviceareas_10, 
                style: style_CommSolHoldingsPtyLtdcombinedserviceareas_10,
                popuplayertitle: 'CommSol Holdings Pty Ltd - combined service areas',
                interactive: true,
                title: '<img src="styles/legend/CommSolHoldingsPtyLtdcombinedserviceareas_10.png" /> CommSol Holdings Pty Ltd - combined service areas'
            });
var format_CoreFibreNetworksPtyLtdCombinedserviceareas_11 = new ol.format.GeoJSON();
var features_CoreFibreNetworksPtyLtdCombinedserviceareas_11 = format_CoreFibreNetworksPtyLtdCombinedserviceareas_11.readFeatures(json_CoreFibreNetworksPtyLtdCombinedserviceareas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoreFibreNetworksPtyLtdCombinedserviceareas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoreFibreNetworksPtyLtdCombinedserviceareas_11.addFeatures(features_CoreFibreNetworksPtyLtdCombinedserviceareas_11);
var lyr_CoreFibreNetworksPtyLtdCombinedserviceareas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoreFibreNetworksPtyLtdCombinedserviceareas_11, 
                style: style_CoreFibreNetworksPtyLtdCombinedserviceareas_11,
                popuplayertitle: 'Core Fibre Networks Pty Ltd - Combined service areas',
                interactive: true,
                title: '<img src="styles/legend/CoreFibreNetworksPtyLtdCombinedserviceareas_11.png" /> Core Fibre Networks Pty Ltd - Combined service areas'
            });
var format_DGTekPtyLtdCombinedserviceareas_12 = new ol.format.GeoJSON();
var features_DGTekPtyLtdCombinedserviceareas_12 = format_DGTekPtyLtdCombinedserviceareas_12.readFeatures(json_DGTekPtyLtdCombinedserviceareas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DGTekPtyLtdCombinedserviceareas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGTekPtyLtdCombinedserviceareas_12.addFeatures(features_DGTekPtyLtdCombinedserviceareas_12);
var lyr_DGTekPtyLtdCombinedserviceareas_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DGTekPtyLtdCombinedserviceareas_12, 
                style: style_DGTekPtyLtdCombinedserviceareas_12,
                popuplayertitle: 'DGTek Pty Ltd - Combined service areas',
                interactive: true,
                title: '<img src="styles/legend/DGTekPtyLtdCombinedserviceareas_12.png" /> DGTek Pty Ltd - Combined service areas'
            });
var format_FiberAssetManagementPtyLtdcombinedserviceareas_13 = new ol.format.GeoJSON();
var features_FiberAssetManagementPtyLtdcombinedserviceareas_13 = format_FiberAssetManagementPtyLtdcombinedserviceareas_13.readFeatures(json_FiberAssetManagementPtyLtdcombinedserviceareas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FiberAssetManagementPtyLtdcombinedserviceareas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FiberAssetManagementPtyLtdcombinedserviceareas_13.addFeatures(features_FiberAssetManagementPtyLtdcombinedserviceareas_13);
var lyr_FiberAssetManagementPtyLtdcombinedserviceareas_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FiberAssetManagementPtyLtdcombinedserviceareas_13, 
                style: style_FiberAssetManagementPtyLtdcombinedserviceareas_13,
                popuplayertitle: 'Fiber Asset Management Pty Ltd - combined service areas',
                interactive: true,
                title: '<img src="styles/legend/FiberAssetManagementPtyLtdcombinedserviceareas_13.png" /> Fiber Asset Management Pty Ltd - combined service areas'
            });
var format_FibossPtyLtdCombinedserviceareas_14 = new ol.format.GeoJSON();
var features_FibossPtyLtdCombinedserviceareas_14 = format_FibossPtyLtdCombinedserviceareas_14.readFeatures(json_FibossPtyLtdCombinedserviceareas_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FibossPtyLtdCombinedserviceareas_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FibossPtyLtdCombinedserviceareas_14.addFeatures(features_FibossPtyLtdCombinedserviceareas_14);
var lyr_FibossPtyLtdCombinedserviceareas_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FibossPtyLtdCombinedserviceareas_14, 
                style: style_FibossPtyLtdCombinedserviceareas_14,
                popuplayertitle: 'Fiboss Pty Ltd - Combined service areas',
                interactive: true,
                title: '<img src="styles/legend/FibossPtyLtdCombinedserviceareas_14.png" /> Fiboss Pty Ltd - Combined service areas'
            });
var format_FrontierNetworksPtyLtdCombinedareas_15 = new ol.format.GeoJSON();
var features_FrontierNetworksPtyLtdCombinedareas_15 = format_FrontierNetworksPtyLtdCombinedareas_15.readFeatures(json_FrontierNetworksPtyLtdCombinedareas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrontierNetworksPtyLtdCombinedareas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrontierNetworksPtyLtdCombinedareas_15.addFeatures(features_FrontierNetworksPtyLtdCombinedareas_15);
var lyr_FrontierNetworksPtyLtdCombinedareas_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrontierNetworksPtyLtdCombinedareas_15, 
                style: style_FrontierNetworksPtyLtdCombinedareas_15,
                popuplayertitle: 'Frontier Networks Pty Ltd - Combined areas',
                interactive: true,
                title: '<img src="styles/legend/FrontierNetworksPtyLtdCombinedareas_15.png" /> Frontier Networks Pty Ltd - Combined areas'
            });
var format_GtelecomPtyLtdCombinedServiceAreas_16 = new ol.format.GeoJSON();
var features_GtelecomPtyLtdCombinedServiceAreas_16 = format_GtelecomPtyLtdCombinedServiceAreas_16.readFeatures(json_GtelecomPtyLtdCombinedServiceAreas_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GtelecomPtyLtdCombinedServiceAreas_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GtelecomPtyLtdCombinedServiceAreas_16.addFeatures(features_GtelecomPtyLtdCombinedServiceAreas_16);
var lyr_GtelecomPtyLtdCombinedServiceAreas_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GtelecomPtyLtdCombinedServiceAreas_16, 
                style: style_GtelecomPtyLtdCombinedServiceAreas_16,
                popuplayertitle: 'Gtelecom Pty Ltd Combined Service Areas',
                interactive: true,
                title: '<img src="styles/legend/GtelecomPtyLtdCombinedServiceAreas_16.png" /> Gtelecom Pty Ltd Combined Service Areas'
            });
var format_InterphonePtyLtdCombinedServiceAreas_17 = new ol.format.GeoJSON();
var features_InterphonePtyLtdCombinedServiceAreas_17 = format_InterphonePtyLtdCombinedServiceAreas_17.readFeatures(json_InterphonePtyLtdCombinedServiceAreas_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InterphonePtyLtdCombinedServiceAreas_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InterphonePtyLtdCombinedServiceAreas_17.addFeatures(features_InterphonePtyLtdCombinedServiceAreas_17);
var lyr_InterphonePtyLtdCombinedServiceAreas_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InterphonePtyLtdCombinedServiceAreas_17, 
                style: style_InterphonePtyLtdCombinedServiceAreas_17,
                popuplayertitle: 'Interphone Pty Ltd Combined Service Areas',
                interactive: true,
                title: '<img src="styles/legend/InterphonePtyLtdCombinedServiceAreas_17.png" /> Interphone Pty Ltd Combined Service Areas'
            });
var format_LegionTelecomPtyLtdCombinedServiceAreas_18 = new ol.format.GeoJSON();
var features_LegionTelecomPtyLtdCombinedServiceAreas_18 = format_LegionTelecomPtyLtdCombinedServiceAreas_18.readFeatures(json_LegionTelecomPtyLtdCombinedServiceAreas_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LegionTelecomPtyLtdCombinedServiceAreas_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LegionTelecomPtyLtdCombinedServiceAreas_18.addFeatures(features_LegionTelecomPtyLtdCombinedServiceAreas_18);
var lyr_LegionTelecomPtyLtdCombinedServiceAreas_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LegionTelecomPtyLtdCombinedServiceAreas_18, 
                style: style_LegionTelecomPtyLtdCombinedServiceAreas_18,
                popuplayertitle: 'Legion Telecom Pty Ltd Combined Service Areas',
                interactive: true,
                title: '<img src="styles/legend/LegionTelecomPtyLtdCombinedServiceAreas_18.png" /> Legion Telecom Pty Ltd Combined Service Areas'
            });
var format_MyportPtyLtdCombinedserviceareas_19 = new ol.format.GeoJSON();
var features_MyportPtyLtdCombinedserviceareas_19 = format_MyportPtyLtdCombinedserviceareas_19.readFeatures(json_MyportPtyLtdCombinedserviceareas_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MyportPtyLtdCombinedserviceareas_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MyportPtyLtdCombinedserviceareas_19.addFeatures(features_MyportPtyLtdCombinedserviceareas_19);
var lyr_MyportPtyLtdCombinedserviceareas_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MyportPtyLtdCombinedserviceareas_19, 
                style: style_MyportPtyLtdCombinedserviceareas_19,
                popuplayertitle: 'Myport Pty Ltd - Combined service areas',
                interactive: true,
                title: '<img src="styles/legend/MyportPtyLtdCombinedserviceareas_19.png" /> Myport Pty Ltd - Combined service areas'
            });
var format_NetbayFreeWiFiPtyLtdCombinedserviceareas_20 = new ol.format.GeoJSON();
var features_NetbayFreeWiFiPtyLtdCombinedserviceareas_20 = format_NetbayFreeWiFiPtyLtdCombinedserviceareas_20.readFeatures(json_NetbayFreeWiFiPtyLtdCombinedserviceareas_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NetbayFreeWiFiPtyLtdCombinedserviceareas_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NetbayFreeWiFiPtyLtdCombinedserviceareas_20.addFeatures(features_NetbayFreeWiFiPtyLtdCombinedserviceareas_20);
var lyr_NetbayFreeWiFiPtyLtdCombinedserviceareas_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NetbayFreeWiFiPtyLtdCombinedserviceareas_20, 
                style: style_NetbayFreeWiFiPtyLtdCombinedserviceareas_20,
                popuplayertitle: 'Netbay Free WiFi Pty Ltd - Combined service areas',
                interactive: true,
                title: '<img src="styles/legend/NetbayFreeWiFiPtyLtdCombinedserviceareas_20.png" /> Netbay Free WiFi Pty Ltd - Combined service areas'
            });
var format_OMNIconnectPtyLtdcombinedserviceareas_21 = new ol.format.GeoJSON();
var features_OMNIconnectPtyLtdcombinedserviceareas_21 = format_OMNIconnectPtyLtdcombinedserviceareas_21.readFeatures(json_OMNIconnectPtyLtdcombinedserviceareas_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OMNIconnectPtyLtdcombinedserviceareas_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OMNIconnectPtyLtdcombinedserviceareas_21.addFeatures(features_OMNIconnectPtyLtdcombinedserviceareas_21);
var lyr_OMNIconnectPtyLtdcombinedserviceareas_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OMNIconnectPtyLtdcombinedserviceareas_21, 
                style: style_OMNIconnectPtyLtdcombinedserviceareas_21,
                popuplayertitle: 'OMNIconnect Pty Ltd - combined service areas',
                interactive: true,
                title: '<img src="styles/legend/OMNIconnectPtyLtdcombinedserviceareas_21.png" /> OMNIconnect Pty Ltd - combined service areas'
            });
var format_PipeNetworksPtyLtdCombinedserviceareas_22 = new ol.format.GeoJSON();
var features_PipeNetworksPtyLtdCombinedserviceareas_22 = format_PipeNetworksPtyLtdCombinedserviceareas_22.readFeatures(json_PipeNetworksPtyLtdCombinedserviceareas_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PipeNetworksPtyLtdCombinedserviceareas_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PipeNetworksPtyLtdCombinedserviceareas_22.addFeatures(features_PipeNetworksPtyLtdCombinedserviceareas_22);
var lyr_PipeNetworksPtyLtdCombinedserviceareas_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PipeNetworksPtyLtdCombinedserviceareas_22, 
                style: style_PipeNetworksPtyLtdCombinedserviceareas_22,
                popuplayertitle: 'Pipe Networks Pty Ltd - Combined service areas',
                interactive: true,
                title: '<img src="styles/legend/PipeNetworksPtyLtdCombinedserviceareas_22.png" /> Pipe Networks Pty Ltd - Combined service areas'
            });
var format_RealWorldNetworksPtyLtdCombinedserviceareas_23 = new ol.format.GeoJSON();
var features_RealWorldNetworksPtyLtdCombinedserviceareas_23 = format_RealWorldNetworksPtyLtdCombinedserviceareas_23.readFeatures(json_RealWorldNetworksPtyLtdCombinedserviceareas_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RealWorldNetworksPtyLtdCombinedserviceareas_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RealWorldNetworksPtyLtdCombinedserviceareas_23.addFeatures(features_RealWorldNetworksPtyLtdCombinedserviceareas_23);
var lyr_RealWorldNetworksPtyLtdCombinedserviceareas_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RealWorldNetworksPtyLtdCombinedserviceareas_23, 
                style: style_RealWorldNetworksPtyLtdCombinedserviceareas_23,
                popuplayertitle: 'Real World Networks Pty Ltd - Combined service areas',
                interactive: true,
                title: '<img src="styles/legend/RealWorldNetworksPtyLtdCombinedserviceareas_23.png" /> Real World Networks Pty Ltd - Combined service areas'
            });
var format_ReddenetPtyLtdCombinedserviceareas_24 = new ol.format.GeoJSON();
var features_ReddenetPtyLtdCombinedserviceareas_24 = format_ReddenetPtyLtdCombinedserviceareas_24.readFeatures(json_ReddenetPtyLtdCombinedserviceareas_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReddenetPtyLtdCombinedserviceareas_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReddenetPtyLtdCombinedserviceareas_24.addFeatures(features_ReddenetPtyLtdCombinedserviceareas_24);
var lyr_ReddenetPtyLtdCombinedserviceareas_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReddenetPtyLtdCombinedserviceareas_24, 
                style: style_ReddenetPtyLtdCombinedserviceareas_24,
                popuplayertitle: 'Reddenet Pty Ltd - Combined service areas',
                interactive: true,
                title: '<img src="styles/legend/ReddenetPtyLtdCombinedserviceareas_24.png" /> Reddenet Pty Ltd - Combined service areas'
            });
var format_SensiaPtyLtdCombinedServiceAreas_25 = new ol.format.GeoJSON();
var features_SensiaPtyLtdCombinedServiceAreas_25 = format_SensiaPtyLtdCombinedServiceAreas_25.readFeatures(json_SensiaPtyLtdCombinedServiceAreas_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SensiaPtyLtdCombinedServiceAreas_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SensiaPtyLtdCombinedServiceAreas_25.addFeatures(features_SensiaPtyLtdCombinedServiceAreas_25);
var lyr_SensiaPtyLtdCombinedServiceAreas_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SensiaPtyLtdCombinedServiceAreas_25, 
                style: style_SensiaPtyLtdCombinedServiceAreas_25,
                popuplayertitle: 'Sensia Pty Ltd Combined Service Areas',
                interactive: true,
                title: '<img src="styles/legend/SensiaPtyLtdCombinedServiceAreas_25.png" /> Sensia Pty Ltd Combined Service Areas'
            });
var format_TaipanNetworxPtyLtdcombinedareas_26 = new ol.format.GeoJSON();
var features_TaipanNetworxPtyLtdcombinedareas_26 = format_TaipanNetworxPtyLtdcombinedareas_26.readFeatures(json_TaipanNetworxPtyLtdcombinedareas_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TaipanNetworxPtyLtdcombinedareas_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TaipanNetworxPtyLtdcombinedareas_26.addFeatures(features_TaipanNetworxPtyLtdcombinedareas_26);
var lyr_TaipanNetworxPtyLtdcombinedareas_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TaipanNetworxPtyLtdcombinedareas_26, 
                style: style_TaipanNetworxPtyLtdcombinedareas_26,
                popuplayertitle: 'Taipan Networx Pty Ltd - combined areas',
                interactive: true,
                title: '<img src="styles/legend/TaipanNetworxPtyLtdcombinedareas_26.png" /> Taipan Networx Pty Ltd - combined areas'
            });
var format_TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27 = new ol.format.GeoJSON();
var features_TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27 = format_TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27.readFeatures(json_TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27.addFeatures(features_TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27);
var lyr_TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27, 
                style: style_TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27,
                popuplayertitle: 'Transact Capital Communications Pty Ltd - Combined service areas',
                interactive: true,
                title: '<img src="styles/legend/TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27.png" /> Transact Capital Communications Pty Ltd - Combined service areas'
            });
var format_VineNetworksPtyLtdCombinedserviceareas_28 = new ol.format.GeoJSON();
var features_VineNetworksPtyLtdCombinedserviceareas_28 = format_VineNetworksPtyLtdCombinedserviceareas_28.readFeatures(json_VineNetworksPtyLtdCombinedserviceareas_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VineNetworksPtyLtdCombinedserviceareas_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VineNetworksPtyLtdCombinedserviceareas_28.addFeatures(features_VineNetworksPtyLtdCombinedserviceareas_28);
var lyr_VineNetworksPtyLtdCombinedserviceareas_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VineNetworksPtyLtdCombinedserviceareas_28, 
                style: style_VineNetworksPtyLtdCombinedserviceareas_28,
                popuplayertitle: 'Vine Networks Pty Ltd - Combined service areas',
                interactive: true,
                title: '<img src="styles/legend/VineNetworksPtyLtdCombinedserviceareas_28.png" /> Vine Networks Pty Ltd - Combined service areas'
            });
var format_VocusFibrePtyLtdCombinedareas_29 = new ol.format.GeoJSON();
var features_VocusFibrePtyLtdCombinedareas_29 = format_VocusFibrePtyLtdCombinedareas_29.readFeatures(json_VocusFibrePtyLtdCombinedareas_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VocusFibrePtyLtdCombinedareas_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VocusFibrePtyLtdCombinedareas_29.addFeatures(features_VocusFibrePtyLtdCombinedareas_29);
var lyr_VocusFibrePtyLtdCombinedareas_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VocusFibrePtyLtdCombinedareas_29, 
                style: style_VocusFibrePtyLtdCombinedareas_29,
                popuplayertitle: 'Vocus Fibre Pty Ltd - Combined areas',
                interactive: true,
                title: '<img src="styles/legend/VocusFibrePtyLtdCombinedareas_29.png" /> Vocus Fibre Pty Ltd - Combined areas'
            });
var format_VostroNetAustraliaPtyLtdCombinedserviceareas_30 = new ol.format.GeoJSON();
var features_VostroNetAustraliaPtyLtdCombinedserviceareas_30 = format_VostroNetAustraliaPtyLtdCombinedserviceareas_30.readFeatures(json_VostroNetAustraliaPtyLtdCombinedserviceareas_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VostroNetAustraliaPtyLtdCombinedserviceareas_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VostroNetAustraliaPtyLtdCombinedserviceareas_30.addFeatures(features_VostroNetAustraliaPtyLtdCombinedserviceareas_30);
var lyr_VostroNetAustraliaPtyLtdCombinedserviceareas_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VostroNetAustraliaPtyLtdCombinedserviceareas_30, 
                style: style_VostroNetAustraliaPtyLtdCombinedserviceareas_30,
                popuplayertitle: 'VostroNet (Australia) Pty Ltd - Combined service areas',
                interactive: true,
                title: '<img src="styles/legend/VostroNetAustraliaPtyLtdCombinedserviceareas_30.png" /> VostroNet (Australia) Pty Ltd - Combined service areas'
            });
var format_LBNCoPtyLtdCombinedServiceAreas_31 = new ol.format.GeoJSON();
var features_LBNCoPtyLtdCombinedServiceAreas_31 = format_LBNCoPtyLtdCombinedServiceAreas_31.readFeatures(json_LBNCoPtyLtdCombinedServiceAreas_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LBNCoPtyLtdCombinedServiceAreas_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBNCoPtyLtdCombinedServiceAreas_31.addFeatures(features_LBNCoPtyLtdCombinedServiceAreas_31);
var lyr_LBNCoPtyLtdCombinedServiceAreas_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LBNCoPtyLtdCombinedServiceAreas_31, 
                style: style_LBNCoPtyLtdCombinedServiceAreas_31,
                popuplayertitle: 'LBN Co Pty Ltd Combined Service Areas',
                interactive: true,
                title: '<img src="styles/legend/LBNCoPtyLtdCombinedServiceAreas_31.png" /> LBN Co Pty Ltd Combined Service Areas'
            });
var format_OPENetworksPtyLtdcombinedserviceareas_32 = new ol.format.GeoJSON();
var features_OPENetworksPtyLtdcombinedserviceareas_32 = format_OPENetworksPtyLtdcombinedserviceareas_32.readFeatures(json_OPENetworksPtyLtdcombinedserviceareas_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OPENetworksPtyLtdcombinedserviceareas_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OPENetworksPtyLtdcombinedserviceareas_32.addFeatures(features_OPENetworksPtyLtdcombinedserviceareas_32);
var lyr_OPENetworksPtyLtdcombinedserviceareas_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OPENetworksPtyLtdcombinedserviceareas_32, 
                style: style_OPENetworksPtyLtdcombinedserviceareas_32,
                popuplayertitle: 'OPENetworks Pty Ltd - combined service areas',
                interactive: true,
                title: '<img src="styles/legend/OPENetworksPtyLtdcombinedserviceareas_32.png" /> OPENetworks Pty Ltd - combined service areas'
            });
var format_TelstraLimitedCombinedserviceareas_33 = new ol.format.GeoJSON();
var features_TelstraLimitedCombinedserviceareas_33 = format_TelstraLimitedCombinedserviceareas_33.readFeatures(json_TelstraLimitedCombinedserviceareas_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TelstraLimitedCombinedserviceareas_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TelstraLimitedCombinedserviceareas_33.addFeatures(features_TelstraLimitedCombinedserviceareas_33);
var lyr_TelstraLimitedCombinedserviceareas_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TelstraLimitedCombinedserviceareas_33, 
                style: style_TelstraLimitedCombinedserviceareas_33,
                popuplayertitle: 'Telstra Limited - Combined service areas',
                interactive: true,
                title: '<img src="styles/legend/TelstraLimitedCombinedserviceareas_33.png" /> Telstra Limited - Combined service areas'
            });
var format_OptiCommLtdCombinedServiceAreas_34 = new ol.format.GeoJSON();
var features_OptiCommLtdCombinedServiceAreas_34 = format_OptiCommLtdCombinedServiceAreas_34.readFeatures(json_OptiCommLtdCombinedServiceAreas_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OptiCommLtdCombinedServiceAreas_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OptiCommLtdCombinedServiceAreas_34.addFeatures(features_OptiCommLtdCombinedServiceAreas_34);
var lyr_OptiCommLtdCombinedServiceAreas_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OptiCommLtdCombinedServiceAreas_34, 
                style: style_OptiCommLtdCombinedServiceAreas_34,
                popuplayertitle: 'OptiComm Ltd Combined Service Areas',
                interactive: true,
                title: '<img src="styles/legend/OptiCommLtdCombinedServiceAreas_34.png" /> OptiComm Ltd Combined Service Areas'
            });
var format_Wireless_Backhaul_3Mar24_35 = new ol.format.GeoJSON();
var features_Wireless_Backhaul_3Mar24_35 = format_Wireless_Backhaul_3Mar24_35.readFeatures(json_Wireless_Backhaul_3Mar24_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wireless_Backhaul_3Mar24_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wireless_Backhaul_3Mar24_35.addFeatures(features_Wireless_Backhaul_3Mar24_35);
var lyr_Wireless_Backhaul_3Mar24_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wireless_Backhaul_3Mar24_35, 
                style: style_Wireless_Backhaul_3Mar24_35,
                popuplayertitle: 'Wireless_Backhaul_3Mar24',
                interactive: true,
    title: 'Wireless_Backhaul_3Mar24<br />\
    <img src="styles/legend/Wireless_Backhaul_3Mar24_35_0.png" /> AF24<br />\
    <img src="styles/legend/Wireless_Backhaul_3Mar24_35_1.png" /> AF60<br />\
    <img src="styles/legend/Wireless_Backhaul_3Mar24_35_2.png" /> AF60 HD<br />\
    <img src="styles/legend/Wireless_Backhaul_3Mar24_35_3.png" /> AF60-LR<br />\
    <img src="styles/legend/Wireless_Backhaul_3Mar24_35_4.png" /> IgnitePTMP-60GHz<br />\
    <img src="styles/legend/Wireless_Backhaul_3Mar24_35_5.png" /> IgnitePTP-60GHz<br />\
    <img src="styles/legend/Wireless_Backhaul_3Mar24_35_6.png" /> ISO400<br />\
    <img src="styles/legend/Wireless_Backhaul_3Mar24_35_7.png" /> ISO500<br />\
    <img src="styles/legend/Wireless_Backhaul_3Mar24_35_8.png" /> IsoStation<br />\
    <img src="styles/legend/Wireless_Backhaul_3Mar24_35_9.png" /> Mikrotik-LHG60<br />\
    <img src="styles/legend/Wireless_Backhaul_3Mar24_35_10.png" /> Rocket-ISO400<br />\
    <img src="styles/legend/Wireless_Backhaul_3Mar24_35_11.png" /> Rockets<br />\
    <img src="styles/legend/Wireless_Backhaul_3Mar24_35_12.png" /> WavePro<br />' });
var format_LynhamCombinedServiceArea15May2026_36 = new ol.format.GeoJSON();
var features_LynhamCombinedServiceArea15May2026_36 = format_LynhamCombinedServiceArea15May2026_36.readFeatures(json_LynhamCombinedServiceArea15May2026_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LynhamCombinedServiceArea15May2026_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LynhamCombinedServiceArea15May2026_36.addFeatures(features_LynhamCombinedServiceArea15May2026_36);
var lyr_LynhamCombinedServiceArea15May2026_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LynhamCombinedServiceArea15May2026_36, 
                style: style_LynhamCombinedServiceArea15May2026_36,
                popuplayertitle: 'Lynham Combined Service Area 15 May 2026',
                interactive: true,
                title: '<img src="styles/legend/LynhamCombinedServiceArea15May2026_36.png" /> Lynham Combined Service Area 15 May 2026'
            });
var format_SLC_37 = new ol.format.GeoJSON();
var features_SLC_37 = format_SLC_37.readFeatures(json_SLC_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLC_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLC_37.addFeatures(features_SLC_37);
var lyr_SLC_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLC_37, 
                style: style_SLC_37,
                popuplayertitle: 'SLC',
                interactive: true,
                title: '<img src="styles/legend/SLC_37.png" /> SLC'
            });
var format_Frontier_38 = new ol.format.GeoJSON();
var features_Frontier_38 = format_Frontier_38.readFeatures(json_Frontier_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frontier_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frontier_38.addFeatures(features_Frontier_38);
var lyr_Frontier_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frontier_38, 
                style: style_Frontier_38,
                popuplayertitle: 'Frontier',
                interactive: true,
                title: '<img src="styles/legend/Frontier_38.png" /> Frontier'
            });
var group_P1P2P3P4 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'P1, P2, P3, P4'});
var group_OreanaSites = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Oreana Sites'});
var group_LHN_Geopackage_3Mar24 = new ol.layer.Group({
                                layers: [lyr_Wireless_Backhaul_3Mar24_35,],
                                fold: 'close',
                                title: 'LHN_Geopackage_3Mar24'});
var group_MasterSwoopBH = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MasterSwoopBH'});
var group_COMBINEDSERVICE2AUG2024 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'COMBINED SERVICE 2 AUG 2024'});
var group_ANTICIPATORYNOTICE_06AUG2024 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'ANTICIPATORY NOTICE_06 AUG 2024'});
var group_UnitiGroupLimitedLegacy = new ol.layer.Group({
                                layers: [lyr_LBNCoPtyLtdCombinedServiceAreas_31,lyr_OPENetworksPtyLtdcombinedserviceareas_32,lyr_TelstraLimitedCombinedserviceareas_33,lyr_OptiCommLtdCombinedServiceAreas_34,],
                                fold: 'open',
                                title: 'Uniti Group Limited Legacy'});
var group_OtherSIPsLegacy = new ol.layer.Group({
                                layers: [lyr_AdvatelWirelessPtyLtdcombinedserviceareas_3,lyr_AppliedITSystemsPtyLtdCombinedserviceareas_4,lyr_ASNTelecomPtyLtdCombinedServiceAreas_5,lyr_AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6,lyr_CipherTelPtyLtdcombinedserviceareas_7,lyr_CNTCorpPtyLtdCombinedServiceAreas_8,lyr_CommscoPtyLtdCombinedServiceAreas_9,lyr_CommSolHoldingsPtyLtdcombinedserviceareas_10,lyr_CoreFibreNetworksPtyLtdCombinedserviceareas_11,lyr_DGTekPtyLtdCombinedserviceareas_12,lyr_FiberAssetManagementPtyLtdcombinedserviceareas_13,lyr_FibossPtyLtdCombinedserviceareas_14,lyr_FrontierNetworksPtyLtdCombinedareas_15,lyr_GtelecomPtyLtdCombinedServiceAreas_16,lyr_InterphonePtyLtdCombinedServiceAreas_17,lyr_LegionTelecomPtyLtdCombinedServiceAreas_18,lyr_MyportPtyLtdCombinedserviceareas_19,lyr_NetbayFreeWiFiPtyLtdCombinedserviceareas_20,lyr_OMNIconnectPtyLtdcombinedserviceareas_21,lyr_PipeNetworksPtyLtdCombinedserviceareas_22,lyr_RealWorldNetworksPtyLtdCombinedserviceareas_23,lyr_ReddenetPtyLtdCombinedserviceareas_24,lyr_SensiaPtyLtdCombinedServiceAreas_25,lyr_TaipanNetworxPtyLtdcombinedareas_26,lyr_TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27,lyr_VineNetworksPtyLtdCombinedserviceareas_28,lyr_VocusFibrePtyLtdCombinedareas_29,lyr_VostroNetAustraliaPtyLtdCombinedserviceareas_30,],
                                fold: 'close',
                                title: 'Other SIPs Legacy'});

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(false);lyr_Australialatest_2.setVisible(false);lyr_AdvatelWirelessPtyLtdcombinedserviceareas_3.setVisible(true);lyr_AppliedITSystemsPtyLtdCombinedserviceareas_4.setVisible(true);lyr_ASNTelecomPtyLtdCombinedServiceAreas_5.setVisible(true);lyr_AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6.setVisible(true);lyr_CipherTelPtyLtdcombinedserviceareas_7.setVisible(true);lyr_CNTCorpPtyLtdCombinedServiceAreas_8.setVisible(true);lyr_CommscoPtyLtdCombinedServiceAreas_9.setVisible(true);lyr_CommSolHoldingsPtyLtdcombinedserviceareas_10.setVisible(true);lyr_CoreFibreNetworksPtyLtdCombinedserviceareas_11.setVisible(true);lyr_DGTekPtyLtdCombinedserviceareas_12.setVisible(true);lyr_FiberAssetManagementPtyLtdcombinedserviceareas_13.setVisible(true);lyr_FibossPtyLtdCombinedserviceareas_14.setVisible(true);lyr_FrontierNetworksPtyLtdCombinedareas_15.setVisible(true);lyr_GtelecomPtyLtdCombinedServiceAreas_16.setVisible(true);lyr_InterphonePtyLtdCombinedServiceAreas_17.setVisible(true);lyr_LegionTelecomPtyLtdCombinedServiceAreas_18.setVisible(true);lyr_MyportPtyLtdCombinedserviceareas_19.setVisible(true);lyr_NetbayFreeWiFiPtyLtdCombinedserviceareas_20.setVisible(true);lyr_OMNIconnectPtyLtdcombinedserviceareas_21.setVisible(true);lyr_PipeNetworksPtyLtdCombinedserviceareas_22.setVisible(true);lyr_RealWorldNetworksPtyLtdCombinedserviceareas_23.setVisible(true);lyr_ReddenetPtyLtdCombinedserviceareas_24.setVisible(true);lyr_SensiaPtyLtdCombinedServiceAreas_25.setVisible(true);lyr_TaipanNetworxPtyLtdcombinedareas_26.setVisible(true);lyr_TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27.setVisible(true);lyr_VineNetworksPtyLtdCombinedserviceareas_28.setVisible(true);lyr_VocusFibrePtyLtdCombinedareas_29.setVisible(true);lyr_VostroNetAustraliaPtyLtdCombinedserviceareas_30.setVisible(true);lyr_LBNCoPtyLtdCombinedServiceAreas_31.setVisible(true);lyr_OPENetworksPtyLtdcombinedserviceareas_32.setVisible(true);lyr_TelstraLimitedCombinedserviceareas_33.setVisible(true);lyr_OptiCommLtdCombinedServiceAreas_34.setVisible(true);lyr_Wireless_Backhaul_3Mar24_35.setVisible(true);lyr_LynhamCombinedServiceArea15May2026_36.setVisible(true);lyr_SLC_37.setVisible(true);lyr_Frontier_38.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleHybrid_1,lyr_Australialatest_2,group_OtherSIPsLegacy,group_UnitiGroupLimitedLegacy,group_LHN_Geopackage_3Mar24,lyr_LynhamCombinedServiceArea15May2026_36,lyr_SLC_37,lyr_Frontier_38];
lyr_AdvatelWirelessPtyLtdcombinedserviceareas_3.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_AppliedITSystemsPtyLtdCombinedserviceareas_4.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_ASNTelecomPtyLtdCombinedServiceAreas_5.set('fieldAliases', {'id': 'id', 'name_of_si': 'name_of_si', 'service_ar': 'service_ar', 'service_ar_1': 'service_ar_1', 'contract_': 'contract_', 'project_ar': 'project_ar', 'network_in': 'network_in', 'estimated_': 'estimated_', '_id_': '_id_', });
lyr_AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_CipherTelPtyLtdcombinedserviceareas_7.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_CNTCorpPtyLtdCombinedServiceAreas_8.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_CommscoPtyLtdCombinedServiceAreas_9.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'specified_area': 'specified_area', 'service': 'service', 'shape_length': 'shape_length', 'shape_area': 'shape_area', '_id_': '_id_', });
lyr_CommSolHoldingsPtyLtdcombinedserviceareas_10.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_CoreFibreNetworksPtyLtdCombinedserviceareas_11.set('fieldAliases', {'id': 'id', 'name': 'name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemode': 'altitudemode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion': 'estimated_completion', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_DGTekPtyLtdCombinedserviceareas_12.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_FiberAssetManagementPtyLtdcombinedserviceareas_13.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_FibossPtyLtdCombinedserviceareas_14.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_FrontierNetworksPtyLtdCombinedareas_15.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_GtelecomPtyLtdCombinedServiceAreas_16.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_InterphonePtyLtdCombinedServiceAreas_17.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_LegionTelecomPtyLtdCombinedServiceAreas_18.set('fieldAliases', {'id': 'id', 'name_of_sip_': 'name_of_sip_', 'service_area_': 'service_area_', 'service_area_identifier_': 'service_area_identifier_', 'contract_': 'contract_', 'project_area_': 'project_area_', 'network_infrastructure_': 'network_infrastructure_', 'estimated_completion_date_': 'estimated_completion_date_', '_id_': '_id_', });
lyr_MyportPtyLtdCombinedserviceareas_19.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_NetbayFreeWiFiPtyLtdCombinedserviceareas_20.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', 'contract_entered_date': 'contract_entered_date', '_id_': '_id_', });
lyr_OMNIconnectPtyLtdcombinedserviceareas_21.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_PipeNetworksPtyLtdCombinedserviceareas_22.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_RealWorldNetworksPtyLtdCombinedserviceareas_23.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_ReddenetPtyLtdCombinedserviceareas_24.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_SensiaPtyLtdCombinedServiceAreas_25.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_TaipanNetworxPtyLtdcombinedareas_26.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'specified_area': 'specified_area', 'service': 'service', 'shape_length': 'shape_length', 'shape_area': 'shape_area', '_id_': '_id_', });
lyr_TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'name': 'name', 'wkt': 'wkt', 'shape_length': 'shape_length', 'shape_area': 'shape_area', '_id_': '_id_', });
lyr_VineNetworksPtyLtdCombinedserviceareas_28.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'building_name': 'building_name', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_VocusFibrePtyLtdCombinedareas_29.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completed_date': 'estimated_completed_date', '_id_': '_id_', });
lyr_VostroNetAustraliaPtyLtdCombinedserviceareas_30.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_LBNCoPtyLtdCombinedServiceAreas_31.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', 'shape_length': 'shape_length', 'shape_area': 'shape_area', '_id_': '_id_', });
lyr_OPENetworksPtyLtdcombinedserviceareas_32.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_TelstraLimitedCombinedserviceareas_33.set('fieldAliases', {'id': 'id', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', '_id_': '_id_', });
lyr_OptiCommLtdCombinedServiceAreas_34.set('fieldAliases', {'project_area': 'project_area', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'name_of_sip': 'name_of_sip', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', 'suburb': 'suburb', 'state': 'state', 'id': 'id', 'formatted_address': 'formatted_address', 'latlong': 'latlong', '_id_': '_id_', });
lyr_Wireless_Backhaul_3Mar24_35.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Link Name': 'Link Name', 'Radio Type': 'Radio Type', 'Distance': 'Distance', });
lyr_LynhamCombinedServiceArea15May2026_36.set('fieldAliases', {'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', });
lyr_SLC_37.set('fieldAliases', {'wkt': 'wkt', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', });
lyr_Frontier_38.set('fieldAliases', {'wkt': 'wkt', 'name_of_sip': 'name_of_sip', 'service_area': 'service_area', 'service_area_identifier': 'service_area_identifier', 'contract': 'contract', 'project_area': 'project_area', 'network_infrastructure': 'network_infrastructure', 'estimated_completion_date': 'estimated_completion_date', });
lyr_AdvatelWirelessPtyLtdcombinedserviceareas_3.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_AppliedITSystemsPtyLtdCombinedserviceareas_4.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_ASNTelecomPtyLtdCombinedServiceAreas_5.set('fieldImages', {'id': 'Range', 'name_of_si': '', 'service_ar': '', 'service_ar_1': '', 'contract_': '', 'project_ar': '', 'network_in': '', 'estimated_': '', '_id_': 'Range', });
lyr_AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_CipherTelPtyLtdcombinedserviceareas_7.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_CNTCorpPtyLtdCombinedServiceAreas_8.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_CommscoPtyLtdCombinedServiceAreas_9.set('fieldImages', {'objectid': 'Range', 'id': 'Range', 'specified_area': '', 'service': '', 'shape_length': 'TextEdit', 'shape_area': 'TextEdit', '_id_': 'Range', });
lyr_CommSolHoldingsPtyLtdcombinedserviceareas_10.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_CoreFibreNetworksPtyLtdCombinedserviceareas_11.set('fieldImages', {'id': 'Range', 'name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudemode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'draworder': '', 'icon': '', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion': '', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_DGTekPtyLtdCombinedserviceareas_12.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_FiberAssetManagementPtyLtdcombinedserviceareas_13.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_FibossPtyLtdCombinedserviceareas_14.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_FrontierNetworksPtyLtdCombinedareas_15.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_GtelecomPtyLtdCombinedServiceAreas_16.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_InterphonePtyLtdCombinedServiceAreas_17.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_LegionTelecomPtyLtdCombinedServiceAreas_18.set('fieldImages', {'id': 'Range', 'name_of_sip_': '', 'service_area_': '', 'service_area_identifier_': '', 'contract_': '', 'project_area_': '', 'network_infrastructure_': '', 'estimated_completion_date_': '', '_id_': 'Range', });
lyr_MyportPtyLtdCombinedserviceareas_19.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_NetbayFreeWiFiPtyLtdCombinedserviceareas_20.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', 'contract_entered_date': '', '_id_': 'Range', });
lyr_OMNIconnectPtyLtdcombinedserviceareas_21.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_PipeNetworksPtyLtdCombinedserviceareas_22.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_RealWorldNetworksPtyLtdCombinedserviceareas_23.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_ReddenetPtyLtdCombinedserviceareas_24.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_SensiaPtyLtdCombinedServiceAreas_25.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_TaipanNetworxPtyLtdcombinedareas_26.set('fieldImages', {'objectid': 'Range', 'id': 'Range', 'specified_area': '', 'service': '', 'shape_length': 'TextEdit', 'shape_area': 'TextEdit', '_id_': 'Range', });
lyr_TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27.set('fieldImages', {'objectid': 'Range', 'id': 'Range', 'name': '', 'wkt': '', 'shape_length': 'TextEdit', 'shape_area': 'TextEdit', '_id_': 'Range', });
lyr_VineNetworksPtyLtdCombinedserviceareas_28.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'building_name': '', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_VocusFibrePtyLtdCombinedareas_29.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completed_date': '', '_id_': 'Range', });
lyr_VostroNetAustraliaPtyLtdCombinedserviceareas_30.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_LBNCoPtyLtdCombinedServiceAreas_31.set('fieldImages', {'id': 'Range', 'objectid': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', 'shape_length': 'TextEdit', 'shape_area': 'TextEdit', '_id_': 'Range', });
lyr_OPENetworksPtyLtdcombinedserviceareas_32.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_TelstraLimitedCombinedserviceareas_33.set('fieldImages', {'id': 'Range', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', '_id_': 'Range', });
lyr_OptiCommLtdCombinedServiceAreas_34.set('fieldImages', {'project_area': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'name_of_sip': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', 'suburb': 'TextEdit', 'state': 'TextEdit', 'id': 'Range', 'formatted_address': 'TextEdit', 'latlong': 'TextEdit', '_id_': 'Range', });
lyr_Wireless_Backhaul_3Mar24_35.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Link Name': 'TextEdit', 'Radio Type': 'TextEdit', 'Distance': 'TextEdit', });
lyr_LynhamCombinedServiceArea15May2026_36.set('fieldImages', {'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', });
lyr_SLC_37.set('fieldImages', {'wkt': 'TextEdit', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', });
lyr_Frontier_38.set('fieldImages', {'wkt': 'TextEdit', 'name_of_sip': 'TextEdit', 'service_area': 'TextEdit', 'service_area_identifier': 'TextEdit', 'contract': 'TextEdit', 'project_area': 'TextEdit', 'network_infrastructure': 'TextEdit', 'estimated_completion_date': 'TextEdit', });
lyr_AdvatelWirelessPtyLtdcombinedserviceareas_3.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_AppliedITSystemsPtyLtdCombinedserviceareas_4.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_ASNTelecomPtyLtdCombinedServiceAreas_5.set('fieldLabels', {'id': 'no label', 'name_of_si': 'no label', 'service_ar': 'no label', 'service_ar_1': 'no label', 'contract_': 'no label', 'project_ar': 'no label', 'network_in': 'no label', 'estimated_': 'no label', '_id_': 'no label', });
lyr_AustralianCommunicationsGroupPtyLtdCombinedserviceareas_6.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_CipherTelPtyLtdcombinedserviceareas_7.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_CNTCorpPtyLtdCombinedServiceAreas_8.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_CommscoPtyLtdCombinedServiceAreas_9.set('fieldLabels', {'objectid': 'no label', 'id': 'no label', 'specified_area': 'no label', 'service': 'no label', 'shape_length': 'no label', 'shape_area': 'no label', '_id_': 'no label', });
lyr_CommSolHoldingsPtyLtdcombinedserviceareas_10.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_CoreFibreNetworksPtyLtdCombinedserviceareas_11.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudemode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'draworder': 'no label', 'icon': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_DGTekPtyLtdCombinedserviceareas_12.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_FiberAssetManagementPtyLtdcombinedserviceareas_13.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_FibossPtyLtdCombinedserviceareas_14.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_FrontierNetworksPtyLtdCombinedareas_15.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_GtelecomPtyLtdCombinedServiceAreas_16.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_InterphonePtyLtdCombinedServiceAreas_17.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_LegionTelecomPtyLtdCombinedServiceAreas_18.set('fieldLabels', {'id': 'no label', 'name_of_sip_': 'no label', 'service_area_': 'no label', 'service_area_identifier_': 'no label', 'contract_': 'no label', 'project_area_': 'no label', 'network_infrastructure_': 'no label', 'estimated_completion_date_': 'no label', '_id_': 'no label', });
lyr_MyportPtyLtdCombinedserviceareas_19.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_NetbayFreeWiFiPtyLtdCombinedserviceareas_20.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', 'contract_entered_date': 'no label', '_id_': 'no label', });
lyr_OMNIconnectPtyLtdcombinedserviceareas_21.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_PipeNetworksPtyLtdCombinedserviceareas_22.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_RealWorldNetworksPtyLtdCombinedserviceareas_23.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_ReddenetPtyLtdCombinedserviceareas_24.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_SensiaPtyLtdCombinedServiceAreas_25.set('fieldLabels', {'id': 'no label', 'name_of_sip': 'no label', 'service_area': 'no label', 'service_area_identifier': 'no label', 'contract': 'no label', 'project_area': 'no label', 'network_infrastructure': 'no label', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_TaipanNetworxPtyLtdcombinedareas_26.set('fieldLabels', {'objectid': 'inline label - always visible', 'id': 'inline label - always visible', 'specified_area': 'inline label - always visible', 'service': 'inline label - always visible', 'shape_length': 'no label', 'shape_area': 'no label', '_id_': 'no label', });
lyr_TransactCapitalCommunicationsPtyLtdCombinedserviceareas_27.set('fieldLabels', {'objectid': 'inline label - always visible', 'id': 'inline label - always visible', 'name': 'inline label - always visible', 'wkt': 'inline label - always visible', 'shape_length': 'inline label - always visible', 'shape_area': 'no label', '_id_': 'no label', });
lyr_VineNetworksPtyLtdCombinedserviceareas_28.set('fieldLabels', {'id': 'inline label - always visible', 'name_of_sip': 'inline label - always visible', 'service_area': 'inline label - always visible', 'service_area_identifier': 'inline label - always visible', 'contract': 'inline label - always visible', 'building_name': 'inline label - always visible', 'project_area': 'inline label - always visible', 'network_infrastructure': 'inline label - always visible', 'estimated_completion_date': 'no label', '_id_': 'no label', });
lyr_VocusFibrePtyLtdCombinedareas_29.set('fieldLabels', {'id': 'inline label - always visible', 'name_of_sip': 'inline label - always visible', 'service_area': 'inline label - always visible', 'service_area_identifier': 'inline label - always visible', 'contract': 'inline label - always visible', 'project_area': 'inline label - always visible', 'network_infrastructure': 'inline label - always visible', 'estimated_completed_date': 'inline label - always visible', '_id_': 'no label', });
lyr_VostroNetAustraliaPtyLtdCombinedserviceareas_30.set('fieldLabels', {'id': 'inline label - always visible', 'name_of_sip': 'inline label - always visible', 'service_area': 'inline label - always visible', 'service_area_identifier': 'inline label - always visible', 'contract': 'inline label - always visible', 'project_area': 'inline label - always visible', 'network_infrastructure': 'inline label - always visible', 'estimated_completion_date': 'inline label - always visible', '_id_': 'no label', });
lyr_LBNCoPtyLtdCombinedServiceAreas_31.set('fieldLabels', {'id': 'inline label - always visible', 'objectid': 'inline label - always visible', 'name_of_sip': 'inline label - always visible', 'service_area': 'inline label - always visible', 'service_area_identifier': 'inline label - always visible', 'contract': 'inline label - always visible', 'project_area': 'inline label - always visible', 'network_infrastructure': 'inline label - always visible', 'estimated_completion_date': 'inline label - always visible', 'shape_length': 'no label', 'shape_area': 'no label', '_id_': 'no label', });
lyr_OPENetworksPtyLtdcombinedserviceareas_32.set('fieldLabels', {'id': 'inline label - always visible', 'name_of_sip': 'inline label - always visible', 'service_area': 'inline label - always visible', 'service_area_identifier': 'inline label - always visible', 'contract': 'inline label - always visible', 'project_area': 'inline label - always visible', 'network_infrastructure': 'inline label - always visible', 'estimated_completion_date': 'inline label - always visible', '_id_': 'no label', });
lyr_TelstraLimitedCombinedserviceareas_33.set('fieldLabels', {'id': 'inline label - always visible', 'name_of_sip': 'inline label - always visible', 'service_area': 'inline label - always visible', 'service_area_identifier': 'inline label - always visible', 'contract': 'inline label - always visible', 'project_area': 'inline label - always visible', 'network_infrastructure': 'inline label - always visible', 'estimated_completion_date': 'inline label - always visible', '_id_': 'no label', });
lyr_OptiCommLtdCombinedServiceAreas_34.set('fieldLabels', {'project_area': 'inline label - always visible', 'service_area': 'inline label - always visible', 'service_area_identifier': 'inline label - always visible', 'contract': 'inline label - always visible', 'name_of_sip': 'inline label - always visible', 'network_infrastructure': 'inline label - always visible', 'estimated_completion_date': 'inline label - always visible', 'suburb': 'inline label - always visible', 'state': 'inline label - always visible', 'id': 'no label', 'formatted_address': 'no label', 'latlong': 'no label', '_id_': 'no label', });
lyr_Wireless_Backhaul_3Mar24_35.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Link Name': 'inline label - always visible', 'Radio Type': 'no label', 'Distance': 'no label', });
lyr_LynhamCombinedServiceArea15May2026_36.set('fieldLabels', {'name_of_sip': 'inline label - visible with data', 'service_area': 'inline label - visible with data', 'service_area_identifier': 'inline label - visible with data', 'contract': 'inline label - visible with data', 'project_area': 'inline label - always visible', 'network_infrastructure': 'inline label - visible with data', 'estimated_completion_date': 'inline label - visible with data', });
lyr_SLC_37.set('fieldLabels', {'wkt': 'inline label - visible with data', 'name_of_sip': 'inline label - visible with data', 'service_area': 'inline label - visible with data', 'service_area_identifier': 'inline label - visible with data', 'contract': 'inline label - visible with data', 'project_area': 'header label - always visible', 'network_infrastructure': 'inline label - visible with data', 'estimated_completion_date': 'inline label - visible with data', });
lyr_Frontier_38.set('fieldLabels', {'wkt': 'inline label - visible with data', 'name_of_sip': 'inline label - visible with data', 'service_area': 'inline label - visible with data', 'service_area_identifier': 'inline label - visible with data', 'contract': 'inline label - visible with data', 'project_area': 'inline label - always visible', 'network_infrastructure': 'inline label - visible with data', 'estimated_completion_date': 'inline label - visible with data', });
lyr_Frontier_38.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});