var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'operator:wikipedia': 'operator:wikipedia', 'operator:wikidata': 'operator:wikidata', 'operator': 'operator', 'healthcare': 'healthcare', 'self_service': 'self_service', 'religion': 'religion', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'amenity': 'amenity', 'office': 'office', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'admin_level': 'admin_level', 'addr:full': 'addr:full', 'access:roof': 'access:roof', 'shop': 'shop', 'tourism': 'tourism', 'phone': 'phone', 'name': 'name', 'internet_access:ssid': 'internet_access:ssid', 'internet_access:fee': 'internet_access:fee', 'internet_access': 'internet_access', 'fax': 'fax', 'email': 'email', 'bar': 'bar', 'air_conditioning': 'air_conditioning', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'type': 'type', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'operator:wikipedia': '', 'operator:wikidata': '', 'operator': '', 'healthcare': '', 'self_service': '', 'religion': '', 'school:type_idn': '', 'operator:type': '', 'amenity': '', 'office': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'admin_level': '', 'addr:full': '', 'access:roof': '', 'shop': '', 'tourism': '', 'phone': '', 'name': '', 'internet_access:ssid': '', 'internet_access:fee': '', 'internet_access': '', 'fax': '', 'email': '', 'bar': '', 'air_conditioning': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'type': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'operator:wikipedia': 'no label', 'operator:wikidata': 'no label', 'operator': 'no label', 'healthcare': 'no label', 'self_service': 'no label', 'religion': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'amenity': 'no label', 'office': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'admin_level': 'no label', 'addr:full': 'no label', 'access:roof': 'no label', 'shop': 'no label', 'tourism': 'no label', 'phone': 'no label', 'name': 'no label', 'internet_access:ssid': 'no label', 'internet_access:fee': 'no label', 'internet_access': 'no label', 'fax': 'no label', 'email': 'no label', 'bar': 'no label', 'air_conditioning': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'type': 'no label', });
lyr_building_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});