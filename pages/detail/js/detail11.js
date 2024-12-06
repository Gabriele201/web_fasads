var app = angular.module('websiteAdv', []);

app.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i = 0; i < total; i++) {
            input.push(i + 1);
        }
        return input;
    };
});

app.controller('ControllerDetail', function($scope) {
    $scope.produk = {
        nama: 'Precious Pansy Pave Drop Huggies',
        merk: 'KATESPADE',
        varian: ['Varian A', 'Varian B', 'Varian C'],
        harga: 1590000,
        rating: 4.5,
        ulasan: 125,
        deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dicta!',
        link: 'https://katespade.co.id/precious-pansy-pave-drop-huggies-ki038-700-u.html',
        gambar: '../../assets/acc1.png'
    };

    $scope.favorit = false;

    $scope.toggleFavorit = function() {
        $scope.favorit = !$scope.favorit;
    };

    $scope.ulasanProduk = [
        { nama: 'Aca', komentar: 'Bagus banget, sesuai ekspektasi!' },
        { nama: 'Ici', komentar: 'Mantap, ga nyesel beli!' },
        { nama: 'Oco', komentar: 'Kualitas oke, puas banget!' }
    ];

    $scope.varianTerpilih = null;

    $scope.pilihVarian = function(varian) {
        $scope.varianTerpilih = varian;
    };
});