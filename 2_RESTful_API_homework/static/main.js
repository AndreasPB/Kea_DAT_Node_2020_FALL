$(function (){

    const $carWashes = $('#carWashes')
    $.ajax({
        type: 'GET',
        url: '/api/carWashes',
        success: function (carWashes) {
            $.each(carWashes, function(index, carWash) {
                $carWashes.append('<li>name: ' + carWash.name + 'price: ' + carWash.price + '</li>');
                console.log(carWash);
            });
            
        }
    });
});