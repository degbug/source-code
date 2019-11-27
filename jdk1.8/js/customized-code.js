$(document).ready(function () {
    var statusChange = true;
    $('#btn-sidebar-toggle').on('click', function () {
        if (statusChange) {
            $('#frameContentLeft').removeClass('left');
            $('#frameContentLeft').addClass('left-none');
            $('#mains').removeClass('main');
            $('#mains').addClass('main-none');
            statusChange = false;
        } else {
            $('#frameContentLeft').removeClass('left-none');
            $('#frameContentLeft').addClass('left');
            
            $('#mains').removeClass('main-none');
            $('#mains').addClass('main');
            statusChange = true;
        }
    })
})