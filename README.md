# React Router Uygulaması - E-ticaret Sitesi

Bu proje, React ve React Router kullanılarak geliştirilmiş basit bir e-ticaret sitesi uygulamasıdır. Uygulamada farklı sayfalar arasında gezinme ve ürünleri listeleyip ürün detaylarını görüntüleme imkanı sunulmaktadır.

## Kullanılan Teknolojiler

``React Router:`` Uygulama içi sayfa yönlendirmelerini yönetmek için kullanılan kütüphane.

``React - Bootstrap / Bootstrap:`` Temel stil ve düzenlemeler için kullanılan CSS kütüphanesi.

## Uygulama Yapısı
Uygulama, aşağıdaki bileşenler ve sayfalar arasında yönlendirmelerle oluşturulmuştur:

``App.js :`` Ana uygulama bileşeni, sayfalar arasında yönlendirmeleri içerir.
``NavbarComp.js :`` Sayfa başlığı ve navigasyon menüsü bileşeni.
``FooterComp.js :`` Sayfa alt kısmında yer alan footer bileşeni.
``Home.js :`` Ana sayfa bileşeni.
``Products.js :`` Ürünlerin listelendiği sayfa bileşeni.
``ProductDetail.js :`` Seçilen ürünün detaylarının gösterildiği sayfa bileşeni.
``About.js :`` Hakkımızda sayfası bileşeni.
``NotFound.js :`` Geçersiz URL'ler için 404 sayfa bileşeni.
``Campaigns.js :`` Kampanya seçeneklerini gösteren sayfa bileşeni.
``BlackFriday.js :`` Black Friday kampanya alt sayfaları.
``Discounts.js :`` Sürpriz indirimler alt sayfası.
``PrivateRouter.js :`` Gizli sayfalara erişim kontrolü için özel yönlendirici bileşeni.
``Login.js :`` Kullanıcı giriş sayfası bileşeni.

## Veri Kaynağı

Ürün verileri, fakestoreapi.com API'sini kullanarak alınmaktadır. Uygulama, API üzerinden ürünleri çekerek listelemektedir.