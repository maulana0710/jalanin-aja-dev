<?php
// server.php
// phpinfo();

// Sample data transport
// $dataTransport = array(
//     array(
//         "id" => 1,
//         "name" => "Plane",
//         "img" => "https://flyingmag.sfo3.digitaloceanspaces.com/flyingma/wp-content/uploads/2022/06/23090933/AdobeStock_249454423-scaled.jpeg",
//         "price" => "2.500.000",
//         "day" => "4",
//         "package" => "Business",
//         "Benefits" => "breakfast, transport, tour guide, coupon, hotel"
//     ),
//     array(
//         "id" => 2,
//         "name" => "Cruise Ship",
//         "img" => "https://www.carnival.com/-/media/images/ships/carnival-luminosa-open-for-sale-hero-mobile.jpg",
//         "price" => "6.500.000",
//         "day" => "7",
//         "package" => "Luxury",
//         "Benefits" => "breakfast, transport, tour guide, coupon, hotel"
//     ),
//     array(
//         "id" => 3,
//         "name" => "Bus",
//         "img" => "https://awsimages.detik.net.id/community/media/visual/2022/08/01/bus-pariwisata-pesona-milik-mas-wahid-dengan-bodi-laksana-dan-sais-hino.jpeg?w=600&q=90",
//         "price" => "1.500.000",
//         "day" => "3",
//         "package" => "Premium",
//         "Benefits" => "breakfast, transport, tour guide, coupon, hotel"
//     ),
//     array(
//         "id" => 4,
//         "name" => "Train",
//         "img" => "https://img.freepik.com/free-photo/steam-train-chugs-through-mountain-forest-scene-generative-ai_188544-8072.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710288000&semt=sph",
//         "price" => "1.500.000",
//         "day" => "3",
//         "package" => "Business",
//         "Benefits" => "breakfast, transport, tour guide, coupon, hotel"
//     )
// );
// Sample data transport

// Set the response header to indicate JSON content
header('Content-Type: application/json');
// Echo the data as JSON
echo json_encode($dataTransport);
?>
