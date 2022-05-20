$(document).ready(function() {
    document.getElementById('hi').onclick = function() {
        $('.btn').wrapAll('<div class="warp"></div>');
    }
    document.getElementById('id').onclick = function() {
        $('#hi').replaceWith('<b>da chinh sua</b>');
    }
});