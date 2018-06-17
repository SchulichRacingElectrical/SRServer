
$(document).ready(function(){
    //connect to the socket server.
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');

    //receive details from server
    socket.on('newnumber', function(msg) {
        console.log("Received number" + msg);
        var rpmHTML = '<span class="label label-default">' + msg['rpm'].toString() + '</span>';
        var batteryHTML = '<span class="label label-default">' + msg['battery'].toString() + '</span>';
        if (msg['battery'] <= 12.5){
            batteryHTML = '<span class="label label-warning">' + msg['battery'].toString() + '</span>';
        }
        var coolantTemperatureHTML = '<span class="label label-default">' + msg['coolantTemperature'].toString() + '</span>';
        var mapHTML = '<span class="label label-default">' + msg['map'].toString() + '</span>';
        var speedHTML = '<span class="label label-default">' + msg['speed'].toString() + '</span>';
        var oilPressureHTML = '<span class="label label-default">' + msg['oilPressure'].toString() + '</span>';
        var oilTemperatureHTML = '<span class="label label-default">' + msg['oilTemperature'].toString() + '</span>';
        var afrHTML = '<span class="label label-default">' + msg['afr'].toString() + '</span>';
        var tpsHTML = '<span class="label label-default">' + msg['tps'].toString() + '</span>';
        var fuelTempHTML = '<span class="label label-default">' + msg['fuelTemp'].toString() + '</span>';
        var accelXHTML = '<span class="label label-default">' + msg['accelX'].toString() + '</span>';
        var accelYHTML = '<span class="label label-default">' + msg['accelY'].toString() + '</span>';
        var accelZHTML = '<span class="label label-default">' + msg['accelZ'].toString() + '</span>';
        var latitudeHTML = '<span class="label label-default">' + msg['latitude'].toString() + '</span>';
        var longitudeHTML = '<span class="label label-default">' + msg['longitude'].toString() + '</span>';
        var injectorPWHTML = '<span class="label label-default">' + msg['injectorPW'].toString() + '</span>';
        var yawHTML = '<span class="label label-default">' + msg['yaw'].toString() + '</span>';
        var rollHTML = '<span class="label label-default">' + msg['roll'].toString() + '</span>';
        var pitchHTML = '<span class="label label-default">' + msg['pitch'].toString() + '</span>';
        var altitudeHTML = '<span class="label label-default">' + msg['altitude'].toString() + '</span>';
        var flHTML = '<span class="label label-default">' + msg['frontLeft'].toString() + '</span>';
        var frHTML = '<span class="label label-default">' + msg['frontRight'].toString() + '</span>';
        var rlHTML = '<span class="label label-default">' + msg['rearLeft'].toString() + '</span>';
        var rrHTML = '<span class="label label-default">' + msg['rearRight'].toString() + '</span>';
        var fuelRateHTML = '<span class="label label-default">' + msg['fuelRate'].toString() + '</span>';
        var fuelUsageHTML = '<span class="label label-default">' + msg['fuelUsage'].toString() + '</span>';

        //Row 1
        $('#rpm').html(rpmHTML);
        $('#afr').html(afrHTML);
        $('#speed').html(speedHTML);
        $('#battery').html(batteryHTML);

        //Row 2
        $('#oilPressure').html(oilPressureHTML);
        $('#oilTemperature').html(oilTemperatureHTML);
        $('#coolantTemperature').html(coolantTemperatureHTML);
        $('#fuelTemp').html(fuelTempHTML);
        $('#fuelRate').html(fuelRateHTML);
        $('#fuelUsage').html(fuelUsageHTML);


        //Row 3
        $('#map').html(mapHTML);
        $('#tps').html(tpsHTML);
        $('#latitude').html(latitudeHTML);
        $('#longitude').html(longitudeHTML);

        //Row 4
        $('#accelX').html(accelXHTML);
        $('#accelY').html(accelYHTML);
        $('#accelZ').html(accelZHTML);
        $('#injectorPW').html(injectorPWHTML);

        //Row 5
        $('#yaw').html(yawHTML);
        $('#roll').html(rollHTML);
        $('#pitch').html(pitchHTML);
        $('#altitude').html(altitudeHTML);

        //Row 6
        $('#frontLeft').html(flHTML);
        $('#frontRight').html(frHTML);
        $('#rearLeft').html(rlHTML);
        $('#rearRight').html(rrHTML);

    });

});
